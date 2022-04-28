import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from "../mock-data";
import Event from "../Event";


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {

        let AppWrapper;

        given('a default city has been searched', () => {

            AppWrapper = mount(<App />);

        });
    
        when('the Show Details button has not been clicked', () => {
        });
    
        then('all events will be collapsed', () => {
        });
    
    });
    
    test('User can expand an event to see its details.', ({ given, when, then }) => {

        given('the user wants to see more details about an event', () => {
        });
        
        let EventWrapper;
         
        when('the user clicks on the Show Details button', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />)
            EventWrapper.setState({
                collapsed: true,
            });
            EventWrapper.find('.show-details').simulate('click');
        });
    
        then('the event details are expanded and the user can see more details', () => {
            EventWrapper.update();
            expect(EventWrapper.state('collapsed')).toBe(false);
        });

    });
    
    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
       
        let EventWrapper;

        given('the user no longer wants to see more details about an event', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />)
            EventWrapper.setState({
                collapsed: false,
            });
        });
    
        when('the user clicks on Hide Details button', () => {
            EventWrapper.find('.show-details').simulate('click');
        });
    
        then('the event details are collapsed and no longer shows further details', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);
        });

    });

});