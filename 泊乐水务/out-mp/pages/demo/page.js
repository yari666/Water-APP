module.exports = function(window, document) {
	var apivm = require('../../common/avm.min')(window, document);
	var avm = apivm;
	var api = apivm.api;
	var Component = apivm.Component;
	var $ = apivm.$;
	(function() {
	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
			this.data = {
				text: "Hello world!"
			};
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {};
		Tpl.prototype.btnAction = function(e) {
			api.alert({
				msg: e.currentTarget.dataset.info
			});
		};
		Tpl.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h(
					"text",
					{class: "text", "data-info": this.data.text, onclick: this.btnAction},
					this.data.text
				)
			);
		};

		return Tpl;
	})(Component);
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();

	window['createApp'] = function() {
		apivm.$_start();
	}
}