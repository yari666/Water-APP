(function() {
	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {
			//like created
			var map = api.require("bMap");
			map.initMapSDK(function(ret) {
				if (ret.status) {
					alert("地图初始化成功，可以从百度地图服务器检索信息了！");
				}
			});
		};
		Tpl.prototype.render = function() {
			return apivm.h("view", {class: "page"}, " fafa");
		};

		return Tpl;
	})(Component);
	Tpl.css = {".page": {height: "100%"}};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
