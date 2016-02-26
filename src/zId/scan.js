'use strict';

module.exports = new Promise(function(resolve, reject)
{
	setTimeout(function()
	{
		Array.prototype.forEach.call(document.querySelectorAll('[z-id]'), function(elem)
		{
			if (zorn.$rootElem.$ids[elem.getAttribute('z-id')] === undefined)
			{
				zorn.$rootElem.$ids[elem.getAttribute('z-id')] = elem;
			}
		});

		resolve();
	});
});
