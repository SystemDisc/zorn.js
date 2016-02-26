'use strict';

module.exports = function()
{
	require('../zBind')
		.then(function() { return require('../zId'); });
};
