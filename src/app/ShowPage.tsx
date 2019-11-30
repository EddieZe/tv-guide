import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getShowDetails} from "./services/tvmaze-services";

interface ShowPageProps {

}

const ShowPage = ({}: ShowPageProps) => {
    const [showDet, setShowDet] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        getShowDetails(Number(id)).then((res) => {
            setShowDet(res);
        });
    }, [id]);

    return (<div>{JSON.stringify(showDet)}</div>)
};

export default ShowPage;