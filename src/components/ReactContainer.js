import { Paper, Text, Title } from "@mantine/core";
import React from "react";

const ReactContainer = ({ title, children }) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <Paper padding="lg" shadow="lg" style={{ maxWidth: 500, minWidth: 350 }}>
        {title && (
          <Title mb={5} order={3}>
            {title}
          </Title>
        )}
        {children}
      </Paper>
    </div>
  );
};

export default ReactContainer;
