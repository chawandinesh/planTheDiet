import React from 'react';
const initialState = {
  Electrical: [],
  Mechanical: [],
  Electronic: [],
  Sanitory: [],
  Clothes: [],
  Cosmetic: [],
  Food:[],
  Departmental:[],
  Stationary:[],
  Other: [],
};

export const TravelContext = React.createContext(null);
export function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <TravelContext.Provider value={{state, setState}}>
      {props.children}
    </TravelContext.Provider>
  );
}
