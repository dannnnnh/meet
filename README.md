A severless, progressive web application with React using a test-driven development technique. The application uses the google calender API to fetch upcoming events.

**FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

#Scenario 1: An event element is collapsed by default

Given a user is viewing an event element
When the user opens the app
Then the event details should be collapsed by default

Userstory:
As a user, I should be able to view an event element with collapsed details when I open the app, so that I can quickly scan events without being overwhelmed by too much information.

#Scenario 2: User can expand an event to see its details

Given a user is viewing an event element with collapsed details
When the user clicks on the event element
Then the event details should be expanded

Userstory:
As a user, I should be able to expand an event element to see its details when I click on it, so that I can get more information about the event if I want to.

#Scenario 3: User can collapse an event to hide its details

Given a user is viewing an event element with expanded details
When the user clicks on the event element
Then the event details should be collapsed

userstory:
As a user, I should be able to collapse an event element to hide its details when I click on it, so that I can quickly go back to scanning events without being distracted by the details.

##FEATURE 3: SPECIFY NUMBER OF EVENTS

#Scenario 1: When user hasn’t specified a number, 32 is the default number

Given a user opens the app
When the user hasn’t specified the number of events
Then the default number of events displayed should be 32

userstory:
As a user, I should be able to see 32 events by default when I open the app without specifying a number, so that I can quickly browse a significant number of events.

#Scenario 2: User can change the number of events they want to see

Given a user has opened the app and specified the number of events they want to see
When the user changes the number of events they want to see
Then the app should display the specified number of events

userstory:
As a user, I should be able to change the number of events I want to see so that I can see more or fewer events based on my preferences and needs.

##FEATURE 4: USE THE APP WHEN OFFLINE

#Scenario 1: Show cached data when there’s no internet connection

Given a user has used the app with an internet connection
When the user loses the internet connection
Then the app should display cached data

userstory:
As a user, I should be able to view cached data when I lose my internet connection so that I can continue to browse events even when I don't have internet access.

#Scenario 2: Show error when user changes the settings (city, time range)

Given a user has no internet connection
When the user attempts to change the settings (city, time range)
Then the app should display an error message

userstory:
As a user, I should be notified with an error message when I attempt to change the settings (city, time range) without an internet connection so that I don't waste time attempting to make changes that cannot be made.

##FEATURE 5: DATA VISUALIZATION

Given a user has selected the data visualization feature
When the app generates the data visualization
Then a chart with the number of upcoming events in each city should be displayed

userstory:
As a user, I should be able to view a chart with the number of upcoming events in each city so that I can quickly see which cities have more events and which ones have fewer events. This information can help me plan my event attendance or travel better.














