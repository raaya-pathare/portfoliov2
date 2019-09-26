import React from 'react'
import { Link } from 'react-router-dom'
import Typist from 'react-typist'
import { Typography, Slide, Grid, Button, Icon, Tooltip, Fade } from '@material-ui/core'

import CV from '../files/cv1.pdf'
import { AboutStyles } from '../style/muiStyles'

const About = (props) => {
    const classes = AboutStyles(props)

    return (
        <Grid container className={classes.background}>
            <Grid
                container
                className={classes.content}>
                <Typography className={classes.aboutWord}>
                        <Typist
                        avgTypingDelay={200}
                        cursor={{ show: false }}>
                            about.
                        </Typist>
                        <hr className={classes.hr} />
                </Typography>
                        <Typography className={classes.aboutText}>
                            "I'm passionate about well designed technology and its ability to make meaningful change - if you are too, let's talk.
                            Web development allows me to be my most creative while also satisfying my desire to learn and thrive within one of the most dynamic industries today.
                            On the weekend you'll find me at an easel, with my dog at a far away beach, or scoping out the best dumpling joint in Auckland.
                            If you need a little more detail download my CV or check out the links below. Otherwise,  <Link className={classes.contactLink} to="/contact">get in touch.</Link>"
                        </Typography>
                <div className={classes.download}>
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
                </div>
            </Grid>
        </Grid>
    )
}

export default About