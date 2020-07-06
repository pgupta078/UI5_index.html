sap.ui.define([
		"sap/m/Text",
		"sap/ui/core/mvc/XMLView"
	],
	function (Text, XMLView) {
		"use strict";
		XMLView.create({
				viewName: "UI5Day1.view.app"
			})
			.then(function (View) {
				View.placeAt("content");
			});
	});