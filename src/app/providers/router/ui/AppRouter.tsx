import React, {Suspense} from 'react';
import Spinner from "shared/Spinner/Spinner";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {

    return (
        <Suspense fallback={<Spinner type="spin" color="darkblue"/>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">{element}</div>) }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;