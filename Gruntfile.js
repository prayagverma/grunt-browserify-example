var browserify = require('browserify');
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'entry.js',
                dest: 'bundle.js'
            },
            options: {
            	plugin:['parcelify']
        	}
        }
    };
    grunt.initConfig(grunt.util._.extend(taskConfig));
};
