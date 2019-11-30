import React from "react";
import {InputAdornment, makeStyles, TextField, Theme} from "@material-ui/core";
import {Search} from "@material-ui/icons";


interface SearchTextInputProps {
    onChange(value: string);

    value: string;
}

const SearchTextInput = ({value, onChange}: SearchTextInputProps) => {
    const classes = useStyles(this.props);
    return (
        <TextField
            value={value}
            placeholder="Search"
            className={classes.root}
            onChange={e => onChange(e.target.value)}
            InputProps={{
                'aria-label': 'Description',
                className: classes.searchInput,
                endAdornment: (
                    <InputAdornment position="start">
                        <Search className={classes.searchIcon}/>
                    </InputAdornment>
                ),
            }}
        />
    );
};

const useStyles = makeStyles((theme: Theme) => ({
        root: {
            marginBottom: 15,
            width: 200
        },
        searchInput: {
            color: '#eee'
        },
        searchIcon: {
            cursor: "pointer",
            color: '#eee'
        }
    })
);

export default SearchTextInput