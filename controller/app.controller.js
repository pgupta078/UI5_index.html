sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageBox"
], function (Controller, MessageToast, Filter, FilterOperator, ResourceModel, MessageBox) {
	"use strict";
	return Controller.extend("UI5Day1.controller.app", {
		onInit: function () {
			var i18nModel = new ResourceModel({
				bundleName: "UI5Day1.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		onSearchINV: function () {
			 var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var msg =  oBundle.getText("searchInvoice");
      
			sap.m.MessageBox.show(
				msg, {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						MessageToast.show('closed');
					}
				}
			);
		}
	});
});