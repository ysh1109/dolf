import { Button, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import React from "react";
const ButtonComponent = (props) => {
  const { title, onPress, options = [], link = "/user-form" } = props || {};
  return (
    <>
      {title && (
        <Title mb={5} order={3}>
          {title}
        </Title>
      )}
      {options.map((option) => {
        return (
          <NavLink to={link}>
            <Button
              mb={10}
              mt={10}
              onClick={() => {
                onPress && onPress(option);
              }}
              variant="outline"
              fullWidth
              uppercase
            >
              {option}
            </Button>
          </NavLink>
        );
      })}
    </>
  );
};

export default ButtonComponent;
