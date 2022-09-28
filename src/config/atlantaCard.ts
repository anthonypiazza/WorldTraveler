import { CardSize } from 'src/types/Card.type';
import { CardProps } from 'src/components';
import AtlantaImg from 'src/assets/atlanta-img.png'

export const atlantaCard: CardProps = {
  tag: {
    color: 'domestic',
    title: 'Domestic',
  },
  image: AtlantaImg,
  callToAction: 'Register Now',
  location: 'Atlanta, GA',
  date: 'March 10, 2019',
  description: 'Torquatos nostros? quos tu paulo ante cum soluta nobis est.',
  cardSize: CardSize.HALF_WIDTH,
}
