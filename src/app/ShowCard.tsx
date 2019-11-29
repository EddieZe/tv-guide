import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import React from "react";

interface ShowDetails {
    id: number;
    url: string;
    name: string;
    language: string;
    genres: string[];
    runtime: number;
    premiered: Date;
    rating: number;
    network: any;
    image: any;
    summary: string;
}

interface ShowCardProps {
    show: ShowDetails
}

const ShowCard = ({show}: ShowCardProps) => {
    const classes = useStyles(this.props);
    return (
        <>
            {show &&
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography component="h5" variant="h5">
                        {show.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {show.premiered}
                    </Typography>
                    {show.summary && <p className={classes.showSummary} dangerouslySetInnerHTML={{__html: show.summary.replace(/<?p>/gi, '')}}/>}
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
            maxWidth: 400,
            maxHeight: 200,
            margin: '10px 20px'
        },
        showImage: {
            minWidth: 150,
            display: 'flex'
        },
        cardContent: {
            minWidth: 220
        },
        showSummary: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-inline-box",
            '-webkitBoxOrient': 'vertical',
            '-webkit-line-clamp': 3
        }
    })
);

export default ShowCard