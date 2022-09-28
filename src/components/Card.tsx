import React from 'react'
import { CardSize, Tag } from 'src/types/Card.type';
import { CardImage, CardText } from 'src/components';

export interface CardProps {
    tag: Tag
    image: string
    callToAction: string
    location: string
    date: string
    description: string
    cardSize: CardSize
}

export const Card = ({
  tag,
  image,
  callToAction,
  location,
  date,
  description,
  cardSize,
}: CardProps) => (
  <article className={`card ${cardSize === CardSize.HALF_WIDTH ? 'card--half-width' : 'card--full-width'}`}>
    <CardImage tag={tag} image={image} location={location} />
    <CardText date={date} description={description} callToAction={callToAction} location={location} />
  </article>
)
