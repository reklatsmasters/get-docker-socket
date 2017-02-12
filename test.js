'use strict'

var test = require('tape')
var socketPath = require('./')()
var Docker = require('dockerode')

test('should work', function (t) {
  var docker = new Docker({socketPath: socketPath})

  docker.listImages(function(err, images) {
    if (err) {
      return t.error(err)
    }

    console.log(images)

    t.pass('work')
    t.end()
  })
})
