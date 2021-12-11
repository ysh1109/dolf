import React from "react";
import ReactContainer from "../../../components/ReactContainer";
import ReactForm from "../../../components/react-form/ReactForm";
import { TextInput } from "@mantine/core";
import { useDispatch, useStore } from "react-redux";
import { useNavigate } from "react-router";
import { ADD_DATA } from "../../../redux/Actions";
const ProfileDetaisForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData = {} } = useStore()?.getState() || {};
  return (
    <ReactContainer title="Vehicle Details">
      <ReactForm
        initialValues={{
          ...userData,
        }}
        validationRules={{}}
        onSubmit={({ data }) => {
          dispatch({
            type: ADD_DATA,
            payload: {
              userData: data,
            },
          });
          navigate(`/requst-accept-details-form`);
        }}
      >
        <TextInput field="first_name" label="First Name" />
        <TextInput field="last_name" label="Last Name" />
        <TextInput field="email" label="Email Address" />
        <TextInput field="mobile" label="Phone Number" />
      </ReactForm>
    </ReactContainer>
  );
};

export default ProfileDetaisForm;
