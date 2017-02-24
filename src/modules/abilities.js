// this data should probably be in a databse
// it will always be used, so it's a bit easier to have it here

import { map, prop, add, subtract, pipe, max } from 'ramda'

const attackEffect = (state) => {
  const { target, level } = state
  return {
    ...state,
    target: pipe(
      prop('hp'),
      subtract(level),
      max(0)
    )(target)
  }
}

export default {
  state: {
    attack: {
      name: 'Attack',
      cost: 1,
      canLevel: true,
      activateOn: 'swipe-in',
      effect: attackEffect
    },
    hp: {
      name: 'HP',
      cost: 0.5,
      canLevel: true,
      activateOn: null,
      effect: (state) => state
    },
    protect: {
      name: 'Protect',
      cost: 2,
      canLevel: true,
      activateOn: 'passive',
      effect: (state) => {
        map(
          pipe(
            prop('sheild'),
            add(level)
          ),
          neighbors
        )
      }
    },
    'counter-attack': {
      name: 'Counter Attack',
      cost: 1,
      canLevel: true,
      activateOn: 'post-swipe-in',
      effect: attackEffect
    },
    slippery: {
      name: 'Slippery',
      cost: 2,
      canLevel: false,
      activateOn: 'pre-swipe-in',
      effect: ({ deck, self }) => {
        pipe(
          prepend(self),
          takeLast(1),
          set(
            lense('position'),
            view(lense('position'), self)
          )
        )(deck)
        deck = withoutLast(1, deck)
        self = without('position', self)
      }
    },
    poison: {},
    upgrade: {},
    quick: {},
    heal: {},
    zombie: {},
    shapeshift: {},
    hidden: {}
  }

}
