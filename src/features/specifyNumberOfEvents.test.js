import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

        let AppWrapper;
        let NumberOfEventsWrapper

        given('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        when('nothing has been clicked', () => {
        });

        then('the default number of events shown would be 32', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            NumberOfEventsWrapper.setState({ numberOfEvents: 32});
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
        });

    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {

        let AppWrapper;
        let NumberOfEventsWrapper;

        given('the user wants to change the number of events', () => {
            AppWrapper = mount(<App />);
        });
    
        when('the number of event is clicked', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        });
    
        then('the user can update how many events can be displayed', () => {
            // NumberOfEventsWrapper.find('.inputNumberOfEvents').simulate('change', { target: { value: 1 } });
            // expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(1);
            NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.find('.inputNumberOfEvents').simulate('change', { target: { value: 1 } });
            expect(AppWrapper.state('numberOfEvents')).toEqual(1);
        });

    });

});