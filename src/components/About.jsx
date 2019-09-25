import React from 'react'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation'
import { Typography, Slide, Grid, Button, Icon, Tooltip, Fade } from '@material-ui/core'
// import PropTypes from 'prop-types'

import CV from '../files/cv.pdf'
import { AboutStyles } from '../style/muiStyles'

const About = (props) => {
    const classes = AboutStyles(props)

    return (
        <Grid container className={classes.background}>
            <Grid
                container
                className={classes.content}>
                <Grid item className={classes.aboutContainer}>
                    <Typing
                        hideCursor={true}
                        speed={120}>
                        <Typing.Delay ms={1300} />
                        <Typography className={classes.aboutWord}>
                            about.
                        </Typography>
                    </Typing>
                    <hr className={classes.hr} />
                </Grid>
                <Grid item className={classes.aboutTextContainer}>
                    <Slide in={true} direction="up" timeout={1600}>
                        <Typography className={classes.aboutText}>
                            "I'm passionate about well designed technology - if you are too, we'll get along.
                            Web development allows me to be my most creative while also satisfying my desire to learn.
                            On the weekend you'll find me at an easel, with my dog at a far away beach, or scoping out the best dumpling joint in Auckland.
                            If you need a little more detail download my CV below. Otherwise,  <Link className={classes.contactLink} to="/contact">get in touch.</Link>"
                        </Typography>
                    </Slide>
                </Grid>
                <Grid item className={classes.download}>
                    <Slide in={true} direction="up" timeout={1300}>
                        <Button className={classes.downloadButton}>
                            <Tooltip
                                title="Download"
                                placement="bottom"
                                TransitionComponent={Fade}>
                                <Icon className={classes.CVicon}>
                                    <a href={CV} rel="noopener noreferrer" target="_blank" className={classes.link}>
                                        arrow_downward
                                </a>
                                </Icon>
                            </Tooltip>
                        </Button>
                    </Slide>
                </Grid>
            </Grid>
        </Grid>
    )
}

// About.propTypes = {
//     name: PropTypes.object
// }

export default About