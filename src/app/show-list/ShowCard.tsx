import React from "react";
import {useHistory} from "react-router-dom";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import moment = require("moment");
import {ShowDetails} from "../shared/ShowDetailsType";

interface ShowCardProps {
    show: ShowDetails
}

const ShowCard = ({show}: ShowCardProps) => {
    const classes = useStyles(this.props);
    let history = useHistory();

    const handleShowMoreClick = (showId: number) => {
        history.push(`/show/${showId}`)
    };

    return (
        <>
            {show &&
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography component="h6" variant="h6" className={classes.showName}>
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
                {show.image && <CardMedia
                    className={classes.showImage}
                    image={show.image.medium}
                    title={show.name}
                    component={'div'}/>
                }
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
        showName: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        showImage: {
            minWidth: 120,
            display: 'flex'
        },
        cardContent: {
            minWidth: 245,
            padding: 10,
            position: 'relative'
        },
        showSummary: {
            margin: '5px 0',
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-inline-box",
            '-webkitBoxOrient': 'vertical',
            '-webkit-line-clamp': 3
        },
        showMore: {
            textAlign: 'right',
            position: 'absolute',
            cursor: 'pointer',
            bottom: 10,
            right: 10
        }
    })
);

export default ShowCard