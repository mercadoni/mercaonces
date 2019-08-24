export const SET_STATE = 'SET_STATE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SORT_LOW_TO_HIGH = 'SORT_LOW_TO_HIGH';
export const SORT_HIGH_TO_LOW = 'SORT_HIGH_TO_LOW';

export function setState(field, value) {
  return {
    type: SET_STATE,
    payload: {
      field,
      value
    }
  }
}

export function addToCart(prod){
  return {
    type: ADD_TO_CART,
    payload: {
      prod
    }
  }
}

export function removeFromCart(prod){
  return {
    type: REMOVE_FROM_CART,
    payload: {
      prod
    }
  }
}

export function sortLowToHigh() {
  return {
    type: SORT_LOW_TO_HIGH,
  }
}

export function sortHighToLow() {
  return {
    type: SORT_HIGH_TO_LOW,
  }
}