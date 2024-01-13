import React from "react";
import ReactLoading from "react-loading";
import "./Spinner.scss";

const Spinner = ({type, color} : {type: any, color: string}) => {

  return (
    <ReactLoading className="spinner" type={type} color={color} width={'50%'}/>
  );
}

export default Spinner;