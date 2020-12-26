import React from 'react'
import './App.scss'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <div className='home'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
