import { useEffect, useState } from "react";
import { useInputNumber } from "../../utils/hooks/use-input-number";

export default function FizzBuzz() {
  const { value, bind } = useInputNumber(0);
  const [valueToDisplay, setValueToDisplay] = useState<string[]>([]);

  const displayFizzBuzz = () => {
    console.log("display");
    const newValue = [];
    for (let i = 1; i <= value; i++) {
      const isDividedBy3 = i % 3 === 0;
      const isDividedBy5 = i % 5 === 0;
      if (isDividedBy3 && isDividedBy5) {
        newValue.push("FizzBuzz");
      } else if (isDividedBy3) {
        newValue.push("Fizz");
      } else if (isDividedBy5) {
        newValue.push("Buzz");
      } else {
        newValue.push(i.toString());
      }
    }
    setValueToDisplay([...newValue]);
  };

  useEffect(() => {
    displayFizzBuzz();
  }, [value]);

  return (
    <div>
      <h1>FizzBuzz</h1>
      <form>
        <label>N = </label>
        <input type="number" {...bind} />
      </form>
      <div>
        <h3>Numbers :</h3>
        {valueToDisplay.map((element) => (
          <p>{element}</p>
        ))}
      </div>
    </div>
  );
}
