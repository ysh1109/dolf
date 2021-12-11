import { Center, Group, PasswordInput, Radio, RadioGroup, TextInput, UnstyledButton } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ReactForm from "../components/react-form/ReactForm";
import ReactContainer from "../components/ReactContainer";
import { ADD_DATA } from "../redux/Actions";
import { useAuth } from "../userContext/userContext";
import classes from "./LogInPage.module.css";
const LogInPage = (props) => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <ReactContainer title="WelCome">
      <ReactForm
        initialValues={{
          userType: "User",
          email: "",
          password: "",
        }}
        validationRules={{
          email: (value) => /^\S+@\S+$/.test(value),
          password: (value) => value,
        }}
        onSubmit={({ reset, data, modifyData, path, setLoading }) => {
          setLoading(true);
          signin({
            cb: () => {
              setLoading(false);
              dispatch({
                type: ADD_DATA,
                payload: {
                  userData: data,
                },
              });
            },
            user: data,
          });
        }}
      >
        <RadioGroup field="userType" label="Select User Type">
          <Radio value="User">User</Radio>
          <Radio value="Driver">Driver</Radio>
        </RadioGroup>
        <TextInput field="email" label="Email" required />
        <PasswordInput field="password" label="Password" required />
      </ReactForm>
      <Group mt={20} direction="column" position="center">
        <div>Or</div>
        <UnstyledButton>
          <div
            style={{ color: "#E00890", fontWeight: "bold", fontSize: 20 }}
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign Up
          </div>
        </UnstyledButton>
      </Group>
    </ReactContainer>
  );
};

export default LogInPage;
