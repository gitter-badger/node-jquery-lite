// Generated by CoffeeScript 1.8.0
(function() {
  var a, _i, _len, _ref;

  global.$ = {};

  _ref = ['error', 'basic', 'parse', 'ajax', 'promise', 'etc'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    a = _ref[_i];
    require('./lib/' + a);
  }

  $.version = '0.1.0';

  $.st = $.now();

  $.env = (process.env.NODE_ENV || 'production').toLowerCase();

  $.debug = $.env === 'development' ? true : false;

}).call(this);