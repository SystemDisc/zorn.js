'use strict';

var $ = require('jquery-browserify');

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

				if ($.isArray(this.elems))
				{
					for (var i in this.elems)
					{
						var elem = this.elems[i];
						var $elem = $(elem);
						if (elem.value !== undefined)
						{
							$elem.val(newValue);
						}
						else
						{
							$elem.html(newValue);
						}
					}
				}
			}
		});
	}
};

module.exports = watcher;
