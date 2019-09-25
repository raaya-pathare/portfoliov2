import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { sliderStyles } from '../style/muiStyles'

const Slider = ({ image, id, name, year }, ...props) => {
    const classes = sliderStyles(props)
    return (
    <>
    <div>

    <div 
    className={classes.squareBehind}>
    </div>

    <div 
    style={{ backgroundImage: `url(${image})` }} 
    className={classes.image}>
    </div>

    <Grid item className={classes.slide}>
    <Grid item className={classes.textContainer}>
        <Typography className={classes.id}>
            oo{id}.
        </Typography>
        <br />
        <Typography className={classes.name}>
            {name}
        </Typography>
        <br />
        <Typography className={classes.year}>
            {year}
        </Typography>
    </Grid>
    </Grid>

    </div>
    </>
    )
}

Slider.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.string
}

export default Slider