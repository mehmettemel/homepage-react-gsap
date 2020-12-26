import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Hamburger from './Hamburger'
import '../styles/Header.scss'
const Header = ({ history }) => {
  //STATE FOR MENU
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  })
  //STATE FOR DISABLED  BUTTON
  const [disabled, setDisabled] = useState(false)

  //PAGE CHANGES
  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: 'Menu' })
    })
  }, [])
  const handleMenu = () => {
    disabledMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      })
    }
  }

  const disabledMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <header>
      <div className='container'>
        <div className='wrapper'>
          <div className='inner-header'>
            <div className='logo'>
              <Link to='/'>HELLINGTON</Link>
            </div>
            <div className='menu'>
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  )
}

export default withRouter(Header)
