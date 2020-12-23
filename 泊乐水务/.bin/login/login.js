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
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h(
					"view",
					{class: "logo"},
					apivm.h("image", {class: "image", src: "../../image/logo.png"})
				),

				apivm.h(
					"view",
					{class: "login"},

					apivm.h(
						"view",
						{class: "username"},
						apivm.h("view", {class: "icon"}),
						apivm.h("input", {
							placeholder: "手机号",
							class: "input",
							"keyboard-type": "number"
						})
					),

					apivm.h(
						"view",
						{class: "password"},
						apivm.h("view", {class: "icon"}),
						apivm.h("input", {type: "password", class: "input", placeholder: "密码"})
					),

					apivm.h("view", {class: "submit"}, "登录")
				)
			);
		};

		return Tpl;
	})(Component);
	Tpl.css = {
		".page": {
			height: "100%",
			background: "url(../../image/bg_login.png) bottom center no-repeat",
			backgroundSize: "contain",
			color: "#6b6b6b"
		},
		".image": {width: "112px", margin: "30% auto 10%"},
		".username,\n.password": {
			position: "relative",
			margin: "0 auto",
			width: "75%",
			height: "40px",
			marginTop: "20px"
		},
		".input": {
			width: "100%",
			border: "none",
			borderBottom: "1px solid #cecece",
			paddingLeft: "30px",
			boxSizing: "border-box",
			fontSize: "14px",
			color: "#6b6b6b"
		},
		".icon": {width: "20px", height: "20px", position: "absolute", top: "5px"},
		".username .icon": {
			background: "url(../../image/icon_username.png) center no-repeat",
			backgroundSize: "cover"
		},
		".password .icon": {
			background: "url(../../image/icon_password.png) center no-repeat",
			backgroundSize: "cover"
		},
		".submit": {
			margin: "35px auto",
			textAlign: "center",
			width: "75%",
			height: "40px",
			lineHeight: "40px",
			color: "#fff",
			fontSize: "15px",
			background: "linear-gradient(270deg, #64e1de, #29abe3)",
			borderRadius: "20px",
			boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)"
		}
	};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
