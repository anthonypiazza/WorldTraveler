import { CardProps } from 'src/components';
import { CardSize } from 'src/types/Card.type';
import LondonImg from 'src/assets/london-img.jpg'

export const londonCard: CardProps = {
  tag: {
    color: 'international',
    title: 'International',
  },
  image: LondonImg,
  callToAction: 'Register Now',
  location: 'London, England',
  date: 'April 15, 2020',
  description: 'Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio quaerimus igitur, quid et caritatem, quae sine causa? quae fuerit causa, mox videro; interea hoc epicurus in culpa, qui blanditiis praesentium voluptatum adipiscendarum causa aut officiis debitis aut fugit, sed uti oratione perpetua.',
  cardSize: CardSize.FULL_WIDTH,
}
