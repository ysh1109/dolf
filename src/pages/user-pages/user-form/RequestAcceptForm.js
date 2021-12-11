import React from "react";
import { Button, Group, Title } from "@mantine/core";
import { useDispatch, useStore } from "react-redux";
import ReactContainer from "../../../components/ReactContainer";
import { useNotifications } from "@mantine/notifications";
import { useNavigate } from "react-router";
import { RESET_DATA } from "../../../redux/Actions";
function RequestAcceptForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifications = useNotifications();
  const { issue, service_cost = 5000 } = useStore()?.getState() || {};
  return (
    <ReactContainer>
      <div
        style={{
          padding: 10,
          borderBottomWidth: 2,
          borderBottomColor: "black",
          borderBottomStyle: "solid",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <Title order={3}>{issue}</Title>
      </div>
      <div style={{ padding: 10, borderBottomWidth: 2, borderBottomColor: "black", borderBottomStyle: "solid" }}>
        <Group mt={10} mb={10} position="apart">
          <div>Service Cost </div>
          <div>{service_cost}</div>
        </Group>
        <Group mt={10} mb={10} position="apart">
          <div>Travel Cost </div>
          <div>{0}</div>
        </Group>
      </div>
      <div>
        <Group mt={10} mb={10} position="apart">
          <div>Total Service Cost </div>
          <div>{service_cost}</div>
        </Group>
      </div>
      <Button
        mt={20}
        uppercase
        fullWidth
        onClick={() => {
          notifications.showNotification({
            title: "Send Successful!",
            message: "Hey,Your request submitted successful!🤥",
          });
          dispatch({ type: RESET_DATA });
          navigate("/", { replace: true });
        }}
      >
        accept
      </Button>
    </ReactContainer>
  );
}

export default RequestAcceptForm;
