/* eslint-disable no-useless-computed-key */
import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import image from '../images/background1.jpg'
import image2 from '../images/aboutbackground1.jpg'
import image3 from '../images/watchbetter.jpg'
import image4 from '../images/untied.jpg'
import image5 from '../images/aspire.jpg'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fca10d'
        },
        secondary: {
            main: '#2327fa'
        },
        background: {
            main: '#2e2e2e'
        },
        font: '#fffdfa'
    },
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 700,
            lg: 1280,
            xl: 1920,
        }
    }
})

export const homeStyles = makeStyles(theme => ({
    background: {
        display: 'flex',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right bottom',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        zIndex: '-1',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center'
    },
    allTextBox: {
        position: 'absolute',
        top: '25%',
        [theme.breakpoints.down('md')]: {
            top: '30%'
        },
        left: '6%',
        display: 'flex',
        flexDirection: 'column',
        width: '90vw',
        lineHeight: '1em'
    },
    helloIm: {
        [theme.breakpoints.down('md')]: {
            fontSize: '7vh'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '7vw'
        },
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        letterSpacing: '-0.12em',
        height: '1em',
        lineHeight: '1em'
    },
    raaya: {
        [theme.breakpoints.down('md')]: {
            fontSize: '6.9vh'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '7vw'
        },
        fontFamily: 'Hammersmith One, sans-serif',
        letterSpacing: '-0.1em',
        color: '#A100FF',
        height: '1em',
        lineHeight: '1em',
        marginLeft: '10px'
    },
    firstLine: {
        [theme.breakpoints.down('md')]: {
            height: '8vh'
        },
        ['@media only screen and (orientation: landscape)']: {
            height: '7vw'
        },
        wordSpacing: '1px',
    },
    iAmA: {
        [theme.breakpoints.down('md')]: {
            fontSize: '7vh'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '7vw'
        },
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        letterSpacing: '-0.07em',
        height: '1em',
        lineHeight: '1em'
    },
    typedText: {
        fontFamily: 'Sorts Mill Goudy, serif',
        [theme.breakpoints.down('md')]: {
            fontSize: '8vh'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '6vw'
        },
        color: '#A100FF',
        marginTop: '0.25em',
        position: 'absolute',
        left: '0.5%',
        height: '1em',
        lineHeight: '1em'
    },
    iconContainer: {
        height: '50px',
        display: 'flex',
        width: '100vw',
        [theme.breakpoints.down('md')]: {
            marginBottom: '80px',
            justifyContent: 'center'
        },
        ['@media only screen and (orientation: landscape)']: {
            marginBottom: '20px',
            justifyContent: 'flex-end',
            marginRight: '4vw'
        },
        alignSelf: 'flex-end',
    },
    icon: {
        height: '30px',
        width: '30px',
        [theme.breakpoints.down('md')]: {
            height: '50px',
            width: '50px',
            marginRight: '15px',
        },
        ['@media only screen and (orientation: landscape)']: {
            height: '30px',
            width: '30px'
        },
    }
}))

export const NavStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '95%',
        justifyContent: 'space-between',
        marginTop: '25px',
        position: 'fixed'
    },
    name: {
        fontFamily: 'Sorts Mill Goudy, serif',
        marginTop: '0.5em',
        '&:hover': {
            transition: '0.5s',
            transform: 'scale(1.05)'
        },
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.5em'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.1em'
        },
        textDecoration: 'none'
    },
    nameLink: {
        textDecoration: 'none',
        color: 'black'
    },
    icon: {
        color: '#A100FF',
        fontSize: '2em',
        [`${theme.breakpoints.down('md')} and (orientation: portrait)`]: {
            fontSize: '3em'
        },
    },
    menuContainer: {
        display: 'flex',
    },
    menu: {
        width: '700px',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            flexDirection: 'column',
        },
        ['@media only screen and (orientation: landscape)']: {
            flexDirection: 'row',
            width: '60vw'
        },
        marginTop: '4px',
        justifyContent: 'space-between',
    },
    menuItem: {
        fontFamily: 'Sorts Mill Goudy, serif',
        textTransform: 'capitalize',
        color: '#A100FF',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.7em'
        },
        [`${theme.breakpoints.down('md')} and (orientation: portrait)`]: {
            fontSize: '1.5vh'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '1em'
        },
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#A100FF',
        }
    },
    link: {
        color: '#A100FF',
        textDecoration: 'none',
        '&:hover': {
            transition: '0.5s',
            transform: 'scale(1.05)'
        }
    }
}))

