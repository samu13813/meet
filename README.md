FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a User I should be able to show/hide an event so that I can see its details

•	Scenario 1: An event element is collapsed by default <br/>
  o	Given the main page is open <br/>
  When no event has been clicked <br/> 
  Then all events will be collapsed <br/>
  
•	Scenario 2: User can expand an event to see its details <br/>
  o	Given the user wants more details about an event <br/>
  When user clicks on an event <br/>
  Then the event is expanded and User can see its details <br/>
  
•	Scenario 3: User can collapse an event to hide its details <br/>
  o	Given the user no longer wants to see details about an event <br/>
  When the user clicks on an expanded event <br/> 
  Then the event is collapsed and no-longer shows details <br/>

FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I should be able to see a specific number of events and update the amount so that I can see more or less events

•	Scenario 1: When user hasn’t specified a number, 32 is the default number <br/>
o	Given the main page is open <br/>
When nothing has been clicked <br/>
Then the default number of events shown would be 32 <br/>

•	Scenario 2: User can change the number of events they want to see <br/>
o	Given the user wants to see more or less events <br/>
When the number of events is clicked <br/>
Then the User can update how many events he would like to see <br/>

FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I should be able to access the application offline, so that I can use it regardless of my connection

•	Scenario 1: Show cached data when there’s no internet connection <br/>
o	Given the user access the website with no internet connection <br/>
When the user has stored cached data <br/>
Then the previous data will be shown <br/>

•	Scenario 2: Show error when user changes the settings (city, time range) <br/>
o	Given an error occurs <br/>
When the user has no internet connection <br/>
Then the User will still be notified of the error <br/>

FEATURE 5: DATA VISUALIZATION

As a user, I should be able to see charts and data regarding events so that I can get a first glance of the events in the area

•	Scenario 1: Show a chart with the number of upcoming events in each city <br/>
o	Given the user is in the main page <br/>
When a city is chosen <br/>
Then a chart is shown to the user with the upcoming events in that city <br/>





