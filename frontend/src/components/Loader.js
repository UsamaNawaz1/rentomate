import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <div style={{}}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        style={{
          height: "100px",
          width: "100px",
          display: "block",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Loader;
