export const ADD_TO_USER = "ADD_TO_USER";
export const ADD_TEMP_USER = "ADD_TEMP_USER";
export const ADD_TEMP_PUSER = "ADD_TEMP_PUSER";
export const ADD_TEMP_DATE = "ADD_TEMP_DATE";
export const ADD_TO_DATE = "ADD_TO_DATE";


export const addToCart = user => ({
  type: ADD_TO_USER,
  user
});
export const addTempUser = cadUser => ({
  type: ADD_TEMP_USER,
  cadUser
})

export const addTempPUser = pesUser => ({
  type: ADD_TEMP_PUSER,
  pesUser
})

export const addTempDate = registreDate => ({
  type: ADD_TEMP_DATE,
  registreDate
})

export const addToDate = data => ({
  type: ADD_TO_DATE,
  data
})