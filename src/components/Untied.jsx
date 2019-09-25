import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import { ProjectsStyles } from '../style/muiStyles';

const Untied = (props) => {
    const classes = ProjectsStyles(props)
    return (
        <Slide direction="up" in={true} timeout={1600} mountOnEnter unmountOnExit>
        <Grid container className={classes.untiedContainer}>
            <Grid item className={classes.untiedInfo}>
                <Typography className={classes.title}>
                    untied.
                </Typography>
                <br />
                <Typography className={classes.subheading}>
                    Aucklands premiere new source for all things sneaker.
                </Typography>
                <br />
                <Typography className={classes.bodytext}>
                    <span className={classes.bodytext3}>In progress. </span>With one foot firmly in the world of sneakers and the other dipped into pop-culture and modern lifestyle, Untied will produce weekly curated content on the crown jewel of streetwear. Featuring the latest news, features, and interviews with other sneakerheads.
                </Typography>
                <br />
                <Typography className={classes.bodytext2}>
                    ui design / ux design / front end development / back end development
                </Typography>
            </Grid>
            <Grid item className={classes.untiedPhoto}>

            </Grid>
        </Grid>
        </Slide>
    )
}

export default Untied