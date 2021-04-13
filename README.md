# Redfin-Take-Home-Assignment

Redfin Take Home Coding Challenge by Elangeni Yabba

# Overview 
The goal of this is to write a simple command-line program that will print out a list of food trucks, given a source of food truck data from the San Francisco government’s API. Along with your code, readme, and installation instructions, we will also ask you to provide a brief write up discussing your thought process. 
The Task 
# Data 
The San Francisco government’s website has a public data source of food trucks (https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b). The data can be accessed in a number of forms, including JSON, CSV, and XML. How you access the data is up to you, but you can find some useful information about making an API request to this data source here (https://dev.socrata.com/foundry/data.sfgov.org/jjew-r69b). 
# The Problem 
Write a command line program that prints out a list of food trucks that are open at the current date and current time, when the program is being run. So if I run the program at noon on a Friday, I should see a list of all the food trucks that are open then. 

#How to run this program

1. Make sure you have working version of node installed
<br/>
- use node -v to check the version<br/>
- If you have node not installed please install it.<br/>
- Please upgrade your node and npm as well to the latest version from their websites<br/>
- you can also try this command as well to upgrade your node npm-windows-upgrade or npm i -g npm. Please visit their website for more information<br/>
<br/>
2. The API usage is quantified and thus you will need to get the token for heavy usage from API website here
<br/>
3. Make sure you have sudo rights on your machine
<br/>
4. Go to the project directory and run npm link
<br/>
5. Use the command show-open-food-trucks from anywhere in the terminal, you will find result on the terminal.
<br/>
6. he displayed result has pagination involved and thus you will see 10 records in alphabetical order. While there are still records available. The program will ask if you want to see more. Press y for yes and n for no.
<br/>
7. If you want to no longer use this command in your linux terminal, go to project directory and use npm unlink
