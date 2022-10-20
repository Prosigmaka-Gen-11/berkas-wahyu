import React from "react";

function Button(props) {
  return (
    <>
      <div>
        <button
          type="button"
          onClick={props.handleClick}
          className=""
        >
          {props.buttonName}
        </button>
      </div>
    </>
  );
}

export default Button;