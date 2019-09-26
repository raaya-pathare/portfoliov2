import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { theme } from '../style/muiStyles'
import { ThemeProvider } from '@material-ui/styles';

import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import Artwork from './Artwork'
import FooterIcons from './FooterIcons'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
            <Router>
                <Route path="/" component={Nav} />
                <Route path="/" component={FooterIcons} />
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/artwork" component={Artwork} />
            </Router>
    </ThemeProvider>
  )
}

export default App
