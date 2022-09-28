import React from 'react';
import { shallow } from 'enzyme'
import App from 'src/App';
import { Card } from 'src/components/Card';
import { atlantaCard, londonCard, singaporeCard } from 'src/config';

describe('App', () => {
  const renderApp = () => shallow(<App />);

  it('renders header with correct text', () => {
    const output = renderApp()
    expect(output.find('header')).toHaveLength(1)
    expect(output.find('header').text()).toEqual('World Traveler')
  })

  describe('Card components', () => {
    it('renders 3 instances', () => {
      const output = renderApp()
      expect(output.find(Card)).toHaveLength(3)
    })
    it('passes correct data to each Card', () => {
      const output = renderApp()
      expect(output.find(Card).at(0).props()).toEqual(londonCard)
      expect(output.find(Card).at(1).props()).toEqual(atlantaCard)
      expect(output.find(Card).at(2).props()).toEqual(singaporeCard)
    })
  })
});
