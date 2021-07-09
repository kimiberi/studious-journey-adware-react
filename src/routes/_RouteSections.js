import React, { lazy } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Icon } from "semantic-ui-react"

import Suspense from "../components/Suspense"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "../assets/scss/_routeSections.scss"
import Footer from "../components/Footer"

const Dashboard = lazy(() => import("../pages/Dashboard"))
const Reports = lazy(() => import("../pages/Reports"))
const Registrations = lazy(() => import("../pages/Registrations"))
const PincodeRedemptions = lazy(() => import("../pages/PincodeRedemptions"))
const Search = lazy(() => import("../pages/Search"))

const _Homepage = () => {
  return (
    <div id='outer-container' className='routeSections'>
      <Sidebar
        customBurgerIcon={<Icon name='sidebar' size='big' />}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <div id='page-wrap'>
        <Header />
        <Switch>
          <Route path='/dashboard'>
            <Suspense Component={Dashboard} />
          </Route>
          <Route path='/reports'>
            <Suspense Component={Reports} />
          </Route>
          <Route path='/registrations'>
            <Suspense Component={Registrations} />
          </Route>
          <Route path='/pincode-redemptions'>
            <Suspense Component={PincodeRedemptions} />
          </Route>
          <Route path='/search'>
            <Suspense Component={Search} />
          </Route>
        </Switch>
        <Footer />
        <Redirect exact from='/' to='/dashboard' />
      </div>
    </div>
  )
}

export default _Homepage
