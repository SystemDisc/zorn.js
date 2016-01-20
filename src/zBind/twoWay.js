'use strict';

var $ = require('jquery-browserify');

var dataBind = function(e)
{
	var $this = $(this);
	var data = $this.data();

	data.$scope.value = $this.val();
};

var reservedNames = ['value', 'val'];

$('[z-bind]').each(function()
{
	var $this = $(this);
	$this.bind('input', dataBind);

	var objParts = $this.attr('z-bind').split('.');
	var obj = zorn.$rootElem.$scope;
	for (var i in objParts)
	{
		var name = objParts[i];
		var index;
		if ((index = reservedNames.indexOf(name)) !== -1)
		{
			throw Error('You cannot use "' + reservedNames[index] + '" as a property or object name');
		}

		if (obj[name] === undefined)
		{
			obj = obj[name] = {};
		}
		else
		{
			obj = obj[name];
		}
	}

	if (obj.value === undefined)
	{
		zorn.watcher.setup(obj);
	}

	var data = $this.data();
	data.$scope = obj;

	if (obj.elems === undefined)
	{
		obj.elems = [this];
	}
	else
	{
		if (obj.elems.indexOf(this) === -1)
		{
			obj.elems.push(this);
		}
	}
});
