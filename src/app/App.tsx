import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function LoginPage() {
    return <div>Login Page</div>;
}

function HomePage() {
    return <div>Home Page</div>;
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                    <Route path="/login" component={LoginPage}/>
                    <PrivateRoute path="/home" component={HomePage}/>
                </Switch>
            </Router>
        )
    }
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => renderPrivateComponent(props, Component)}
        />
    );
};

const renderPrivateComponent = (props, Component) => {
    const isAuthenticated = true;
    return isAuthenticated ? (<Component {...props} />) : (<Redirect to={{pathname: "/login"}}/>);
};

export default App