export const AboutStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${image2})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: '50% 85%',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            backgroundPosition: '50%, 10%'
        },
        justifyContent: 'center',
        overflow: 'hidden'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: '40vw',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            width: '65vw',
            marginTop: '9em'
        },
        marginTop: '6em',
        ['@media only screen and (orientation: portrait)']: {
            marginTop: '20vh'
        },
    },
    aboutTextContainer: {
        marginTop: '-20vh',
        ['@media only screen and (orientation: portrait)']: {
            width: '60vw'
        },
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            width: '65vw'
        },
        height: '20%',
        justifyContent: 'center',
    },
    aboutText: {
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '1.2em',
        },
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.8em',
            width: '50vw'
        },
        textAlign: 'justify',
        fontFamily: 'Sorts Mill Goudy, serif',
        letterSpacing: '-0.05em',
    },
    download: {
        marginTop: '-17vh',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            marginTop: '-7vh'
        },
        ['@media only screen and (orientation: portrait)']: {
            marginTop: '-12vh'
        },
        alignSelf: 'flex-start'
    },
    downloadButton: {
        borderRadius: '50%',
        padding: '15px',
        backgroundColor: '#0000001A'
    },
    CVicon: {
        fontSize: '50px',
        fontWeight: '800',
    },
    link: {
        textDecoration: 'none', 
        color: 'black'
    },
    contactLink: {
        textDecoration: 'none', 
        color: '#A100FF'
    },
    aboutContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            height: '0.1px',
            width: '0.1px'
        }
    },
    aboutWord: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '10em',
        color: 'black',
        height: '1em',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            height: '0px',
            fontSize: '0px'
        },
        letterSpacing: '-0.10em'
    },
    hr: {
        border: '0.5px solid black',
        height: '1px',
        width: '100%',
        marginTop: '1.3em',
    }
}))

