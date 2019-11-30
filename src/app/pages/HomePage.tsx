import React from "react";
import {Grid, makeStyles, Theme} from "@material-ui/core";
import PageHeader from "./PageHeader";
import ContentListContainer from "../show-list/ContentListContainer";

interface HomePageProps {
}

const HomePage = ({}: HomePageProps) => {
    const classes = useStyles(this.props);
    return (
        <Grid container direction="column" wrap="nowrap" className={classes.container} component={'div'}>
            <Grid item className={classes.headerContainer} component={'div'}>
                <PageHeader isSearchVisible={true}/>
            </Grid>
            <Grid item component={'div'}>
                <div className={classes.content}><ContentListContainer/></div>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
        container: {
            height: "100%"
        },
        headerContainer: {
            marginBottom: 10
        },
        content: {
            padding: theme.spacing(2)
        }
    })
);

export default HomePage;