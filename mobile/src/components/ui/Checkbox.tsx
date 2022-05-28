import React from "react";
import { View, Text, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";

interface CheckboxProps extends TouchableOpacityProps {
  label?: string;
  checked: boolean;
}

const CheckboxContainer = styled.View({
  flexDirection: "row",
  alignItems: "center",
});

export default function Checkbox({
  label,
  checked,
  style,
  ...rest
}: CheckboxProps) {
  const StyledTouchableOpacity = styled.TouchableOpacity({
    border: 0.5,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: checked ? "#9FBEA5" : "transparent",
  });

  return (
    <CheckboxContainer style={style}>
      <Text style={{ marginRight: 10 }}>{label}</Text>
      <StyledTouchableOpacity {...rest}>
        {checked ? <Icon name="check" /> : null}
      </StyledTouchableOpacity>
    </CheckboxContainer>
  );
}
