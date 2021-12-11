import { Button, LoadingOverlay, SimpleGrid, TextInput } from "@mantine/core";
import { useForm, useUuid } from "@mantine/hooks";
import React, { memo, useState } from "react";
import PropTypes from "prop-types";
const validationRules = {
  email: {
    email: (value) => /^\S+@\S+$/.test(value),
  },
};

const ReactForm = (props) => {
  const [loading, setLoading] = useState(false);
  const uid = useUuid();
  let {
    initialValues,
    validationRules,
    button = "Submit",
    children = [],
    cols = 1,
    onSubmit,
    path,
    modifyData,
    ...restProps
  } = props;
  const {
    onSubmit: FormSubmit,
    getInputProps,
    values,
    reset,
  } = useForm({
    initialValues: initialValues || {},
    validationRules: validationRules,
  });
  if (children && !Array.isArray(children)) {
    children = [children];
  }
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <LoadingOverlay visible={loading} />
      <form
        name={uid}
        id={uid}
        className="overflow-hidden flex flex-1 flex-col"
        style={{}}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const submitFuntion = FormSubmit((values) => {
            onSubmit && onSubmit({ reset, data: values, modifyData, path, setLoading, ...restProps });
          });
          submitFuntion(e);
        }}
      >
        <SimpleGrid
          className="overflow-scroll"
          cols={cols}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          {children.map((ele) => {
            const { props } = ele || {};
            let { field, disabled, isDefault, visible = true } = props || {};

            let inputProps = {};
            if (field) {
              inputProps = { ...getInputProps(field) };
              // if (isDefault) {
              //   inputProps = { value: getValueFromItem({ items: values, field }) };
              // }
            }
            if (typeof visible === "function") {
              visible = visible({ values });
            }
            if (!visible) {
              return;
            }
            return React.cloneElement(ele, { ...inputProps });
          })}
        </SimpleGrid>
        <div>
          <Button name={uid} type="submit" mt={10} uppercase fullWidth>
            {button}
          </Button>
        </div>
      </form>
    </div>
  );
};

ReactForm.propTypes = {
  initialValues: PropTypes.object,
  validationRules: PropTypes.object,
  children: PropTypes.array,
  cols: PropTypes.number,
  onSubmit: PropTypes.func,
  path: PropTypes.string,
  modifyData: PropTypes.func,
};

export default ReactForm;
