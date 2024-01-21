import React from "react";
import { Circles } from 'react-loader-spinner';
import "./Spinner.scss";

const Spinner = () => {

  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="spinner"
      visible={true}
    />
  );
};

export default Spinner;