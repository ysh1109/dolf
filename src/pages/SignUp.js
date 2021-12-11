import { Center, Group, NumberInput, PasswordInput, Radio, RadioGroup, TextInput, UnstyledButton } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ReactForm from "../components/react-form/ReactForm";
import ReactContainer from "../components/ReactContainer";
import { ADD_DATA } from "../redux/Actions";
import { useAuth } from "../userContext/userContext";
import classes from "./LogInPage.module.css";
const SignupPage = (props) => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <ReactContainer title="Register">
      <ReactForm
        initialValues={{
          userType: "User",
          mobile: "",
          first_name: "",
          last_name: "",
          license_plate: "",
          email: "",
          password: "",
        }}
        validationRules={{
          email: (value) => /^\S+@\S+$/.test(value),
          password: (value) => value,
          mobile: (value) => value,
          first_name: (value) => value,
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
              navigate("/");
            },
            user: data,
          });
        }}
      >
        <RadioGroup field="userType" label="Select User Type">
          <Radio value="User">User</Radio>
          <Radio value="Driver">Driver</Radio>
        </RadioGroup>
        <TextInput field="first_name" label="First Name" required />
        <TextInput field="last_name" label="Last Name" />
        <TextInput
          field="license_plate"
          label="License Plate"
          required
          visible={({ values }) => values?.userType === "Driver"}
        />
        <NumberInput field="mobile" label="Mobile Number" required />

        <TextInput field="email" label="Email" required />
        <PasswordInput field="password" label="Password" required />
      </ReactForm>
      <Group mt={20} direction="column" position="center">
        <div>Or</div>
        <UnstyledButton>
          <div
            style={{ color: "#E00890", fontWeight: "bold", fontSize: 20 }}
            onClick={() => {
              navigate("/");
            }}
          >
            Log In
          </div>
        </UnstyledButton>
      </Group>
    </ReactContainer>
  );
};

export default SignupPage;
