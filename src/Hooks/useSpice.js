import { useState } from "react";

export function useSpice(defaultSpice) {
  const [value, setValue] = useState(defaultSpice);

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange
  };
}
