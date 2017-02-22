export default {
  state: {
    citizen: {
      name: 'Citizen',
      color: 'clear',
      abilities: ['attack', 'hp'],
      strongVs: ['forgotten']
    },
    soldier: {
      name: 'Soldier',
      color: 'blue',
      abilities: ['protect', 'counter-attack'],
      strongVs: ['royal']
    },
    royal: {
      name: 'Royal',
      color: 'purple',
      abilities: ['slippery', 'poison'],
      strongVs: 'machine'
    },
    machine: {
      name: 'Machine',
      color: 'silver',
      abilities: ['upgrade', 'quick'],
      strongVs: ['natural']
    },
    natural: {
      name: 'Natural',
      color: 'green',
      abilities: ['heal', ''],
      strongVs: ['soldier']
    },
    forgotten: {
      name: 'Forgotten',
      color: 'black',
      abilities: ['shapeshift', 'hidden'],
      strongVs: ['citizen']
    }
  }
}
