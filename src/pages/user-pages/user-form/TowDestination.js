import React from "react";
import ReactContainer from "../../../components/ReactContainer";
import ReactForm from "../../../components/react-form/ReactForm";
import { Select, Textarea, TextInput } from "@mantine/core";
import { useDispatch, useStore } from "react-redux";
import { useNavigate } from "react-router";
import { ADD_DATA } from "../../../redux/Actions";
const TowDestination = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { towDestination = {} } = useStore()?.getState() || {};
  return (
    <ReactContainer title="Tow Destination">
      <ReactForm
        initialValues={{
          ...towDestination,
        }}
        button="Next"
        onSubmit={({ data }) => {
          dispatch({
            type: ADD_DATA,
            payload: {
              towDestination: data,
            },
          });
          navigate(`/tow-fuel-details-form`);
        }}
      >
        <TextInput field="address" />
      </ReactForm>
    </ReactContainer>
  );
};

export default TowDestination;
