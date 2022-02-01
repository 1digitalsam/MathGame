# Welcome To Math Monster!

### Become a Dragon Slayer!

![Dragon](https://i.ytimg.com/vi/YSejQBtPGZw/hqdefault.jpg)

## Description

Math Monster is a fun, small math game written in NodeJS that allows a user to slay a Dragon by answering mathematical questions accurately. 

## Getting Started

This small program of 90 lines was built in roughly 10 hours!

Why so long? Because computers are dumb...right?

### What You Will Need?

* VS Code / Code Editor of Choice
* npm install prompt-sync
* Windows 10/Mac OS
* Some Snacks

### Installing

* Clone This Mug! #CLIorDIE!

### WHAT I LEARNED...and hopefully won't forget

![guymeme](https://www.adweek.com/wp-content/uploads/2018/07/confused-guy-meme-content-2018-652x367.jpg.webp)

* Translating languages
  * This game was originally written in Python a few years back, but I used my JS "skills" to bring this to life in JS Land
* Comments are Important! Just don't over use them!
  * Countless times I got stuck, forgot what a piece of code was "Supposed to do" and restarted the whole project. Commenting helped me stay organized and understand the flow of my program
* npm install
  * One line of terminal code, but makes a big difference in streamlining the thought process of going from Python to JS. I installed prompt-sync to receive input. 
  * Python has a built-in "input" function. Would be nice if JS had one...
* Conditionals can get CRAZY confusing bro!
  * Basic if/else statements were fine, but once I started "Nesting" my conditionals, I got lost.
* LOOPS: Can't Live Wit Em, Can't Live Without Em!
  * It amazed me how spacific you have to be with placing your loops. One line off and your program could never ennddddddddddddddddddd.....You get the point!
* Objects are actually really nice!
  * Creating objects saved me lots of time. Its nice to be able to easily access information ("properties" if you want to sound like a Senior Developer for Netflix)
* Functions are Friends, Not Food!
  * I like using functions, I'm pretty sure there are many more areas that I could've used them...but the program works!!!
* "Commiting" My Life To Github
  * Once the program was finished, I ran into some issues getting everything to Github. 
  * When I attempted to add and check the status of my files being pushed I received the Error:
  ```
  On branch master
  nothing to commit, working tree clean
  ```
  I have no clue what that meant, so after lot of Googling/Youtubing I decided to start over. 
  * "git init" creates a hidden folder in your project folder. I deleted the hidden folder and the github repository. Here are my steps to fix this issue:
1. Go to Github.com and create a new repo
2. From your command line, "cd" to your project folder
```
cd myprojectfolder
```
3. Initialize your github repo (this will create a hidden folder)
```
git init
```
Once I initialzed my repo I got the following message:
```
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
```
I read the message (because reading is fundamental) and entered: 
```
git config --global init.defaultBranch main
```
then I entered: 
```
git branch -m main
```
Once that was done, I staged my files by entering:
```
git add .
```
Then I checked the status of those files by entering:
```
git status
```
and got this message
```
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   .DS_Store
	new file:   README.md
	new file:   mathgame.js
```
That is what you want to see!
Next, we have to commit the files: 
```
git commit -m "firstcommit"
```
Once that is completed, you should receive an ouput similar to this: 
```
[main (root-commit) a474f39] firstcommit
 3 files changed, 235 insertions(+)
 create mode 100644 .DS_Store
 create mode 100644 README.md
 create mode 100644 mathgame.js
```
Next, enter this command: 
```
git remote add origin <link to your github repo>
```
Now, its time to Push:
```
git push -u origin main
```
Next, it will ask for your github username and password. Github no longer uses passwords for commits, so you have to generate an access code from your github profile. *MAKE SURE THE REPO BOX IS CHECKED WHEN GENERATING AN ACCESS CODE*
If done correctly, you should receive a similar output
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 4.23 KiB | 4.23 MiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/1digitalsam/MathGame.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```
Last, but not least, run a git status. and BAM! Thats it!
* Don't a sweaty programmer, Have Fun!
  * I found myself getting fustrated when I couldn't figure out why something wasn't working the way I wanted it to. I took lots of breaks, played some PS5, and searched around StackOverflow, but DON'T GIVE UP! 


```
if (programming == "easy") {
  console.log("Everyone would do it!)
} else {
  console.log("You're a Wizard, Harry")
}
```
![Harry](https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/01/harry-potter-and-the-sorcerers-stone-daniel-radcliffe-social.jpg)

## How The Game Is Suppose to Work!

1. Enter your Name
2. Choose an action
    * If you choose "Attack", you will have to answer a math equation.
    * If you get the answer correct, you deal damage to the Dragon. Get the answer wrong, the Dragon deals damage to you
    * If you choose "Heal", you will have to answer an "Advanced" mathematical equation. You can only heal if your health is below 100%
    * If you choose "Exit Game", the Game Ends.
3. Answer Questions Correctly
    * If you answer too many questions incorrectly and your health falls to 0 or below, you lose. If the Dragon health falls to 0 or below, you Win!
  
```
console.log("You Can Do It!")
```

## Want Say You?

Feel free to provide input, report bugs, or make changes! Just try not to break it lol

## If You Made It This Far, Good Job Listening to Aaron!

If you need help, Ask This Guy

* [The Sensei](https://www.linkedin.com/in/mastermndio/)

