import React, { createContext, useContext, useReducer } from "react"

const LoadContext = createContext()
const useLoadDisplay = () => {
  return useContext(LoadContext)
}

// State Management
const loadState = {
  data: [],
  isFetching: true,
  error: null,
}

const loadReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, isFetching: true, error: null }
    case "FETCHED":
      return { ...state, isFetching: false, data: action.payload }
    case "FETCH_ERROR":
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state
  }
}

const FetchLoad = (props) => {
  const [state, dispatch] = useReducer(loadReducer, loadState)

  return (
    <LoadContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </LoadContext.Provider>
  )
}

export { FetchLoad, useLoadDisplay }
