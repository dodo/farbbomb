util = require 'util'
util.orginspect = util.inspect
util.inspect = require('eyes').inspector(stream: null, hexy:{format:'twos', numbering:'none', annotate:'none'})
