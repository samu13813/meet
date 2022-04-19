import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    })

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('render amount of events', () => {
        NumberOfEventsWrapper.setState({ amountOfEvents: 10 });
        expect(NumberOfEventsWrapper.state('amountOfEvents')).toEqual(10);
    });

});