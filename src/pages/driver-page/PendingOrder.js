import { Button, Group, Paper, SimpleGrid, Title } from "@mantine/core";
import React from "react";

const PendingOrder = () => {
  return (
    <SimpleGrid
      m={20}
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "sm" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) => {
        return (
          <Paper padding="lg" shadow="lg">
            <div>
              <Title order={3}>Pending Order {ele}</Title>
              <Group mt={15}>
                <Button>Accept</Button>
                <Button variant="outline">Reject</Button>
              </Group>
            </div>
          </Paper>
        );
      })}
    </SimpleGrid>
  );
};

export default PendingOrder;
