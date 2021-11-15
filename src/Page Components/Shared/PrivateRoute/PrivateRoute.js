import React from 'react';
import { Route, Redirect } from "react-router";
import useAuth from '../../../Hooks/UseAuth';
import { LinearProgress } from '@mui/material';
import Header from '../Header/Header';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <>
                <Header></Header>
                <LinearProgress />
            </>)
    }
    return (
        <Route {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;