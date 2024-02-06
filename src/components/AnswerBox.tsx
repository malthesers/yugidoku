interface Props {
  answer: string
}

export default function AnswerBox({ answer }: Props) {
  return (
    <div className="size-full grid place-content-center">
      <p>{answer}</p>
    </div>
  )
}
