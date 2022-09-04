# cantor-dust-cli
Print the [Cantor Dust](https://en.wikipedia.org/wiki/Cantor_set) Fractal to the console!

## Usage
### Via `npx`:
```
$ npx cantor-dust-cli <n>
$ npx cantor-dust-cli <n> <size>
```

### Via Global Install
```
$ npm install --global cantor-dust-cli
$ cantor-dust-cli <n>
$ cantor-dust-cli <n> <size>
```

### Via Import
```
$ npm install cantor-dust-cli
```
then:
```
const cantor = require('cantor-dust-cli');
console.log(cantor.create(<n>));
console.log(cantor.create(<n>, { size: <number>, character: <character> }));
```
The config params are optional. 
