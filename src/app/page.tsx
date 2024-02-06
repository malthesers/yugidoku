'use client'

import GameGrid from '@/components/GameGrid'
import LabelBox from '@/components/LabelBox'
import { Matrix } from '@/types'
import { useState } from 'react'

export default function Home() {
  const [level, setLevel] = useState<Matrix>({
    column1: 'Water',
    column2: 'Level 4',
    column3: 'ATK 1500',
    row1: 'Pyro',
    row2: 'Fusion',
    row3: 'Fish'
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5 grid-rows-5 aspect-square max-w-2xl w-full">
        <LabelBox label="x" />
        <LabelBox label={level.column1} />
        <LabelBox label={level.column2} />
        <LabelBox label={level.column3} />
        <LabelBox label="x" />
        <LabelBox label={level.row1} />
        <GameGrid />
        <LabelBox label="x" />
        <LabelBox label={level.row2} />
        <LabelBox label="x" />
        <LabelBox label={level.row3} />
        <LabelBox label="x" />
        <div className="col-span-5 grid place-content-center">
          <p className="text-center">bottom text</p>
        </div>
      </div>
    </main>
  )
}
