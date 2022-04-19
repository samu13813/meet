import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {

    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    // First the event

    test('renders an event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('renders the location of the event', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('renders the summary of the event', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    // More details button

    test('renders the show details button', () => {
        expect(EventWrapper.find('.show-details')).toHaveLength(1);
    });

    test('when show details button is clicked, more details are shown', () => {
        EventWrapper.setState({
            collapsed: true,
        });
        EventWrapper.find('.show-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    test('when hide details button is clicked, less details are shown', () => {
        EventWrapper.setState({
            collapsed: false,
        });
        EventWrapper.find('.show-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

});