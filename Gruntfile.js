var browserify = require('browserify');
var parcelify = require('parcelify');
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
            	browserifyOptions: {debug:true},
            	preBundleCB: function(b){
            		return parcelify(b,{});
            	}
        	}
        }
    };
    grunt.initConfig(grunt.util._.extend(taskConfig));
};
