import React from "react";
import {makeStyles, Theme, Typography} from "@material-ui/core";

const PageHeader = () => {
    const classes = useStyles(this.props);
    return (
        <div className={classes.root}>
            <Typography className={classes.primaryTitle} variant="h5">
                Tv Guide
            </Typography>
        </div>
    )
};

const useStyles = makeStyles((theme: Theme) => ({
        root: {
            padding: theme.spacing(2)
        },
        primaryTitle: {
            fontWeight: 700
        }
    })
);

export default PageHeader;