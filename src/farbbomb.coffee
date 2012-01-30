util = require 'util'
{ SerialPort } =  require 'serialport'
protocol = require './protocol'
{ floor, abs, sin, cos } = Math

port = new SerialPort "/dev/ttyUSB1",
    baudrate:500000

process.on 'exit', ->
    port.close()


t = 0
wall = off
setInterval ->
    port.write buf = protocol (wall and 'wall' or 'ceiling'),
        t:(t%4)+1
        x:0
        y:0
        r:244
        g:12
        b:12
        w:12
    console.log buf
    #floor(abs(sin(t*0.01)*255))

    #wall = not wall
    t++
, 100

