export const SET_CURENT_INPUT = 'SET_CURENT_INPUT'
export function addInputResult(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'SET_CURENT_INPUT',
      payload: data,
    })
  }
}
