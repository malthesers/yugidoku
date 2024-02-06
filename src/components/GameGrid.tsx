import AnswerBox from './AnswerBox'

export default function GameGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 col-span-3 row-span-3">
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
      <AnswerBox answer="test" />
    </div>
  )
}
