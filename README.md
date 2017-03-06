mean-ng-phase0.js

https://github.com/nukegold/mean-ng-phase0

Feb 18, 2017 - First version  
March 6, 2017 - Updated all modules to latest version (Angular 2.4.9) + fixed webpack production settings  

# MEAN-NG Phase 0
Sharing my progress as I develop a MEAN 2 stack framework. 
MEAN Stack 2 using Angular version 2.4.7, webpack 2, Express (no MongoDB yet in this phase).

Includes a development and production AoT build using webpack version 2.
Simple Angular components test include an eager component (i.e. embedded in the bundle), 
and a lazy component (loaded in a separate chunk and called on demand).

An online post describes this project:

#### Part 1:
https://medium.com/@nukegold/a-mean-full-stack-machine-part-1-bd7c41387497#.h5n2ic2vd
#### Part 2:
https://medium.com/@nukegold/a-mean-full-stack-machine-part-2-586ee92b4bcf#.kxar12onx

## Install
Make sure you have Node.JS and npm installed. 
Copy the project files and change directory to the project location.

```
npm install
```

## Development 
Server build in watch mode. 
Browse to localhost:3000 to test.
```
npm run build
npm start
```
## Production 
Start for local testing of the production bundle.
```
npm run build:prod
npm start
```
Browse to http://localhost:3000

## License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).
