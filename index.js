'use strict'

var os = require('is-os')

module.exports = socket

function socket() {
  // @link https://github.com/docker/docker/issues/23541#issuecomment-226034044
  if (os.isWindows()) {
    return '//./pipe/docker_engine'
  }

  // @link https://forums.docker.com/t/connecting-via-unix-socket-to-the-docker-daemon/17396/3
  if (os.isMac()) {
    return '/private/var/run/docker.sock'
  }

  return '/var/run/docker.sock'
}