import { useDispatch } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import ReactContainer from "../../components/ReactContainer";
import { ADD_DATA } from "../../redux/Actions";

const UserHome = () => {
  const dispatch = useDispatch();
  return (
    <ReactContainer>
      <ButtonComponent
        link="/user-select-details"
        onPress={(option) => {
          dispatch({
            type: ADD_DATA,
            payload: {
              issue: option,
            },
          });
        }}
        title="Select An Incident"
        options={["Undrivable", "Battery", "Tires", "Out Of Gas", "Locked Out", "In Ditch"]}
      />
    </ReactContainer>
  );
};

export default UserHome;
