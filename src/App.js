import React, { lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Suspense from "./components/Suspense"
import ProtectedRoute from "./routes/ProtectedRoute"

const Login = lazy(() => import("./pages/Login"))
const AntDesignTableFix = lazy(() => import("./utils/Test/AntDesignTableFix"))
const TestData = lazy(() => import("./utils/Test/TestData"))
const _RouteSections = lazy(() => import("./routes/_RouteSections"))

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/login'>
            <Suspense Component={Login} />
          </Route>
          <Route path='/test-table'>
            <Suspense Component={AntDesignTableFix} />
          </Route>
          <Route path='/test-data'>
            <Suspense Component={TestData} />
          </Route>

          <ProtectedRoute path='/' component={_RouteSections} isAuth={true} />
        </Switch>
      </Router>
    </>
  )
}

export default App
