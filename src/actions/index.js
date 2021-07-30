export const EMAIL = 'EMAIL';
export const getEmail = (payload) => ({ type: EMAIL, email: payload });

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const requestSearch = () => ({ type: REQUEST_SEARCH });

export const REQUEST_SUCCESS_SEARCH = 'REQUEST_SUCCESS_SEARCH';
export const requestSuccessSearch = (payload) => ({
  type: REQUEST_SUCCESS_SEARCH,
  payload,
});

export const ITEM_LENGTH_ONE = 'ITEM_LENGTH_ONE';
export const itemLengthOne = () => ({ type: ITEM_LENGTH_ONE });

export const TURN_GIVE_ID_FALSE = 'TURN_GIVE_ID_FALSE';
export const turnGiveIdFalse = () => ({ type: TURN_GIVE_ID_FALSE });

export const REQUEST_DETAILS_ID = 'REQUEST_DETAILS_ID';
export const requestDetailsId = () => ({ type: REQUEST_DETAILS_ID });

export const REQUEST_SUCCESS_DETAILS_ID = 'REQUEST_SUCCESS_DETAILS_ID';
export const requestSuccessDetailsId = (payload) => ({
  type: REQUEST_SUCCESS_DETAILS_ID,
  payload,
});
