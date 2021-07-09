import React from "react"
import { Route, Redirect } from "react-router-dom"
import Suspense from "../components/Suspense"

// allows you to validate first if user is Authenticated
// ProtectedRoute had param (props) that determines if it's authenticate or not

// isAuth - true or false (if isAuthenticated or not)
// component - rendered component that's available ONLY if user is authenticated
// ...rest - get the other props you included in the <ProtectedRoute /> under App.js

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
          <Suspense Component={Component} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          /> // redirect to Login page if it's not authenticated
        )
      }}
    />
  )
}

export default ProtectedRoute
