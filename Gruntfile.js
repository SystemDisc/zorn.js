'use strict';

module.exports = function(grunt)
{
	var versionInfo = new require('./lib/versions/version-info')(grunt);

	require('load-grunt-tasks')(grunt);

	var Z_VERSION = versionInfo;
	var dist = 'zorn-'+ Z_VERSION.full;

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		Z_VERSION: Z_VERSION,

		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				browserify: true,
				browser: true,
				devel: true,
				globals: {
					zorn: true
				}
			}
		},

		browserify: {
			dist: {
				files: {
					'build/zorn.js': ['src/**/*.js']
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['default'],
				options: {
					spawn: false,
				},
			},
		},

		clean: {
			build: ['build/*']
		}
	});

	grunt.registerTask('test', ['jshint']);

	grunt.registerTask('build', ['browserify']);

	grunt.registerTask('default', ['clean', 'test', 'build']);
};
