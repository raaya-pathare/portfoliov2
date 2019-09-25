import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import Typing from 'react-typing-animation'
import WB from './WB'
import Untied from './Untied'
import Aspire from './Aspire'


import { ProjectsStyles } from '../style/muiStyles'

const Projects = (props) => {
    const classes = ProjectsStyles(props)
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.headingContainer}>
                <Typography className={classes.heading}>
                    <Typing
                        hideCursor={true}
                        speed={120}>
                        selected work.
                    </Typing>
                </Typography>
                <Typography className={classes.years}>
                    Selected projects /
                    <br /> 
                    2018 - 2019.
                </Typography>
                <hr className={classes.hr} />
            </Grid>
            <Grid item className={classes.dateContainer1}>
                <Slide direction="left" in={true} timeout={1300} mountOnEnter unmountOnExit>
                    <Typography className={classes.date1}>
                        <span style={{fontFamily: 'Sorts Mill Goudy, serif'}}>001.</span>
                        <br/>
                        2019
                    </Typography>
                </Slide>
            </Grid>
            <WB />
            <Grid item className={classes.dateContainer2}>
                <Slide direction="right" in={true} timeout={1300} mountOnEnter unmountOnExit>
                    <Typography className={classes.date2}>
                        <span style={{fontFamily: 'Sorts Mill Goudy, serif'}}>002.</span>
                        <br/>
                        2018
                        <br/>
                        - 2019
                    </Typography>
                </Slide>
            </Grid>
            <Untied />
            <Grid item className={classes.dateContainer3}>
                <Slide direction="left" in={true} timeout={1300} mountOnEnter unmountOnExit>
                    <Typography className={classes.date3}>
                        <span style={{fontFamily: 'Sorts Mill Goudy, serif'}}>003.  </span>
                        <br/>
                        2019
                    </Typography>
                </Slide>
            </Grid>
            <Aspire />
        </Grid>
    )
}

export default Projects