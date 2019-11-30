import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ShowPage from "./pages/ShowPage";
import {appContext} from './hooks/AppContext';
import {useAppContext} from './hooks/AppContextHook';
import {ThemeProvider} from '@material-ui/core/styles';
import responsiveTheme from './shared/AppTheme'

function App() {
    const context = useAppContext();

    return (
        <appContext.Provider value={context}>
            <Router>
                <ThemeProvider theme={responsiveTheme}>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                        <Route path="/login" component={LoginPage}/>
                        <PrivateRoute path="/home" component={HomePage}/>
                        <PrivateRoute path="/show/:id" component={ShowPage}/>
                    </Switch>
                </ThemeProvider>
            </Router>
        </appContext.Provider>
    )
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
