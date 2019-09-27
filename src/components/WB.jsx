import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import { ProjectsStyles } from '../style/muiStyles';

const WB = (props) => {
    const classes = ProjectsStyles(props)
    return (
        <>
            <Slide direction="up" in={true} timeout={1300} mountOnEnter unmountOnExit>
                <Grid container className={classes.WBContainer}>
                    <Grid item className={classes.WBphoto}>

                    </Grid >
                    <Grid item className={classes.WBinfo}>
                        <Typography className={classes.title}>
                            watch better.
                        </Typography>
                        <br />
                        <Typography className={classes.subheading}>
                            A diverse database for the conscious movie consumer.
                        </Typography>
                        <br />
                        <Typography className={classes.bodytext}>
                            With watch better, users can browse a vast list of films, filtering through five different diversity tests. Users can also search for and receive information on films, test their favourites to see how they fare against our tests and create an account, allowing them to save their favourites on a watchlist for the next login.
                            <br />
                            <a
                                href="http://watchbetter.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'white' }}>
                                Click me.
                            </a>
                        </Typography>
                        <br />
                        <Typography className={classes.bodytext2}>
                            ui design / ux design / front end development
                    </Typography>
                    </Grid >
                </Grid>
            </Slide>
        </>
    )
}

export default WB