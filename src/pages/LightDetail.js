import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
const LightDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header />
      <p>안녕</p>
    </div>
  );
};

export default LightDetail;
