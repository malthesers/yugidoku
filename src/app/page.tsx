import GameGrid from '@/components/GameGrid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5 grid-rows-5 aspect-square max-w-xl w-full">
        <div>x</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>x</div>

        <div>1</div>

        <GameGrid />

        <div>x</div>

        <div>2</div>
        <div>x</div>

        <div>3</div>
        <div>x</div>
      </div>
    </main>
  )
}
