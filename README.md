# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The Commands are:

concert

spotify

movie

dowhat

HOW TO USE LIRI


Step by Step instructions
Open your terminal such as Bash.

Navigate to the folder that contains the liri.js file.

Depending on the command you run, the output will vary.

Example 1: Run the concert command

 node liri.js concert <name of artist or band>
 
Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records.  See screen-shot below:
 
![Screenshot (15)](https://user-images.githubusercontent.com/45401868/56178444-4a8b7300-5fd0-11e9-9e02-52057b219c1d.png)



Example 2: Run the spotifythis command

 node liri.js spotifythis <name of song>
Output: The system will display a list of information associated with the song. It can result in multiple records. 

 ![Screenshot (13)](https://user-images.githubusercontent.com/45401868/56178369-05ffd780-5fd0-11e9-9df2-053d7ce28204.png)




Example 3: Run the movie command

 node liri.js movie <name of movie>
Output: The system will display information associated with the movie. 

 ![Screenshot (11)](https://user-images.githubusercontent.com/45401868/56178279-ba4d2e00-5fcf-11e9-8086-1843c4723ff0.png)




Example 4: Run the dowhat command

 node liri.js dowhat
Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file.

See screen-shot below:

 


Results

TECHNOLOGIES USED
Javascript
Nodejs
Node packages:
Node-Spotify-API
Request
Moment
DotEnv
APIs used:
Bands in Town
OMDB
Git
GitHub
