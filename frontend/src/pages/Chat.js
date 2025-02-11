import React, { useState, useEffect } from "react";

import { useGetMessagesByEventId, usePostMessagesByEventId } from "../api/queries";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { UseGetMessagesByEventIdKeyFn } from "../api/queries";

import { useAuth } from "../hooks/Auth";

import {
  IsPendingSection,
  ShowErrorSection,
  NotLoggedIn,
  MessageList,
} from "../components";

import { Box, Form, PageContent, TextArea, PageHeader, Button } from "grommet";

/**
 * Chat component that allows users to send messages to each other for an event
 * @returns {JSX.Element} - Chat component
 */
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { id } = useParams();
  const { state } = useAuth();
  const { isAuthenticated } = state;
  const userId = state.userId;

  const { data, isPending, isError, error } = useGetMessagesByEventId(
    { id: id },
    undefined,
    {
      enabled: isAuthenticated,
    }
  );

  const queryClient = useQueryClient();
  const { mutate: postMessage } = usePostMessagesByEventId(undefined, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: UseGetMessagesByEventIdKeyFn(),
      });
      setNewMessage("");
    },
    onError: (error) => {
      console.log("Error posting message:", error);
    },
  });

  useEffect(() => {
    if (!isPending && data) {
      setMessages(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
  }, [data, isPending]);

  if (!isAuthenticated) {
    return NotLoggedIn();
  }

  if (isPending || isError) {
    return isError ? ShowErrorSection(error.message) : IsPendingSection();
  }

  const handlePostMessage = (e) => {
    e.preventDefault();
    if (!newMessage) {
      return;
    }
    postMessage({
      event: id,
      body: {
        sender: userId,
        content: newMessage,
        date: new Date().toISOString(),
      },
    });
  };

  // function to create an array of messages to display in the chat
  function createArrayMessages() {
    return messages.map((message) => ({
      messageContent: message.content,
      userName: message.sender,
      date: message.date,
      isUserMessage: message.sender === userId,
    }));
  }

  return (
    <PageContent>
      <PageHeader title="Chat" />
      <Box direction="column" overflow="hidden">
        <Box
          flex="1"
          height="90%"
          overflow="auto"
          padding="small"
          style={{ display: "flex", flexDirection: "column-reverse" }}
        >
          <MessageList messages={createArrayMessages()} />
        </Box>

        <Box width="100%" pad="small" style={{ marginTop: "small" }}>
          <Form onSubmit={handlePostMessage}>
            <Box color="red" direction="row" gap="small" align="center" width="100%">
              <TextArea
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={{
                  resize: "none",
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <Button
                type="submit"
                style={{
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                primary
                label="Send"
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </PageContent>
  );
};

export { Chat };
