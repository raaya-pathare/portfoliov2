import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import Typist from 'react-typist'

import data from './images'
import Slider from './Slider'
import { artworkStyles } from '../style/muiStyles'

const Artwork = (props) => {
    const classes = artworkStyles(props)
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.headingContainer}>
                <Grid item>
                <Typography className={classes.heading}>
                    <Typist avgTypingDelay={150}
                        cursor={{ show: false }}>
                        artwork. 
                    </Typist>
                </Typography>
                </Grid>
                <hr className={classes.hr} />
            </Grid>
            <Slide direction="up" in={true} timeout={1200} mountOnEnter unmountOnExit>
            <Grid item className={classes.subheadingContainer}>
                <Typography className={classes.about}>
                    Freehand artwork executed with a variety of mediums including: ink, graphite, charcoal and watercolor. Hover or click on the images below for details, or click the link to my instagram on the right for more work.
                </Typography>
                <Grid item className={classes.linkContainer}>
                    <a className={classes.link} href="https://www.instagram.com/by.raaya/?hl=en" target="_blank" rel="noopener noreferrer">instagram.com/by.raaya</a>
                </Grid>
            </Grid>
            </Slide>
            <Slide direction="up" in={true} timeout={1300} mountOnEnter unmountOnExit>
            <Grid container className={classes.content}>
                {data.map(el => {
                    return <Slider id={el.id} name={el.name} year={el.year} image={el.image}/>
                })}
            </Grid>
            </Slide>
        </Grid>
    )
}

// Artwork.propTypes= {

// }

export default Artwork
