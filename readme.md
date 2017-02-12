## get-docker-socket [![npm](https://img.shields.io/npm/v/get-docker-socket.svg)](https://npmjs.org/package/get-docker-socket) [![license](https://img.shields.io/npm/l/get-docker-socket.svg)](https://npmjs.org/package/get-docker-socket) [![downloads](https://img.shields.io/npm/dm/get-docker-socket.svg)](https://npmjs.org/package/get-docker-socket)
A cross-platform way to get path to docker socket

## Example

```js
const socketPath = require('get-docker-socket')()
const Docker = require('dockerode')

const docker = new Docker({socketPath})

docker.listImages(/*...*/)
```

## License

MIT, 2017 (c) Dmitry Tsvettsikh