export default function GameGrid() {
  return (
    <div className="grid grid-cols-5 grid-rows-5">
      <div>x</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>x</div>

      <div>1</div>

      <div className="col-span-3 row-span-3">o</div>

      <div>x</div>

      <div>2</div>
      <div>x</div>

      <div>3</div>
      <div>x</div>
    </div>
  )
}
