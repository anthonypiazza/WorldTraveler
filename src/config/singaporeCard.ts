import { CardProps } from 'src/components';
import { CardSize } from 'src/types/Card.type';
import SingaporeImg from 'src/assets/singapore-img.jpg'

export const singaporeCard: CardProps = {
  tag: {
    color: 'international',
    title: 'International',
  },
  image: SingaporeImg,
  callToAction: '3 Spots Left!',
  location: 'Singapore',
  date: 'February 15, 2020',
  description: 'Primum igitur, inquit, sic agam, ut aliquid ex eo delectu.',
  cardSize: CardSize.HALF_WIDTH,
}
