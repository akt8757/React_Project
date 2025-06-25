import React from "react";
import star from "../icons/star.svg";
export default function Ratting({ value }) {
  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" width="14" height="14" />
      ))}
    </>
  );
}
