export interface Matrix {
  column1: string
  column2: string
  column3: string
  row1: string
  row2: string
  row3: string
}

type Property = Level | Attribute

interface Level extends Property {
  property: 'level'
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

interface Attribute extends Property {
  property: 'attribute'
  value: 'DARK' | 'LIGHT' | 'EARTH' | 'WIND' | 'WATER' | 'FIRE'
}
