import React from 'react';
import { shallow } from 'enzyme'
import { CardTag } from 'src/components'
import { londonCard } from 'src/config'

describe('CardTag', () => {
  const renderCardTag = (customProps = {}) => {
    const props = {
      color: londonCard.tag.color,
      title: londonCard.tag.title,
      ...customProps,
    }
    return shallow(<CardTag {...props} />);
  }

  it('renders correct tag color', () => {
    const output = renderCardTag()
    const color = output.find('div')
    expect(color).toHaveLength(1)
    expect(color.prop('aria-label')).toEqual(`${londonCard.tag.title} tag`)
  })

  it('renders correct tag title', () => {
    const output = renderCardTag()
    const title = output.find('h4')
    expect(title).toHaveLength(1)
    expect(title.text()).toEqual(londonCard.tag.title)
  })
});
