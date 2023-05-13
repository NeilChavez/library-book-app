import { Card } from './Card'

interface Props {
  image?: string
  title?: string
  paragraph?: string
}

export const ActivityCard: React.FC<Props> = ({ image, title, paragraph }) => {
  return <Card image={image} title={title} paragraph={paragraph} />
}
