export interface Matrix {
  column1: Property
  column2: Property
  column3: Property
  row1: Property
  row2: Property
  row3: Property
}

type Property = Level | Attribute | Type | CardType | Ability

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

interface Ability extends BaseProperty {
  property: 'Ability'
  value: 'Toon' | 'Spirit' | 'Union' | 'Gemini' | 'Flip'
}

interface ATK extends BaseProperty {
  property: 'ATK'
  value: BattleStats
}

interface DEF extends BaseProperty {
  property: 'DEF'
  value: BattleStats
}

type BattleStats =
  | 'gt3000'
  | '?'
  | 0
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200
  | 1300
  | 1400
  | 1500
  | 1600
  | 1700
  | 1800
  | 1900
  | 2000
  | 2100
  | 2200
  | 2300
  | 2400
  | 2500
  | 2600
  | 2700
  | 2800
  | 2900
  | 3000
