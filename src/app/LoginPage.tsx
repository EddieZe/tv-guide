import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {
    Button,
    createStyles,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Theme,
    Typography,
    withStyles,
    WithStyles
} from "@material-ui/core";

interface LoginPageProps {
}

const LoginPage = ({classes}: LoginPageProps & WithStyles) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onSubmit = (email: string, password: string) => {
        console.log(`Getting connected with the email: ${email} and the password: ${password}`);
        history.push('/home');
    };

    return (
        <div className={classes.root}>
            <Grid
                component={'div'}
                container
                direction="column"
                spacing={10}
                className={classes.form}
                wrap="nowrap"
            >
                <Grid item component={'div'}>
                    <Typography variant="h5">
                        Tv Guide Login
                    </Typography>
                </Grid>

                <Grid item component={'div'}>
                    <FormControl fullWidth component={'div'}>
                        <InputLabel htmlFor="login-email">
                            Email
                        </InputLabel>
                        <Input
                            id="login-email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item component={'div'}>
                    <FormControl fullWidth component={'div'}>
                        <InputLabel htmlFor="login-password">
                            password
                        </InputLabel>
                        <Input
                            id="login-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </FormControl>
                </Grid>

                <Grid item component={'div'}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => onSubmit(email, password)}
                        type="submit"
                        className={classes.button}
                        href={'/'}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
};

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        height: "100%"
    },
    form: {
        maxWidth: 350,
        display: "flex",
        alignSelf: 'center'
    },
    button: {
        textTransform: theme.typography.button.textTransform
    }
});

export default withStyles(styles)(LoginPage);

