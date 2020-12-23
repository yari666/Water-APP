(function() {
	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
			this.data = {
				name: "小白巴巴拉拉拉拉"
			};
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {};
		Tpl.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("text", null, this.data.name)
			);
		};

		return Tpl;
	})(Component);
	Tpl.css = {".page": {height: "100%", background: "#fff"}};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
