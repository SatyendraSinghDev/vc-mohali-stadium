import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from 'views/Login'
import Dashboard from 'views/Dashboard'
// import { PrivateRoute } from 'routes/PrivateRoute'
import { LOGIN_ROUTE, DASHBORD_ROUTE } from 'constants/routes'

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path={LOGIN_ROUTE.PATH} element={<Login />} />
          {/* <Route path={DASHBORD_ROUTE.PATH} element={<PrivateRoute component={Dashboard} />} /> */}
          <Route path={DASHBORD_ROUTE.PATH} element={<Dashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    )
  }
}

export default App
