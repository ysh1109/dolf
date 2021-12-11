import { Tabs } from "@mantine/core";
import { HomeIcon } from "@modulz/radix-icons";
import React from "react";
import ActiveOrder from "./ActiveOrder";
import CompletedOrder from "./CompletedOrder";
import PendingOrder from "./PendingOrder";

const DriverHomeTabs = () => {
  return (
    <Tabs color="cyan" tabPadding="lg">
      <Tabs.Tab label="Pending" icon={<HomeIcon />}>
        <PendingOrder />
      </Tabs.Tab>
      <Tabs.Tab label="Active" icon={<HomeIcon />}>
        <ActiveOrder />
      </Tabs.Tab>
      <Tabs.Tab label="Completed" icon={<HomeIcon />}>
        <CompletedOrder />
      </Tabs.Tab>
    </Tabs>
  );
};

export default DriverHomeTabs;
