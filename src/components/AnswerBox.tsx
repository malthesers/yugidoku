interface Props {
  answer: string
  className?: string
}

export default function AnswerBox({ answer, className }: Props) {
  return (
    <div className={className + ' size-full grid place-content-center bg-zinc-900'}>
      <p>{answer}</p>
    </div>
  )
}
