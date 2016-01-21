'use strict';

var dataBind = function(e)
{
	this.data.$scope.value = this.value;
};

var reservedNames = ['value', 'val'];

console.log(document.querySelectorAll('[z-bind]'));

Array.prototype.forEach.call(document.querySelectorAll('[z-bind]'), function(elem)
{
	elem.addEventListener('input', dataBind);

	var objParts = elem.getAttribute('z-bind').split('.');
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

	elem.data.$scope = obj;

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
