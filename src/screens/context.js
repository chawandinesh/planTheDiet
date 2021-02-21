import React from 'react';
const initialState = {
  Carbohydrates: [],
  Proteins: [],
  Fats: [],
  Vitamins: [],
  Minerals: [],
  'Dietary fibre': [],
  Water: [],
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
