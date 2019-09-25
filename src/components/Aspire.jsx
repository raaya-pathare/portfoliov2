import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'

import { ProjectsStyles } from '../style/muiStyles' 

const Aspire = (props) => {
    const classes = ProjectsStyles(props)
    return (
        <Slide direction="up" in={true} timeout={1600} mountOnEnter unmountOnExit>
        <Grid container className={classes.aspireContainer}>
            <Grid item className={classes.aspirePhoto}>
            
            </Grid>
            <Grid item className={classes.aspireInfo}>
                <Typography className={classes.title}>
                    aspire.
                </Typography>
                <br />
                <Typography className={classes.subheading}>
                    Your dreams, in your pocket.
                </Typography>
                <br />
                <Typography className={classes.bodytext}>
                    <span className={classes.bodytext3}>In progress. </span>Aspire will allow the user to keep record, keep track of, tick off and share their bucket list goals with others as they move through life. Life gets in the way. Our goals are easy to forget, sometimes we need to be reminded to work towards them. 
                </Typography>
                <br />
                <Typography className={classes.bodytext2}>
                    ui design / ux design / front end development / back end development
                </Typography>
            </Grid>
        </Grid>
        </Slide>
    )
}

export default Aspire