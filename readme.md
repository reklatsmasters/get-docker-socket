## get-docker-socket
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