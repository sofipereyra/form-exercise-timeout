# Practice Exercise. ✏️

In this exercise, we will start from a previously implemented login form, where the person must enter their email and password.

The instruction of the exercise consists of simulating an asynchronous validation, which in real life would be carried out by comparing the information entered by the person, against the data that is stored on the server.

To do this, we will simulate a response time (until the request to the server is resolved) of three seconds. During this period, we must indicate to the user that the application is "Starting Session".

Likewise, based on the data entered, we will validate if they meet certain pre-established requirements and, furthermore, if they match the user information stored in the database. In the event that they do not match, we must display an error message.

If the data entered is correct, a welcome message should be displayed to the person.