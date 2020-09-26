import {
  SET_CURENT_INPUT,
} from './actions'

export const initialState = {
  loading: false,
  error: null,
  data: {
    submitted: false,
    name: null,
    gender: null,
    age: null,
    email: null,
    country: null,
    city: '',
    date: '',
    csv_input: null,
    csv_array: [],
  },
}

export default (state = initialState, { type, payload }) => {
  console.log('reducer', type, payload)
  
  switch (type) {
    case SET_CURENT_INPUT:
      return {
        ...state,
        data: {
          ...payload
        },
      };

    default:
      return state
  }
}
