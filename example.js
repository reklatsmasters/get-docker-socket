'use strict'

const socketPath = require('./')()
const Docker = require('dockerode')

const docker = new Docker({socketPath})

docker.listImages((err, images) => {
  if (err) {
    throw err
  }

  console.log(images)
})