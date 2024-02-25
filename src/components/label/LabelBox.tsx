import { Property } from '@/types'
import PropertyAttribute from './PropertyAttribute'

interface Props {
  property: Property
}

export default function LabelBox({ property }: Props) {
  return (
    <div className="size-full grid place-content-center">
      <p>{property.value}</p>
      {/* {property.name === 'Attribute' && <PropertyAttribute attribute={property} />} */}
    </div>
  )
}
