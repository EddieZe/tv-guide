import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getShowDetails} from "./services/tvmaze-services";
import {makeStyles, Theme} from "@material-ui/core";

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

    return (<div>{JSON.stringify(showDet)}</div>)
};

const useStyles = makeStyles((theme: Theme) => ({}));

export default ShowPage;