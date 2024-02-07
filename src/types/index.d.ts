export interface Matrix {
  column1: Property
  column2: Property
  column3: Property
  row1: Property
  row2: Property
  row3: Property
}

type Property = Level | Attribute | Type

interface BaseProperty {
  property: string
  value: string | number
}

interface Level extends BaseProperty {
  property: 'Level'
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

interface Attribute extends BaseProperty {
  property: 'Attribute'
  value: 'DARK' | 'LIGHT' | 'EARTH' | 'WIND' | 'WATER' | 'FIRE'
}

interface Type extends BaseProperty {
  property: 'Type'
  value:
    | 'Aqua'
    | 'Beast'
    | 'Beast-Warrior'
    | 'Cyberse'
    | 'Dinosaur'
    | 'Divine-Beast'
    | 'Dragon'
    | 'Fairy'
    | 'Fiend'
    | 'Fish'
    | 'Insect'
    | 'Illusion'
    | 'Machine'
    | 'Plant'
    | 'Psychic'
    | 'Pyro'
    | 'Reptile'
    | 'Rock'
    | 'Sea Serpent'
    | 'Spellcaster'
    | 'Thunder'
    | 'Warrior'
    | 'Winged Beast'
    | 'Wyrm'
    | 'Zombie'
}

interface CardType extends BaseProperty {
  property: 'Card Type'
  value: 'Normal' | 'Effect' | 'Ritual' | 'Fusion' | 'Synchro' | 'Xyz' | 'Pendulum' | 'Link'
}
