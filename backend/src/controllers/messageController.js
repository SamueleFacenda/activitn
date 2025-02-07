import Message from "../models/message.js";

const createMessage = async (req, res) => {
  try {
    const eventId = req.params.id;
    const { content, date, sender } = req.body;
    // Assert the content and date are present
    if (!content || !date) {
      return res.status(400).json({ error: "Content and date are required" });
    }

    // Assert the sender ID is present
    if (!sender) {
      return res.status(400).json({ error: "Sender ID is required" });
    }

    // Create a new message
    const message = new Message({
      sender: sender, // Use the sender ID
      event: eventId,
      content,
      date: new Date(date),
    });

    // Save the message
    await message.save();

    // Return the message
    res.status(201).json(message);
  } catch (error) {
    console.error(error); // Log the error
    res.status(400).json({ error: error.message || "Error creating message" });
  }
};

const getEventMessages = async (req, res) => {
  try {
    const eventId = req.params.id;
    const messages = await Message.find({ event: eventId }).populate("sender"); // use populate to get the sender's details
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
    console.error("Error fetching the messages of an event:", error);
  }
};

export default { createMessage, getEventMessages };
