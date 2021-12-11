import React from "react";
import { useDispatch } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import ReactContainer from "../../components/ReactContainer";
import { ADD_DATA } from "../../redux/Actions";

const SelectDetailsPage = (props) => {
  const dispatch = useDispatch();

  return (
    <ReactContainer>
      <ButtonComponent
        onPress={(option) => {
          dispatch({
            type: ADD_DATA,
            payload: {
              select_details: option,
            },
          });
        }}
        link="/vehicle-details-form"
        title="Select Details"
        options={[
          "I am on the highway",
          "Vehicle is uneven or in a ditch",
          "Vehicle is in parking garage",
          "I blew one or more tires",
          "Locked Out",
          "I prefer a flatbed (Extra cost)",
        ]}
      />
    </ReactContainer>
  );
};

export default SelectDetailsPage;
