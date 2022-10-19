import { useState } from "react";

export const MyComponent = () => {
  const [count, setCount] = useState(0);
  setCount(1);
	return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>increment counter</button>
    </>
  );
};
