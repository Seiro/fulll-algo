import { useEffect, useState } from "react";
import { useInputNumber } from "../../utils/hooks/use-input-number";
import "./increment.css";

export default function Increment() {
  const { value, bind } = useInputNumber(0);
  const [arrayValue, setArrayValue] = useState<number[]>([]);

  useEffect(() => {
    const newArray = value.toString().split("").map(Number);
    setArrayValue([...newArray]);
  }, [value]);

  const displayArray = (values: number[]) => {
    return `[${values.join(",")}]`;
  };

  const incrementAtIndex = (values: number[], index?: number) => {
    let indexToModify = values.length - 1;
    if (index !== undefined) {
      if (index < 0) {
        values.unshift(0);
        indexToModify = 0;
      } else {
        indexToModify = index;
      }
    }
    const valueAtIndex = values[indexToModify];
    if (valueAtIndex === 9) {
      values[indexToModify] = 0;
      incrementAtIndex(values, indexToModify - 1);
    } else {
      values[indexToModify]++;
    }
    return values;
  };

  const increment = (values: number[]) => {
    const newValue = incrementAtIndex(values);
    setArrayValue([...newValue]);
  };

  return (
    <div>
      <h1>Increment</h1>
      <form className="formIncrement">
        <input type="number" {...bind} />
      </form>
      <div>
        <h3>Value to increment :</h3>
        <p>{arrayValue ? displayArray(arrayValue) : ""}</p>
        <button onClick={() => increment(arrayValue)}>Increment value</button>
      </div>
    </div>
  );
}
