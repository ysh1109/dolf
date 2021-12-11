import React from "react";
import ReactContainer from "../../../components/ReactContainer";
import ReactForm from "../../../components/react-form/ReactForm";
import { Select, Textarea, TextInput } from "@mantine/core";
import { useDispatch, useStore } from "react-redux";
import { useNavigate } from "react-router";
import { ADD_DATA } from "../../../redux/Actions";

const SelectLocationForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { location = {} } = useStore()?.getState() || {};
  return (
    <ReactContainer title="Location Details">
      <ReactForm
        initialValues={{
          direction: "",
          lane_side: "",
          land_mark: "",
          ...location,
        }}
        validationRules={{}}
        button="Next"
        onSubmit={({ data }) => {
          dispatch({
            type: ADD_DATA,
            payload: {
              location: data,
            },
          });
          navigate(`/tow-destination-details-form`);
        }}
      >
        <Select
          field="direction"
          label="Which Direction are you traveling in?"
          placeholder="Select Direction"
          data={[
            { value: "East", label: "EAST" },
            { value: "West", label: "WEST" },
            { value: "North", label: "NORTH" },
            { value: "South", label: "SOUTH" },
          ]}
        />
        <Select
          field="lane_side"
          label="What Shoulder or lane are you in?"
          placeholder="Select Lane side"
          data={[
            { value: "Left", label: "Left" },
            { value: "Right", label: "Right" },
          ]}
        />
        <TextInput field="land_mark" label="What is your closest nearest land mark or exit ?" />
      </ReactForm>
    </ReactContainer>
  );
};

export default SelectLocationForm;
