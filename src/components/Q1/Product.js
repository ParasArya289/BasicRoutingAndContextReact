import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataBaseContext } from "../data/db";
import { Card } from "./CardUI";

export default function Product() {
  const { data } = useContext(DataBaseContext);
  const { productId } = useParams();
  const findProduct = data.find(({ id }) => +productId === id);
  return (
    <>
      <Card data={findProduct} />
    </>
  );
}
