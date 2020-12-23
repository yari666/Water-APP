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
			this.open();
		};
		Tpl.prototype.open = function() {
			// 打开只有tabBar的页面：
			api.openTabLayout({
				name: "tabLayout",
				// url: "widget://html/tabLayout.html",
				hideTabBar: false,
				slidBackEnabled: false,
				reload: true,
				// hideNavigationBar: true,
				navigationBar: {
					background: "#ff6600",
					hideBackButton: true
				},

				tabBar: {
					selectedColor: "#45C01A",
					list: [
						{
							text: "可视地图",
							iconPath: "widget://image/bottombtn0101.png",
							selectedIconPath: "widget://image/bottombtn0102.png"
						},

						{
							text: "首页",
							iconPath: "widget://image/bottombtn0201.png",
							selectedIconPath: "widget://image/bottombtn0202.png"
						},

						{
							text: "我的",
							iconPath: "widget://image/bottombtn0301.png",
							selectedIconPath: "widget://image/bottombtn0302.png"
						}
					],

					frames: [
						{
							name: "page1",
							title: "可视地图",
							url: "widget://pages/home/home.stml"
						},

						{
							name: "page2",
							title: "首页",
							url: "widget://html/frame1.html"
						},

						{
							name: "page3",
							title: "我的",
							url: "widget://html/frame2.html"
						}
					]
				}
			});
		};
		Tpl.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("text", null, "欢迎光临fffsfdafa")
			);
		};

		return Tpl;
	})(Component);
	Tpl.css = {".page": {color: "#333", height: "100%", backgroundColor: "red"}};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
