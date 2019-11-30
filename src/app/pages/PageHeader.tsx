import React, {useContext} from "react";
import {makeStyles, Theme, Typography} from "@material-ui/core";
import SearchTextInput from "../show-details/SearchTextInput";
import {appContext} from "../hooks/AppContext";

interface PageHeaderProps {
    isSearchVisible: boolean
}

const PageHeader = ({isSearchVisible}: PageHeaderProps) => {
    const context = useContext(appContext);
    const classes = useStyles(this.props);

    return (
        <div className={classes.root}>
            <Typography className={classes.primaryTitle} variant="h5">
                Tv Guide
            </Typography>
            {isSearchVisible && <SearchTextInput onChange={context.setCurrentSearchStr} value={context.searchStr}/>}
        </div>
    )
};

const useStyles = makeStyles((theme: Theme) => ({
        root: {
            padding: theme.spacing(2),
            display: 'flex',
            justifyContent: 'space-between'
        },
        primaryTitle: {
            fontWeight: 700
        }
    })
);

export default PageHeader;