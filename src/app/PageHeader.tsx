import React from "react";
import {createStyles, Theme, Typography, withStyles} from "@material-ui/core";

const PageHeader = ({classes}) => (
    <div className={classes.root}>
        <Typography className={classes.primaryTitle} variant="h5">
            Tv Guide
        </Typography>
    </div>
);

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2)
    },
    primaryTitle: {
        fontWeight: 700
    }
});

export default withStyles(styles)(PageHeader);