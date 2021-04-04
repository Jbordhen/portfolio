import React from 'react'
import SideBar from './Components/SideBar'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <SideBar />
            <Route path='/' component={HomeScreen}></Route>
        </Router>
    )
}

export default App
