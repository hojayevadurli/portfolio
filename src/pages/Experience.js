import React, { useEffect, useState } from "react";

function Experience(){
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(true);
  useEffect(() => {
    setDisableButton(count % 2);
  }, [count]);
    return (
        <div className="App">
         <button onClick={() => setCount((c) => c + 1)} disabled={disableButton}>
        increment counter
      </button>

    </div>
    )
}

export default Experience