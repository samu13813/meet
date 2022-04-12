FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a User I should be able to show/hide an event so that I can see its details

•	Scenario 1: An event element is collapsed by default
  o	Given the main page is open
  When no event has been clicked
  Then all events will be collapsed
  
•	Scenario 2: User can expand an event to see its details
  o	Given the user wants more details about an event
  When user clicks on an event
  Then the event is expanded and User can see its details
  
•	Scenario 3: User can collapse an event to hide its details
  o	Given the user no longer wants to see details about an event
  When the user clicks on an expanded event
  Then the event is collapsed and no-longer shows details 

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I should be able to see a specific number of events and update the amount so that I can see more or less events
•	Scenario 1: When user hasn’t specified a number, 32 is the default number
o	Given the main page is open
When nothing has been clicked
Then the default number of events shown would be 32
•	Scenario 2: User can change the number of events they want to see
o	Given the user wants to see more or less events
When the number of events is clicked
Then the User can update how many events he would like to see






FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I should be able to access the application offline, so that I can use it regardless of my connection
•	Scenario 1: Show cached data when there’s no internet connection
o	Given the user access the website with no internet connection
When the user has stored cached data
Then the previous data will be shown
•	Scenario 2: Show error when user changes the settings (city, time range)
o	Given an error occurs 
When the user has no internet connection
Then the User will still be notified of the error

FEATURE 5: DATA VISUALIZATION
As a user, I should be able to see charts and data regarding events so that I can get a first glance of the events in the area
•	Scenario 1: Show a chart with the number of upcoming events in each city
o	Given the user is in the main page
When a city is chosen
Then a chart is shown to the user with the upcoming events in that city





