module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'entry.js',
                dest: 'bundle.js'
            }
        }
    };
    grunt.initConfig(grunt.util._.extend(taskConfig));
};
