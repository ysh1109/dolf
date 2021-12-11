import React from "react";
import ReactContainer from "../../../components/ReactContainer";
import ReactForm from "../../../components/react-form/ReactForm";
import { Select, Textarea, TextInput } from "@mantine/core";
import { useDispatch, useStore } from "react-redux";
import { useNavigate } from "react-router";
import { ADD_DATA } from "../../../redux/Actions";
const VehicleDetailsForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { vehicle = {} } = useStore()?.getState() || {};
  return (
    <ReactContainer title="Vehicle Details">
      <ReactForm
        initialValues={{
          license_plate: "",
          brand: "",
          modal: "",
          color: "",
          additional: "",
          ...vehicle,
        }}
        validationRules={{
          license_plate: (value) => value,
        }}
        onSubmit={({ data }) => {
          dispatch({
            type: ADD_DATA,
            payload: {
              vehicle: data,
            },
          });
          navigate(`/locaion-details-form`);
        }}
      >
        <TextInput field="license_plate" required label="License Plate" />
        <Select
          field="brand"
          label="Select Brand"
          placeholder="Select Brand"
          data={[
            { value: "BMW", label: "BMW" },
            { value: "AUdi", label: "Audi" },
            { value: "Ford", label: "Ford" },
            { value: "Honda", label: "Honda" },
          ]}
        />
        <Select
          field="modal"
          label="Select Model"
          placeholder="Select Model"
          data={[
            { value: "500", label: "500" },
            { value: "500c", label: "500C" },
            { value: "500e", label: "500e" },
            { value: "500l", label: "500L" },
          ]}
        />
        <TextInput field="color" label="Color" />

        <Textarea placeholder="Additional Details" label="Additional Details" field="additional" />
      </ReactForm>
    </ReactContainer>
  );
};

export default VehicleDetailsForm;
