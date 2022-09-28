import React from 'react'
import { Tag } from 'src/types/Card.type';
import { CardTag } from 'src/components/CardTag';

interface CardImageProps {
  tag: Tag,
  image: string
  location: string
}

export const CardImage = ({
  tag,
  image,
  location,
}: CardImageProps) => (
  <section className="container container--image">
    <CardTag color={tag.color} title={tag.title} />
    <img src={image} alt={`${location} event`} className="location-image" />
  </section>
)
