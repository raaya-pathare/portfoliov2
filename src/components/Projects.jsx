import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import Typist from 'react-typist'
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
                    <Typist
                    avgTypingDelay={110}
                    cursor={{ show: false }}>
                        selected work.
                    </Typist>
                </Typography>
                <div className={classes.subheadings}>
                <Typography className={classes.years}>
                    Selected projects / 2018 - 2019. Click the link on the right to my Github for more.
                </Typography>
                <Typography className={classes.githublink}>
                <a 
                style={{ color: 'black', textDecoration: 'none' }}href="https://github.com/raaya-pathare" target="_blank" rel="noopener noreferrer">
                github.com/raaya-pathare
                </a>
                </Typography>
                </div>
                <hr className={classes.hr} />
            </Grid>
            <Grid item className={classes.dateContainer1}>
                <Slide direction="left" in={true} timeout={1300} mountOnEnter unmountOnExit>
                    <Typography className={classes.date1}>
                        <span style={{ fontFamily: 'Sorts Mill Goudy, serif' }}>001.</span>
                        <br />
                        2019
                    </Typography>
                </Slide>
            </Grid>
            <WB />
            <Grid item className={classes.dateContainer2}>
                <Slide direction="right" in={true} timeout={1300} mountOnEnter unmountOnExit>
                    <Typography className={classes.date2}>
                        <span style={{ fontFamily: 'Sorts Mill Goudy, serif' }}>002.</span>
                        <br />
                        2018
                        <br />
                        - 2019
                    </Typography>
                </Slide>
            </Grid>
            <Untied />
            <Grid item className={classes.dateContainer3}>
                <Slide direction="left" in={true} timeout={1300} mountOnEnter unmountOnExit>
                    <Typography className={classes.date3}>
                        <span style={{ fontFamily: 'Sorts Mill Goudy, serif' }}>003.  </span>
                        <br />
                        2019
                    </Typography>
                </Slide>
            </Grid>
            <Aspire />
        </Grid>
    )
}

export default Projects