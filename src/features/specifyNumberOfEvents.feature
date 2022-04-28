Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user opens the app
When nothing has been clicked
Then the default number of events shown would be 32

Scenario: User can change the number of events they want to see
Given the user wants to change the number of events
When the number of event is clicked
Then the user can update how many events can be displayed
