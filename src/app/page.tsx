import GameGrid from '@/components/GameGrid'
import LabelBox from '@/components/LabelBox'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5 grid-rows-5 aspect-square max-w-xl w-full">
        <LabelBox label="x" />
        <LabelBox label="WATER" />
        <LabelBox label="Level 4" />
        <LabelBox label="ATK 1500" />
        <LabelBox label="x" />
        <LabelBox label="Pyro" />
        <GameGrid />
        <LabelBox label="x" />
        <LabelBox label="Effect" />
        <LabelBox label="x" />
        <LabelBox label="Fish" />
        <LabelBox label="x" />
        <div className="col-span-5">
          <p className="text-center">bottom text</p>
        </div>
      </div>
    </main>
  )
}
