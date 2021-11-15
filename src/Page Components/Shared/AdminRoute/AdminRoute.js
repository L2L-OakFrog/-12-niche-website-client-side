import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from "react-router";
import useAuth from '../../../Hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth();
    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route {...rest}
            render={({ location }) => user.email && admin ? children :
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}
                ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;