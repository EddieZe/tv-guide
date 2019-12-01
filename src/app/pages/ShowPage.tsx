import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getShowDetails} from "../services/tvmaze-services";
import {Grid, makeStyles, Theme} from "@material-ui/core";
import PageHeader from "./PageHeader";
import ShowDetailsContainer from "../show-details/ShowDetailsContainer";

interface ShowPageProps {

}

const ShowPage = ({}: ShowPageProps) => {
    const classes = useStyles(this.props);
    const [showDet, setShowDet] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        getShowDetails(Number(id)).then((res) => {
            setShowDet(res);
        });
    }, [id]);

    return (
        <Grid container direction="column" wrap="nowrap" className={classes.root} component={'div'}>
            <Grid item className={classes.headerContainer} component={'div'}>
                <PageHeader/>
            </Grid>
            <ShowDetailsContainer showDet={showDet}/>
        </Grid>
    )
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "100%",
        width: 1080,
        margin: 'auto'
    },
    headerContainer: {
        marginBottom: 10
    },
    contentContainer: {
        padding: theme.spacing(2)
    },
    showHeaderContainer: {
        display: 'flex'
    },
    showTitle: {
        display: 'flex',
        flex: 3
    },
    showRating: {
        display: 'flex',
        flex: 1
    },
    dividerRoot: {
        backgroundColor: theme.palette.primary.main,
        width: 2,
        margin: '0 10px'
    },
    ratingRoot: {
        alignSelf: 'center',
        margin: '0 10px'
    },
    showSubTitleItem: {},
    showDetailsContent: {},
    showImage: {
        display: 'flex'
    },
    showDetailsSummary: {
        display: 'flex',
        flex: 1
    }

}));

export default ShowPage;