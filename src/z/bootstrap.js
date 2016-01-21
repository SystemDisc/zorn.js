'use strict';

module.exports = function()
{
	zorn.$rootElem = document.querySelectorAll('[z-app]');
	if (zorn.$rootElem.length === 0)
	{
		zorn.$rootElem = document.querySelectorAll('body');
	}
	zorn.$rootElem = zorn.$rootElem[0];
	zorn.$rootElem.$scope = {};

	require('../zBind');
	require('../zView');
};
