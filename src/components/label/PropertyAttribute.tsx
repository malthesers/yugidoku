import { Attribute } from '@/types'
import Image from 'next/image'

interface Props {
  attribute: Attribute
}

export default function PropertyAttribute({ attribute }: Props) {
  return <Image src={`/icons/attributes/${attribute.value}.svg`} width={50} height={50} alt="attribute"></Image>
}
