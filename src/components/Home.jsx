import React from 'react'
import { Typography, Grid, Fade } from '@material-ui/core'
import { homeStyles } from '../style/muiStyles'
import Typist from 'react-typist'

const Home = (props) => {
    const classes = homeStyles(props)
    return (
            <>
                <Grid container className={classes.background}>
                        <Fade in={true} direction="right" timeout={1500}>
                        <Grid container className={classes.allTextBox}>
                            <Grid item className={classes.firstLine}>
                                <Typography className={classes.helloIm}>
                                    Hello, I'm
                                    <span className={classes.raaya}>Raaya.</span>
                                </Typography>
                            </Grid>
                            <Grid item>
                            <Typography className={classes.iAmA}>
                                I am a
                            </Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex' }}>
                            <hr className={classes.hr} />
                            <Typography className={classes.typedText}>
                                <Typist
                                cursor={{ hideWhenDone: true, hideWhenDoneDelay: 200 }}>
                                    Web Developer.
                                    <Typist.Backspace count={14} delay={800} />
                                    <Typist.Delay ms={500} />
                                    Designer.
                                    <Typist.Backspace count={9} delay={800} />
                                    <Typist.Delay ms={500} />
                                    Thinker.
                                    <Typist.Backspace count={8} delay={800} />
                                    <Typist.Delay ms={500} />
                                    Creative.
                                </Typist>
                            </Typography>
                            </Grid>
                        </Grid>
                        </Fade>
                </Grid>
            </>
        )
    }


export default Home

