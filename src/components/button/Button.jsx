import { useState } from "react";
import "/Users/meir/Desktop/muslim-founder/src/components/button/Button.css";

function Button() {
  const [value, setValue] = useState(0);

  const buttonClicked = () => {
    setValue(value + 1);
  };

  return (
    <div className="btn-container">
      <button onClick={buttonClicked}>{value}</button>
    </div>
  );
}

export default Button;
