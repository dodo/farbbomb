(function() {
  var SerialPort, abs, cos, floor, port, protocol, sin, t, util, wall;

  require('./eyes');

  util = require('util');

  SerialPort = require('serialport').SerialPort;

  protocol = require('./protocol');

  floor = Math.floor, abs = Math.abs, sin = Math.sin, cos = Math.cos;

  port = new SerialPort("/dev/ttyUSB1", {
    baudrate: 500000
  });

  process.on('exit', function() {
    return port.close();
  });

  t = 0;

  wall = false;

  setInterval(function() {
    var buf, w;
    port.write(buf = protocol(wall && 'wall' || 'ceiling', {
      t: 'all',
      x: 0,
      y: 0,
      r: 244,
      g: 0,
      b: 0,
      w: 0
    }));
    w = "" + util.inspect(buf);
    w = w.slice(0, (w.length - 10) + 1 || 9e9);
    console.log(w);
    return t++;
  }, 10);

}).call(this);
