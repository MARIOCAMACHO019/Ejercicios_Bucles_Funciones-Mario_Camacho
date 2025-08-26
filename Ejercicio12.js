const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const foundMutants = [];
  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      foundMutants.push(mutants[i].name);
    }
  }

  if (foundMutants.length > 0) {
    if (foundMutants.length === 1) {
      return `Se encontró 1 mutante con el poder '${power}': ${foundMutants[0]}.`;
    } else {
      return `Se encontraron ${foundMutants.length} mutantes con el poder '${power}': ${foundMutants.join(', ')}.`;
    }
  } else {
    return `No se encontró ningún mutante con el poder '${power}'.`;
  }
}

console.log(findMutantByPower(mutants, 'teleportation'));
console.log(findMutantByPower(mutants, 'regeneration'));
console.log(findMutantByPower(mutants, 'flying'));
console.log(findMutantByPower(mutants, 'magnetism'));