'use client'

import GameGrid from '@/components/GameGrid'
import LabelBox from '@/components/LabelBox'
import { Matrix } from '@/types'
import { useState } from 'react'

export default function Home() {
  const [matrix, setMatrix] = useState<Matrix>({
    column1: {
      property: 'Attribute',
      value: 'WATER'
    },
    column2: {
      property: 'Attribute',
      value: 'FIRE'
    },
    column3: {
      property: 'Level',
      value: 4
    },
    row1: {
      property: 'Type',
      value: 'Fairy'
    },
    row2: {
      property: 'Card Type',
      value: 'Fusion'
    },
    row3: {
      property: 'Ability',
      value: 'Gemini'
    }
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5 grid-rows-5 aspect-square max-w-2xl w-full">
        <div />
        <LabelBox property={matrix.column1} />
        <LabelBox property={matrix.column2} />
        <LabelBox property={matrix.column3} />
        <div />
        <LabelBox property={matrix.row1} />
        <GameGrid />
        <div />
        <LabelBox property={matrix.row2} />
        <div />
        <LabelBox property={matrix.row3} />
        <div />
        <div className="col-span-5 grid place-content-center">
          <p className="text-center">bottom text</p>
        </div>
      </div>
    </main>
  )
}
