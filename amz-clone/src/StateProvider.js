import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

// Do not worry looking at this code. As I mentioned earlier,
//  setting up React Context API is more of a boilerplate and pretty much same in every project.
// React Context API.
// It is a application level state management so that you can access important data from any component when necessary.
//when you click the add to basket button,the product moves to the data layer,
//then the product can be accessed to any component.
