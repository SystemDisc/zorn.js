'use strict';

var watcher = {
	setup: function(obj, val)
	{
		if (val !== null && val !== undefined)
		{
			obj = obj[val] = {};
		}

		obj.val = null;

		var handler = {
			get: function(target, name)
			{
				console.log(name);
				if(name !== 'value')
				{
					return target[name];
				}
				return target.val;
			},
			set: function(target, name, value)
			{
				console.log(name, value);
				if(name !== 'value')
				{
					target[name] = value;
					return true;
				}
				target.val = value;

				if (target.nodeType === 1)
				{
					target.value = value;
					target = target.data.$scope;
				}

				if (target.elems !== undefined && Array.isArray(target.elems))
				{
					for (var i in target.elems)
					{
						var elem = target.elems[i];
						if (elem.value !== undefined)
						{
							elem.value = value;
						}
						else
						{
							elem.innerHTML = value;
						}
					}
				}
				return true;
			}
		};
		return new Proxy(obj, handler);
	}
};

module.exports = watcher;
