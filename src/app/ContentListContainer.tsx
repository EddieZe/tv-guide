import React, {Component} from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {getShows} from "./services/tvmaze-services";
import ShowCard from "./ShowCard";

class ContentListContainer extends Component<WithStyles> {
    state = {shows: []};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getShows().then(res => {
                const shows = res.map((show => {
                    return show.show
                }));
                this.setState({shows: shows});
            }
        );
    }

    render() {
        const {shows} = this.state;
        const {classes} = this.props;
        return (
            <div className={classes.showsListContainer}>
                {shows.map(show => (
                    <ShowCard show={show} key={show.id}/>
                ))}
            </div>);
    }
}

const styles = () => createStyles({
    showsListContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
    }
});
export default withStyles(styles)(ContentListContainer)