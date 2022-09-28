import React from 'react';
import { shallow } from 'enzyme'
import { CardTag, CardImage } from 'src/components';
import { londonCard } from 'src/config';

describe('CardImage', () => {
  const renderCardImage = (customProps = {}) => {
    const props = {
      tag: londonCard.tag,
      image: londonCard.image,
      location: londonCard.location,
      ...customProps,
    }
    return shallow(<CardImage {...props} />);
  }
  it('renders CardTag component with correct data', () => {
    const output = renderCardImage()
    const cardTag = output.find(CardTag)
    expect(cardTag).toHaveLength(1)
    expect(cardTag.prop('color')).toEqual(londonCard.tag.color)
    expect(cardTag.prop('title')).toEqual(londonCard.tag.title)
  })

  it('renders img tag with correct data', () => {
    const output = renderCardImage()
    const img = output.find('img')
    expect(img).toHaveLength(1)
    expect(img.prop('src')).toEqual(londonCard.image)
    expect(img.prop('alt')).toEqual(`${londonCard.location} event`)
  })
});
