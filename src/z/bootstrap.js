'use strict';

var $ = require('jquery-browserify');

module.exports = function()
{
	zorn.$rootElem = $('[z-app]');
	if (zorn.$rootElem.length === 0)
	{
		zorn.$rootElem = $('body');
	}
	zorn.$rootElem = zorn.$rootElem[0];
	zorn.$rootElem.$scope = {};

	require('../zBind');
};
