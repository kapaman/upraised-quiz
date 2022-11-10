import React from "react";
import { Primary } from "../styles/global.styled";

export default function PrimaryButton({ text, onClick }) {
  return <Primary onClick={onClick}>{text}</Primary>;
}
