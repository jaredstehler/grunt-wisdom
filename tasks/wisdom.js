module.exports = function(grunt) {
  grunt.registerTask('wisdom', 'Wise Quotes', function() {
    var defaults = require('./wisdom.json');
    
    var wiseness = grunt.config('wisdom') || defaults;
    var index = Math.floor(Math.random() * wiseness.length);
    
    grunt.log.writeln(wiseness[index]);
  });
};
