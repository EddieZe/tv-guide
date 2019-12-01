import {Divider, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";

const ShowDetailsContainer = ({showDet}) => {
    const classes = useStyles(this.props);
    return <Grid container component={"div"} className={classes.contentContainer}>
        {showDet &&
        <Grid container component={"div"}>
            <Grid component={"div"} container className={classes.showHeaderContainer}>
                <Typography component="h4" variant="h4" className={classes.showTitle}>
                    {showDet.name}
                </Typography>
                {showDet.rating && showDet.rating.average &&
                <>
                    <Divider orientation="vertical" classes={{root: classes.dividerRoot}}/>
                    <Typography component="h4" variant="h4" className={classes.showRating}>
                        <Rating classes={{root: classes.ratingRoot}} name="half-rating" readOnly={true}
                                value={showDet.rating.average} max={10}
                                precision={0.1}/>
                        {showDet.rating.average}
                    </Typography>
                </>
                }
            </Grid>
            <Grid component={"div"} container className={classes.showHeaderContainer}>
                {showDet.webChannel &&
                <>
                    <Typography variant="subtitle2" className={classes.showSubTitleItem}>
                        {showDet.webChannel.name}
                    </Typography>
                    <Divider orientation="vertical" classes={{root: classes.dividerRoot}}/>
                </>
                }
                {showDet.language &&
                <>
                    <Typography variant="subtitle2" className={classes.showSubTitleItem}>
                        {showDet.language}
                    </Typography>
                    <Divider orientation="vertical" classes={{root: classes.dividerRoot}}/>
                </>
                }
                <Typography variant="subtitle2" className={classes.showSubTitleItem}>
                    {showDet.genres.join(", ")}
                </Typography>
            </Grid>
            <Grid component={"div"} container className={classes.showDetailsContent}>
                {showDet.summary &&
                <div className={classes.showDetailsSummary}>
                    <Typography variant={"body1"}>
                        <p dangerouslySetInnerHTML={{__html: showDet.summary.replace(/<.p>/gi, "")}}/>
                    </Typography>
                </div>
                }
                <img className={classes.showImage}
                     src={showDet.image.medium || showDet.image.original}
                     title={showDet.name}/>
            </Grid>
        </Grid>
        }
    </Grid>;
};

const useStyles = makeStyles((theme: Theme) => ({
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
        flex: 1,
        marginRight: 75
    }

}));

export default ShowDetailsContainer;