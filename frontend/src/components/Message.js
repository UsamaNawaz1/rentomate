import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Message = ({ status, children }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {children}
    </Alert>
  );
};

export default Message;
