import React from "react";
import {createStyles, Grid, Theme, withStyles, WithStyles} from "@material-ui/core";
import PageHeader from "./PageHeader";

interface HomePageProps {
}

const HomePage = ({classes}: HomePageProps & WithStyles) => {
    return (
        <Grid container direction="column" wrap="nowrap" className={classes.container} component={'div'}>
            <Grid item className={classes.headerContainer} component={'div'}>
                <PageHeader/>
            </Grid>
            <Grid item className={classes.contentContainer} component={'div'}>
                <div className={classes.content}>Home Page</div>
            </Grid>
        </Grid>
    );
};

const styles = (theme: Theme) => createStyles({
    container: {
        height: "100%"
    },
    headerContainer: {
        marginBottom: 10
    },
    content: {
        padding: theme.spacing(2)
    }
});

export default withStyles(styles)(HomePage);