const signUp = 'SIGN_UP'

const SIGN_UP = (userdata) => {
  return {
    type: signUp,
    payload: userdata
  }
}

export { SIGN_UP }