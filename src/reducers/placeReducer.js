import { ADD_PLACE,REMOVE_PLACE } from '../actions/types';

const initialState = {
  placeName: '',
  places: []
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key:action.payload,
          value: action.payload
        })
      };

      case REMOVE_PLACE:
       return {
        ...state,
        places: state.places.slice(1)
      };

      default:
    
      return state;
  }
}

export default placeReducer;