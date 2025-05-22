import React, { createContext, useReducer, useContext } from 'react';

const CarrinhoContext = createContext();

const initialState = {
  itens: [], // aqui guardaremos os produtos selecionados
};

function carrinhoReducer(state, action) {
  switch(action.type) {
    case 'ADICIONAR_ITEM':
      // lógica para adicionar item
      return {...state, itens: [...state.itens, action.payload]};
    case 'REMOVER_ITEM':
      // lógica para remover item
      return {...state, itens: state.itens.filter(i => i.id !== action.payload.id)};
    default:
      return state;
  }
}

export function CarrinhoProvider({ children }) {
  const [state, dispatch] = useReducer(carrinhoReducer, initialState);

  return (
    <CarrinhoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
