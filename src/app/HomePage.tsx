import React, {Component} from "react";
import {WithStyles} from "@material-ui/core";

interface HomePageProps {
    onSignOut(): void;

    isAuthenticated: boolean;
}

class HomePage extends Component <HomePageProps & WithStyles>{
    render() {
        return <div>Home Page</div>;
    }
}

export default HomePage