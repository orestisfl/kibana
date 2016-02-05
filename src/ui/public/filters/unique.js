import _ from 'lodash';
// Filters out all duplicate items in an array
define(function (require) {

  require('ui/modules')
    .get('kibana')
    .filter('unique', function () {
      return function (arr) {
        var list = _.unique(arr);
        return list;
      };
    });
});
