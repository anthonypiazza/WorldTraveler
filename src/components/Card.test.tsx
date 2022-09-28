import React from 'react';
import { shallow } from 'enzyme'
import { Card, CardImage, CardText } from 'src/components';
import { londonCard } from 'src/config';

describe('Card', () => {
  const renderCard = (customProps = {}) => {
    const props = {
      ...londonCard,
      ...customProps,
    }
    return shallow(<Card {...props} />);
  }
  it('renders CardImage component with correct data', () => {
    const output = renderCard()
    const cardImage = output.find(CardImage)
    expect(cardImage).toHaveLength(1)
    expect(cardImage.prop('tag')).toEqual(londonCard.tag)
    expect(cardImage.prop('image')).toEqual(londonCard.image)
    expect(cardImage.prop('location')).toEqual(londonCard.location)
  })

  it('renders CardText component with correct data', () => {
    const output = renderCard()
    const cardText = output.find(CardText)
    expect(cardText).toHaveLength(1)
    expect(cardText.prop('date')).toEqual(londonCard.date)
    expect(cardText.prop('description')).toEqual(londonCard.description)
    expect(cardText.prop('callToAction')).toEqual(londonCard.callToAction)
    expect(cardText.prop('location')).toEqual(londonCard.location)
  })
});
