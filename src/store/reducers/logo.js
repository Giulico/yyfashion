const defaultState = {
  pinned: false
}

// function reducer
const logo = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'PIN_LOGO':
      return { ...state, pinned: true }
    case 'UNPIN_LOGO':
      return { ...state, pinned: false }
    default:
      return state
  }
}

export default logo
