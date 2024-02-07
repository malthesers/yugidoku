import { Property } from '@/types'

interface Props {
  property: Property
}

export default function LabelBox({ property }: Props) {
  return (
    <div className="size-full grid place-content-center">
      <p>{property.value}</p>
    </div>
  )
}
