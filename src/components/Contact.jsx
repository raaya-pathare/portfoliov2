/* eslint-disable no-useless-computed-key */
import React from 'react'
import { Grid, TextField, Button, Typography, withStyles } from '@material-ui/core'
import * as emailjs from 'emailjs-com'
import Typist from 'react-typist'

const styles = theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: '35vw',
        marginTop: '3em',
    },
    textField: {
        width: '35vw',
        marginBottom: '2vh',
        ['@media only screen and (orientation: portrait)']: {
            width: '80vw'
        },
        '& :-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0px 1000px #fafafa inset'
          }
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '10em',
        height: '1em',
        letterSpacing: '-0.1em',
    },
    subheading: {
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '1.1em',
        textAlign: 'justify',
        letterSpacing: '-0.05em',
        width: '54%',
        marginTop: '1.8em'
    },
    hr: {
        border: '0.5px solid black',
        height: '1px',
        width: '100%',
        marginBottom: '2.5em',
        marginTop: '1.5em'
    },
    buttonContainer: {
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '-15px'
    },
    button: {
        color: 'black', 
        textTransform: 'capitalize',
        fontFamily: 'Hammersmith One, sans-serif',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.5em'
        },
    },
    userMessageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    userMessage: {
        fontFamily: 'Hammersmith One, sans-serif', 
        color: '#A100FF',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.8em'
        },
    }
})

class HigherOrderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            confEmail: '',
            message: '',
            emailError: false,
            confirmation: false,
            sendingError: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let templateParams = {
            from_name: this.state.name,
            from_email: this.state.email,
            to_name: 'raaya.pathare7@gmail.com',
            message_html: this.state.message
        }
        if (this.state.email !== this.state.confEmail) {
            this.setState({
                emailError: true
            })
        } else {
            emailjs.send('gmail', 'portfolio_contact_form', templateParams, 'user_BakXnlA942EEymoG7yUrf')
                .then(res => {
                    console.log('SUCCESS!', res)
                    this.setState({
                        confirmation: true,
                        sendingError: false,
                        emailError: false
                    })
                }).catch(err => {
                    console.log('oops, something went wrong.', err)
                    this.setState({
                        sendingError: true,
                        emailError: false,
                        confirmation: false
                    })
                })
            this.setState({
                name: '',
                email: '',
                confEmail: '',
                message: '',
            })
        }
    }

    render() {
        const { classes } = this.props
        const inputProps = {
            style: { 
                fontSize: '1.2em', 
                fontFamily: 'Sorts Mill Goudy, serif'
            }
        }
        return (
                <Grid container className={classes.root}>
                    <Grid container className={classes.content}>
                        <Grid item className={classes.headingContainer}>
                            <Typography className={classes.heading}>
                                <Typist 
                                    avgTypingDelay={130}
                                    cursor={{ show: false }}>
                                    contact.
                                </Typist>
                            </Typography>
                            <Typography className={classes.subheading}>
                                    If you have a question, want to ask about a project or just want to say hello, don't hesitate to reach out.
                            </Typography>
                            <hr className={classes.hr} />
                        </Grid>
                        <Grid item>
                            <form>
                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="name" value={this.state.name} onChange={this.handleChange}
                                    label="Name"/>

                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="email" value={this.state.email} onChange={this.handleChange} label="Email" />

                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="confEmail" value={this.state.confEmail} onChange={this.handleChange} label="Confirm email" />

                                {this.state.emailError &&
                                    <Typography className={classes.userMessage}>
                                        Email addresses do not match. Please check and re-enter.
                                    </Typography>}

                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="message" multiline={true} rows={7} value={this.state.message} onChange={this.handleChange} label="Message"/>
                                <br />
                                <br />
                                <Grid item className={classes.userMessageContainer}>
                                {this.state.confirmation &&
                                    <Typography className={classes.userMessage}>
                                        Message sent successfully.
                                    </Typography>}

                                {this.state.sendingError &&
                                    <Typography className={classes.userMessage}>
                                        Unfortunately an error occurred. Please try again.
                                    </Typography>}
                                </Grid>
                                <br/>
                                <Grid className={classes.buttonContainer}>
                                    <Button className={classes.button} type="submit" value="submit" onClick={this.handleSubmit} name="submit">
                                        submit message
                                    </Button>
                                </Grid>
                                <br />
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
        )
    }
}

export default withStyles(styles)(HigherOrderComponent)
