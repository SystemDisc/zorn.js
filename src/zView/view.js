'use strict';

var stateChange = function (e)
{
	console.log(e);
	e.preventDefault();
};

var hrefClick = function (e)
{
	if (e.target.tagName === 'A')
	{
		e.preventDefault();
		window.history.pushState({}, document.title, e.target.href);
	}
};

window.addEventListener('popstate', stateChange);
document.addEventListener('click', hrefClick);
