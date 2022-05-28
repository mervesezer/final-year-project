import React from "react";
import { TouchableOpacityProps, Text } from "react-native";
import styled from "styled-components/native";

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
}

const StyledTouchableOpacity = styled.TouchableOpacity({
  padding: 15,
  backgroundColor:"#49bfe3",
  borderRadius: 10,
});
export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <StyledTouchableOpacity {...rest}>
      <Text style={{ color: "white", textAlign: "center" }}>{label}</Text>
    </StyledTouchableOpacity>
  );
}
