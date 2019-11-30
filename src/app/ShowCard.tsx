import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import React from "react";
import moment = require("moment");
import {ShowDetails} from "./ShowDetailsType";

interface ShowCardProps {
    show: ShowDetails
}

const ShowCard = ({show}: ShowCardProps) => {
    const classes = useStyles(this.props);

    const handleShowMoreClick = (showId: number) => {
        console.log(`Clicked on show more of show ${showId}`);
    };

    return (
        <>
            {show &&
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography component="h5" variant="h5">
                        {show.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {moment(show.premiered).format('LL')}
                    </Typography>
                    {show.summary && <p className={classes.showSummary}
                                        dangerouslySetInnerHTML={{__html: show.summary.replace(/<?p>/gi, '')}}/>}
                    <div className={classes.showMore} onClick={() => {
                        handleShowMoreClick(show.id)
                    }}>show more...
                    </div>
                </CardContent>
                <CardMedia
                    className={classes.showImage}
                    image={show.image.medium}
                    title={show.name}
                    component={'div'}/>
            </Card>
            }
        </>
    )
};

const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
            width: 385,
            height: 170,
            margin: '10px 20px'
        },
        showImage: {
            minWidth: 120,
            display: 'flex'
        },
        cardContent: {
            minWidth: 220,
            padding: 10,
            position: 'relative'
        },
        showSummary: {
            margin: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-inline-box",
            '-webkitBoxOrient': 'vertical',
            '-webkit-line-clamp': 3
        },
        showMore: {
            textAlign: 'right',
            position: 'absolute',
            bottom: 10,
            right: 10
        }
    })
);

export default ShowCard