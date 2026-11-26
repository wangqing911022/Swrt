'use strict';
'require view';
'require form';
'require uci';

return view.extend({
	render: function() {
		var m, s, o;

		m = new form.Map('homebox', _('HomeBox'),
			_('Self-hosted network speed test and benchmark server.'));

		s = m.section(form.NamedSection, 'main', 'homebox', _('Service settings'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enabled', _('Enable'));
		o.default = '1';
		o.rmempty = false;

		o = s.option(form.Value, 'host', _('Listen address'));
		o.default = '0.0.0.0';
		o.datatype = 'ipaddr';
		o.rmempty = false;

		o = s.option(form.Value, 'port', _('Port'));
		o.default = '3300';
		o.datatype = 'port';
		o.rmempty = false;

		o = s.option(form.Button, '_open', _('Web interface'));
		o.inputtitle = _('Open HomeBox');
		o.inputstyle = 'apply';
		o.onclick = function() {
			var host = uci.get('homebox', 'main', 'host') || '0.0.0.0';
			var port = uci.get('homebox', 'main', 'port') || '3300';

			if (host === '0.0.0.0' || host === '::' || host === '')
				host = window.location.hostname;

			window.open('http://' + host + ':' + port + '/', '_blank', 'noopener');
			return false;
		};

		return m.render();
	}
});
