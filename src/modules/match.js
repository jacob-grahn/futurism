// here we have to core logic of the game
// somehow the state will need to be synced with firebase
// also somehow, workers will need to run this server side to
// prevent cheating
// also somehow, this needs to run client side if there is no internet

import { lensPath, view, propEq, filter } from 'ramda'

export default {
  state: {
    uidTurn: null,
    users: {
    /*
      [uid]: {
        account: {
          displayName: String,
          uid: String,
          photoUrl: String
        },
        deck: {
          name: String,
          cards: [Card]
        },
        mat: {
          '1': Card,
          '2': Card,
          '3': Card
        }
      }
    */
    }
  },
  mutations: {
    SWIPE_IN (state, { uid, position }) {
      if (state.uidTurn !== uid) return state

      const card = getMatCard(state, uid, position)
      if (!card) return state

      const abilities = filter(onSwipeIn, card.abilities)
      if (abilities.length === 0) return state

      state = useAbilities(state, abilities)
      state = endTurn(state)
      return state
    }
  }
}

function endTurn (state) {
  return {
    ...state,
    uidTurn: state.users.reduce((uid, user) => {
      if (user.account.uid !== state.uidTurn) {
        uid = user.account.uid
      }
    }, '')
  }
}

function useAbilities (state, abilities) {
  return abilities.reduce((s, ability) => {
    return ability.effect(s)
  }, state)
}

function getMatCard (state, uid, position) {
  return view(
    lensPath(['users', uid, 'mat', position]),
    state
  )
}

const onSwipeIn = propEq('activateOn', 'swipe-in')
