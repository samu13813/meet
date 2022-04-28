Feature: Show or Hide an events details

Scenario: An event element is collapsed by default.
Given a default city has been searched
When the Show Details button has not been clicked
Then all events will be collapsed

Scenario: User can expand an event to see its details.
Given the user wants to see more details about an event
When the user clicks on the Show Details button
Then the event details are expanded and the user can see more details

Scenario: User can collapse an event to hide its details.
Given the user no longer wants to see more details about an event
When the user clicks on Hide Details button
Then the event details are collapsed and no longer shows further details