import React, { useState } from "react";
import { Box, TextInput, Text } from "grommet";
import "./LoginInputTextBar.css";

export default function LoginComponentTextBar({
  typeInput,
  setText,
  value,
  placeHolder,
}) {
  return (
    <Box className={`input-wrapper`} width="medium" pad={{ vertical: "small" }}>
      <TextInput
        className="input-text-login"
        type={typeInput}
        placeholder={!value && placeHolder}
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
      <Text className={`label-login ${!value ? "hidden" : "visible"}`}>
        {placeHolder}
      </Text>
    </Box>
  );
}
