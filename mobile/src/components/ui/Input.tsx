import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface InputProps extends TextInputProps {}

const StyledTextInput = styled.TextInput({
  border: 1,
  borderRadius: 5,
  padding: 10,
  borderColor: "#c4c4c4",
});

export default function Input({ children, ...rest }: InputProps) {
  return <StyledTextInput {...rest}>{children}</StyledTextInput>;
}
