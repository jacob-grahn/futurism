// this data should probably be in a databse
// it will always be used, so it's a bit easier to have it here

const attackEffect = (state) => {
  const { target, level } = state
  return {
    ...state,
    target: Math.max(target.hp - level, 0)
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
        state.neighbors.map(neighbor => {
          neighbor.sheild += state.level
        })
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
