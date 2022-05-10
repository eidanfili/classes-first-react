import React from "react";

export default function Cat(props) {
  return (
    <div className="cat">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}
