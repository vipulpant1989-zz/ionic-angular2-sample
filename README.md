## How to run this application



To create your application use 

### With the Ionic CLI:


```bash
$ sudo npm install -g ionic cordova
$ ionic start myAppName 
```
Then, Select appropriate app from cli to start with.
```bash
❯ tabs ............... ionic-angular A starting project with a simple tabbed int
erface 
  blank .............. ionic-angular A blank starter project 
  sidemenu ........... ionic-angular A starting project with a side menu with na
vigation in the content area 
  super .............. ionic-angular A starting project complete with pre-built 
pages, providers and best practices for Ionic development. 
  conference ......... ionic-angular A project that demonstrates a realworld app
lication 
  tutorial ........... ionic-angular A tutorial based project that goes along wi
th the Ionic documentation 
  aws ................ ionic-angular AWS Mobile Hub Starter 
  
```

Then, to run it, cd into `myAppName` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

To run this application in your local machine use the following step.

```bash
$ git clone repository
$ sudo npm install -g ionic cordova
$ ionic serve -l //this will serve your application in ionic lab: localhost:8100/ionic-lab
```

To add a platform use 

```bash
$ ionic cordova platform add ios// for ios 
$ ionic cordova platform add andriod // for andriod
$ ionic cordova platform add windows // for windows

```
This will add folder to your resources directory naming andriod, windows, ios.

To compile the application to native

```bash
$ ionic cordova run ios
$ ionic cordova run andriod
$ ionic cordova run windows
```

**There is node express server to serve some api calls to run it simple type**

```bash
npm start
```

This will start an express server.


-------------------------
