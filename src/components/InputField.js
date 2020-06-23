import React  from "react";
import { FormWrapper, StyledInput } from "./StyledElements";


const InputField = (props) => {
  return (
    <FormWrapper>
      <StyledInput data-testid='input'
        {...props}
      />
      {props.label && (
        <label>{props.label}</label>
      )}
    </FormWrapper>
  );
};

export default InputField;
