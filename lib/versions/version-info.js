'use strict';

var exports = module.exports = function(grunt)
{
	var pkg = grunt.file.readJSON('package.json');

	return {
		full: pkg.version,
		major: pkg.version.split('.')[0],
		minor: pkg.version.split('.')[1],
		build: pkg.version.split('.')[2],
	};
}
