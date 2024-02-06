import AnswerBox from './AnswerBox'

export default function GameGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 col-span-3 row-span-3 gap-2">
      <AnswerBox answer="test" className="rounded-tl-3xl" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" className="rounded-tr-3xl" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" className="rounded-bl-3xl" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" className="rounded-br-3xl" />
    </div>
  )
}
