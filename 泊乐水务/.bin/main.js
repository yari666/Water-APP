(function() {
	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {};
		Tpl.prototype.render = function() {
			return apivm.h("view", {class: "page"}, "欢迎光临fafa");
		};

		return Tpl;
	})(Component);
	Tpl.css = {".page": {height: "100%"}};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
