import React from "react";
import ReactContainer from "../../../components/ReactContainer";
import ReactForm from "../../../components/react-form/ReactForm";
import { Radio, RadioGroup, Select, Textarea, TextInput } from "@mantine/core";
import { useDispatch, useStore } from "react-redux";
import { useNavigate } from "react-router";
import { ADD_DATA } from "../../../redux/Actions";
const TowFuelForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fuelDetails = {} } = useStore()?.getState() || {};
  return (
    <ReactContainer title="Tow Fuel">
      <ReactForm
        initialValues={{
          ...fuelDetails,
        }}
        button="Next"
        onSubmit={({ data }) => {
          dispatch({
            type: ADD_DATA,
            payload: {
              fuelDetails: data,
            },
          });
          navigate(`/profile-details-form`);
        }}
      >
        <RadioGroup m={5} field="fuel" variant="vertical" label="Is your vehicle leaking fuel?">
          <Radio m={5} value="Yes">
            Yes
          </Radio>
          <Radio m={5} value="No">
            No
          </Radio>
        </RadioGroup>
      </ReactForm>
    </ReactContainer>
  );
};

export default TowFuelForm;
