import React, { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {

  return (
    <Suspense fallback={<Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="spinner"
      visible={true}
    />}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">{element}</div>)}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;