import React from 'react';
import { shallow } from 'enzyme'
import { CardText } from 'src/components';
import { londonCard } from 'src/config';

describe('CardText', () => {
  const renderCardText = (customProps = {}) => {
    const props = {
      callToAction: londonCard.callToAction,
      location: londonCard.location,
      date: londonCard.date,
      description: londonCard.description,
      ...customProps,
    }
    return shallow(<CardText {...props} />);
  }
  it('renders button component with correct data', () => {
    const output = renderCardText()
    const ctaButton = output.find('button')
    expect(ctaButton).toHaveLength(1)
    expect(ctaButton.text()).toEqual(londonCard.callToAction)
  })

  it('renders location with correct text', () => {
    const output = renderCardText()
    const location = output.find('h2')
    expect(location).toHaveLength(1)
    expect(location.text()).toEqual(londonCard.location)
  })

  it('renders date with correct text', () => {
    const output = renderCardText()
    const date = output.find('h3')
    expect(date).toHaveLength(1)
    expect(date.text()).toEqual(londonCard.date)
  })

  it('renders description with correct text', () => {
    const output = renderCardText()
    const description = output.find('p')
    expect(description).toHaveLength(1)
    expect(description.text()).toEqual(londonCard.description)
  })
});
