mean-ng-phase0.js

https://github.com/nukegold/ngaudio

Feb 18, 2017 - First version

# MEAN-NG Phase 0
Sharing my progress as I develop a MEAN 2 stack framework. 
MEAN Stack 2 using Angular version 2.4.7, webpack 2, Express (no MongoDB yet in this phase).

Includes a development and production AoT build using webpack version 2.
Simple Angular components test include an eager component (i.e. embedded in the bundle), 
and a lazy component (loaded in a separate chunk and called on demand).

## Install
Make sure you have Node.JS and npm installed. \
Copy the project files and change directory to the project location.

```
npm install
```

## Development 
Server build in watch mode. \
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

## License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).