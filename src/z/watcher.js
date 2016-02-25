'use strict';

var watcher = {
	setup: function(obj, val)
	{
		if (val !== null && val !== undefined)
		{
			obj = obj[val] = {};
		}

		obj.val = '';

		Object.defineProperty(obj, 'value', {
			get: function()
			{
				return this.val;
			},
			set: function(newValue)
			{
				this.val = newValue;

				if (Array.isArray(this.elems))
				{
					for (var i in this.elems)
					{
						var elem = this.elems[i];
						if (elem.value !== undefined)
						{
							elem.value = newValue;
						}
						else
						{
							elem.innerHTML = newValue;
						}
					}
				}
			}
		});
	}
};

module.exports = watcher;
