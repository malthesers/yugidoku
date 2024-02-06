interface Props {
  label: string
}

export default function LabelBox({ label }: Props) {
  return (
    <div className="size-full grid place-content-center">
      <p>{label}</p>
    </div>
  )
}
