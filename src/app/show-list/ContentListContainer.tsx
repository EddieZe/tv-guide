import React, {useContext, useEffect, useState} from "react";
import {makeStyles, Theme} from "@material-ui/core";
import {getShows} from "../services/tvmaze-services";
import ShowCard from "./ShowCard";
import {appContext} from "../hooks/AppContext";
import useDebounce from "../hooks/debounceHook"

const ContentListContainer = () => {
    const [shows, setShows] = useState([]);
    const classes = useStyles(this.props);
    const context = useContext(appContext);
    const debouncedSearchTerm = useDebounce(context.searchStr, 300);

    useEffect(() => {
        if (context.searchStr.length > 2 && debouncedSearchTerm) {
            getShows(context.searchStr).then(res => {
                    const shows = res.map((show => {
                        return show.show
                    }));
                    setShows(shows);
                }
            );
        }
    }, [debouncedSearchTerm]);
    return (
        <div className={classes.showsListContainer}>
            {shows.map(show => (
                <ShowCard show={show} key={show.id}/>
            ))}
        </div>);
};

const useStyles = makeStyles((theme: Theme) => ({
        showsListContainer: {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'flex-start'
        }
    })
);
export default ContentListContainer