export const ProjectsStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    headingContainer: {
        marginTop: '25vh',
        ['@media only screen and (orientation: portrait)']: {
            marginTop: '25vh'
        },
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            marginTop: '30vh'
        },
        width: '100vw'
    },
    heading: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '10em',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            fontSize: '7em'
        },
        marginLeft: '11vw',
        ['@media only screen and (orientation: portrait)']: {
            textAlign: 'center',
            fontSize: '10em',
            marginLeft: '0'
        },
        fontWeight: '400',
        letterSpacing: '-0.10em',
        textAlign: 'left',
        lineHeight: '0.7em',
    },
    years: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '1em',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.3em'
        },
        marginTop: '2vh',
        marginBottom: '2vh',
        marginLeft: '11vw'
    },
    hr: {
        border: '0.5px solid black',
        width: '100vw',
        marginBottom: '4em'
    },
    WBContainer: {
        display: 'flex',
        width: '95vw',
        height: '90vh',
        marginBottom: '12vh',
        ['@media only screen and (orientation: portrait)']: {
            height: '65vh',
        },
        [theme.breakpoints.down('md')]: {
            height: '90vw'
        },
        ['@media only screen and (orientation: landscape)']: {
            height: '50vw',
        },
    },
    WBphoto: {
        backgroundImage: `url(${image3})`,
        [theme.breakpoints.up('lg')]: {
            '&:hover': {
                transition: 'all 1s',
                transform: 'scale(1.05)'
            },
        },
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center bottom',
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '75%'
        },
        ['@media only screen and (orientation: portrait)']: {
            height: '70%',
            width: '100%'
        },
    },
    WBinfo: {
        alignItems: 'center',
        backgroundColor: '#1f1f1fD9',
        ['@media only screen and (orientation: portrait)']: {
            alignSelf: 'flex-end',
            width: '65%',
            height: '60%',
            overflow: 'scroll',
            transform: 'translate(165px, -200px)'
        },
        width: '19%',
        height: '70%',
        [theme.breakpoints.up('lg')]: {
            transform: 'translate(-200px, 170px)',
            height: '57%',
            overflow: 'scroll'
        },
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            overflow: 'scroll',
            width: '25%',
            transform: 'translate(-100px, 70px)'
        },
        padding: '30px'
    },
    dateContainer1: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100vw',
        height: '2px',
        transform: 'translateY(12em)',
        [theme.breakpoints.down('md')]: {
            transform: 'translateY(4.5em)',
        }
    },
    date1: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '1.2em',
        color: '#A100FF',
        marginRight: '10vw',
        [theme.breakpoints.down('md')]: {
            marginRight: '7vw'
        }
    },
    dateContainer2: {
        display: 'flex',
        zIndex: '5',
        justifyContent: 'flex-start',
        width: '100vw',
        height: '2px',
        transform: 'translateY(14em)',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            transform: 'translateY(6.5em)'
        },
    },
    date2: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '1.2em',
        color: '#A100FF',
        textAlign: 'right',
        marginLeft: '4vw'
    },
    dateContainer3: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100vw',
        height: '2px', 
        transform: 'translateY(16.5em)',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            transform: 'translateY(6.5em)'
        },
    },
    date3: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '1.2em',
        color: '#A100FF',
        marginRight: '19vw',
        [theme.breakpoints.down('md')]: {
            marginRight: '9vw'
        },
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            marginRight: '14.5vw'
        },
    },
    title: {
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '3em',
        color: 'white',
        textAlign: 'center',
        letterSpacing: '-0.05em',
        lineHeight: '1em'
    },
    subheading: {
        fontFamily: 'Sorts Mill Goudy, serif',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.3em',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '2em'
        },
    },
    bodytext: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '1em',
        letterSpacing: '-0.01em',
        color: 'white',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.5em'
        },
        textAlign: 'center'
    },
    bodytext2: {
        fontFamily: 'Sorts Mill Goudy, serif',
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.8em'
        },
        fontSize: '1.2em',
    },
    bodytext3: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '1em',
        color: 'white',
        fontWeight: '1000',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.5em'
        },
        textAlign: 'center'
    },
    untiedContainer: {
        display: 'flex',
        width: '95vw',
        height: '90vh',
        marginBottom: '22vh',
        ['@media only screen and (orientation: portrait)']: {
            height: '65vh',
            marginBottom: '25vh'
        },
        [theme.breakpoints.down('md')]: {
            height: '90vw'
        },
        ['@media only screen and (orientation: landscape)']: {
            height: '50vw',
        },
    },
    untiedInfo: {
        zIndex: '1',
        backgroundColor: '#1f1f1fD9',
        alignItems: 'center',
        ['@media only screen and (orientation: portrait)']: {
            width: '65%',
            height: '57%',
            transform: 'translate(165px, 600px)',
            overflow: 'scroll'
        },
        width: '20%',
        height: '70%',
        [theme.breakpoints.up('lg')]: {
            transform: 'translate(140px, 200px)',
            height: '52%',
            overflow: 'scroll'
        },
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            overflow: 'scroll',
            width: '25%',
            transform: 'translate(80px, 90px)'
        },
        padding: '30px'
    },
    untiedPhoto: {
        width: '80%',
        height: '95%',
        [theme.breakpoints.down('lg')]: {
            alignSelf: 'center',
        },
        [theme.breakpoints.up('lg')]: {
            '&:hover': {
                transition: 'all 1s',
                transform: 'scale(1.05)'
            },
        },
        backgroundImage: `url(${image4})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '93% 93%',
        backgroundPosition: 'center bottom',
        [theme.breakpoints.down('md')]: {
            width: '75%'
        },
        ['@media only screen and (orientation: portrait)']: {
            height: '70%',
            width: '100%'
        },
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            height: '90%',
        },
        [`${theme.breakpoints.down('md')} and (orientation: portrait)`]: {
            transform: 'translateY(-40vw)',
        },
    },
    aspireContainer: {
        display: 'flex',
        width: '60vw',
        height: '90vh',
        ['@media only screen and (orientation: portrait)']: {
            height: '65vh',
            width: '90vw'
        },
        [theme.breakpoints.down('md')]: {
            height: '90vw'
        },
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            height: '50vw',
            width: '80vw'
        },
    },
    aspirePhoto: {
        backgroundImage: `url(${image5})`,
        [theme.breakpoints.up('lg')]: {
            '&:hover': {
                transition: '1s',
                transform: 'scale(1.09)'
            },
        },
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30em 53em',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            backgroundSize: '77% 95%'
        },
        backgroundPosition: 'center center',
        width: '45%',
        ['@media only screen and (orientation: portrait)']: {
            width: '57%'
        },
    },
    aspireInfo: {
        backgroundColor: '#1f1f1fD9',
        zIndex: '2',
        width: '55%',
        height: '40%',
        [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
            height: '60%',
            transform: 'translateX(-100px)',
        },
        padding: '30px',
        overflow: 'scroll',
        alignSelf: 'center',
        transform: 'translateX(-80px)',
        ['@media only screen and (orientation: portrait)']: {
            alignSelf: 'flex-end',
            width: '43%',
            height: '60%',
            transform: 'translate(-100px, -160px)'
        },
    }
}))

export const artworkStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    headingContainer: {
        display: 'flex',
        width: '90vw',
        marginTop: '12vh',
        marginBottom: '3vh',
        ['@media only screen and (orientation: portrait)']: {
            marginTop: '17vh'
        },
        marginRight: '1%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }, 
    heading: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '10em',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '12em'
        },
        letterSpacing: '-0.1em',
        height: '1.07em',
        marginRight: '0.3em'
    }, 
    hr: {
        border: '0.5px solid black',
        width: '90vw',
        marginTop: '3vh',
    },
    subheadingContainer: {
        display: 'flex',
        width: '90vw',
        marginBottom: '2vh',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    about: {
        width: '20vw',
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '1em',
        textAlign: 'justify',
        lineHeight: '1em',
        letterSpacing: '-0.05em'
    },
    linkContainer: {
        flexGrow: 1,
        textAlign: 'right'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '0.9em',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.4em'
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'none',
        width: '90vw'
    }
}))

export const sliderStyles = makeStyles(theme => ({
    squareBehind: {
        position: 'absolute',
        height: '28vw',
        width: '28vw',
        marginBottom: '4vh',
        [theme.breakpoints.down('md')]: {
            height: '43vw',
            width: '43vw'
        },
        backgroundColor: 'black',
        zIndex: '-1',
        '&:hover': {
            transition: '1s',
        }
    },
    image: {
        position: 'absolute',
        zIndex: '10',
        height: '28vw',
        width: '28vw',
        marginBottom: '4vh',
        [theme.breakpoints.down('md')]: {
            height: '43vw',
            width: '43vw'
        },
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        '&:hover': {
            transition: '0.6s',
            opacity: '0.3'
        }
    },
    slide: {
        display: 'flex',
        justifyContent: 'center',
        height: '28vw',
        width: '28vw',
        marginBottom: '4vh',
        [theme.breakpoints.down('md')]: {
            height: '43vw',
            width: '43vw'
        },
    }, 
    textContainer: {
        display: 'flex',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    id: {
        fontSize: '1.2em',
        color: 'white',
        fontFamily: 'Sorts Mill Goudy, serif'
    },
    name: {
        fontSize: '2em',
        color: 'white',
        fontFamily: 'Hammersmith One, sans-serif'
    },
    year: {
        fontSize: '1.2em',
        color: 'white',
        fontFamily: 'Sorts Mill Goudy, serif'
    }
}))