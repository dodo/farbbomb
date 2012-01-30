(function() {
  var escape;

  escape = function(char) {
    switch (char) {
      case 35:
        return [101, 1];
      case 66:
        return [101, 2];
      case 101:
        return [101, 3];
      case 102:
        return [101, 4];
      default:
        return [char];
    }
  };

  module.exports = function(target, data) {
    var p, res;
    res = [66];
    p = function(char) {
      return res = res.concat(escape(char));
    };
    if (target === 'ceiling') {
      switch (data.t) {
        case 1:
          p(240);
          break;
        case 2:
          p(241);
          break;
        case 3:
          p(242);
          break;
        case 4:
          p(243);
          break;
        case 'all':
          p(255);
      }
    } else if (target === 'wall') {
      p(data.x);
      p(data.y);
    }
    p(data.r);
    p(data.g);
    p(data.b);
    if (target === 'ceiling') p(data.w);
    return new Buffer(res);
  };

}).call(this);
