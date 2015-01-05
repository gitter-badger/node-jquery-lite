// Generated by CoffeeScript 1.8.0
(function() {
  $.parseTime = function(param) {
    var trans;
    trans = function(t) {
      var dayAgo, dt, dtNow, hrAgo, hrMin, longAgo, longLongAgo, minAgo, secAgo, ts, tsDistance, tsNow;
      dt = new Date(t);
      ts = dt.getTime();
      dtNow = new Date();
      tsNow = dtNow.getTime();
      tsDistance = tsNow - ts;
      hrMin = dt.getHours() + '时' + (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes() + '分';
      longAgo = (dt.getMonth() + 1) + '月' + dt.getDate() + '日(星期' + ['日', '一', '二', '三', '四', '五', '六'][dt.getDay()] + ') ' + hrMin;
      longLongAgo = dt.getFullYear() + '年' + longAgo;
      if (tsDistance < 0) {
        return '刚刚';
      } else {
        if ((tsDistance / 1000 / 60 / 60 / 24 / 365) | 0 > 0) {
          return longLongAgo;
        } else {
          if ((dayAgo = tsDistance / 1000 / 60 / 60 / 24) > 3) {
            if (dt.getFullYear() !== dtNow.getFullYear()) {
              return longLongAgo;
            } else {
              return longAgo;
            }
          } else {
            if ((dayAgo = (dtNow.getDay() - dt.getDay() + 7) % 7) > 2) {
              return longAgo;
            } else {
              if (dayAgo > 1) {
                return '前天 ' + hrMin;
              } else {
                if ((hrAgo = tsDistance / 1000 / 60 / 60) > 12) {
                  return (dt.getDay() !== dtNow.getDay() ? '昨天 ' : '今天 ') + hrMin;
                } else {
                  if ((hrAgo = (tsDistance / 1000 / 60 / 60 % 60) | 0) > 0) {
                    return hrAgo + '小时前';
                  } else {
                    if ((minAgo = (tsDistance / 1000 / 60 % 60) | 0) > 0) {
                      return minAgo + '分钟前';
                    } else {
                      if ((secAgo = (tsDistance / 1000 % 60) | 0) > 0) {
                        return secAgo + '秒前';
                      } else {
                        return '刚刚';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    return trans($.timeStamp(param));
  };

  $.parseString = function(data) {
    var d, e;
    switch ($.type(d = data)) {
      case 'string':
        return d;
      case 'number':
        return d.toString();
      case 'array':
        return (JSON.stringify({
          _obj: d
        })).replace(/\{(.*)\}/, '$1').replace(/"_obj":/, '');
      case 'object':
        return JSON.stringify(d);
      case 'boolean':
        return d.toString();
      case 'undefined':
        return 'undefined';
      case 'null':
        return 'null';
      default:
        try {
          return d.toString();
        } catch (_error) {
          e = _error;
          return '';
        }
    }
  };

  $.parsePts = function(number) {
    var n;
    if ((n = (number || 0) | 0) >= 1e5) {
      return (((n * 0.001) | 0) / 10) + '万';
    } else {
      return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
  };

  $.parseJson = function(data) {
    var d, f;
    f = function(p) {
      var e, r;
      try {
        r = eval("(" + p + ")");
        switch ($.type(r)) {
          case 'object':
          case 'array':
            return r;
          default:
            return null;
        }
      } catch (_error) {
        e = _error;
        return null;
      }
    };
    switch ($.type(d = data)) {
      case 'string':
        return f(d);
      case 'object':
        return d;
      default:
        return null;
    }
  };

}).call(this);