'use client'

import GameGrid from '@/components/GameGrid'
import LabelBox from '@/components/LabelBox'
import { Matrix } from '@/types'
import { useState } from 'react'

export default function Home() {
  const [matrix, setMatrix] = useState<Matrix>({
    column1: {
      property: 'attribute',
      value: 'WATER'
    },
    column2: {
      property: 'attribute',
      value: 'FIRE'
    },
    column3: {
      property: 'attribute',
      value: 'WIND'
    },
    row1: {
      property: 'level',
      value: 1
    },
    row2: {
      property: 'level',
      value: 4
    },
    row3: {
      property: 'level',
      value: 6
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
