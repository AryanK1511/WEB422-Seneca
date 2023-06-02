import React from "react";

export default function Button({ onClick, count }) {
    return <button onClick={onClick}>Count { count }</button>;
  }