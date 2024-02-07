export interface Matrix {
  column1: Property
  column2: Property
  column3: Property
  row1: Property
  row2: Property
  row3: Property
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
