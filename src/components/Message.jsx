import React from "react";

export default function Message() {
  function HandleClick() {
    window.alert("Button Clicked");
  }
  return (
    <div>
      <button onClick={HandleClick}>Click Here to get message</button>
    </div>
  );
}
