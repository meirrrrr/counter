import { useState } from "react";

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
