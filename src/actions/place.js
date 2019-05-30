import { ADD_PLACE,REMOVE_PLACE } from './types';
export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export const removePlace = () => {
  return {
    type: REMOVE_PLACE,
    }
}
