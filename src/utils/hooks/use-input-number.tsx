import React, { useState } from "react";

export const useInputNumber = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(+e.target.value)
    }
  };
};
