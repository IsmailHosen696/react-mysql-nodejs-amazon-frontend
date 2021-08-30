
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserInfo from '../context/getuserInfo';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    const loginfo = UserInfo(token);
    let adminEmail = process.env.REACT_APP_ADMINEMAIL;
    return (
        <Route {...rest} render={props => (
            loginfo && (
                loginfo.auth && loginfo.user.email === adminEmail && loginfo.user.role === 'admin' ?
                    <Component {...props} />
                    : <Redirect to="/" />
            )
        )} />
    );
};
export default PrivateRoute;