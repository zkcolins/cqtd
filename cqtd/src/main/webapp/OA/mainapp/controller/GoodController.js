Ext.define('OA.controller.GoodController', {
	extend : 'Ext.app.Controller',
	//GridDoActionUtil : Ext.create("util.GridDoActionUtil"),
	init : function() {
//		this.getGridObj = function(button) {
//			return button.ownerCt.ownerCt;
//		};
//		this.getFormObj = function(button) {
//			return button.ownerCt.ownerCt;
//		};
		this.control({
//			// 添加按钮事件处理
			"good.goodgrid button[id=add]" : {
				click : function(addbutton) {
					Ext.create("OA.view.good.GoodForm", {}).show();
				}
			}
			
			/*
			,
			
			
			// 删除按钮事件处理
			"goodgrid button[id=delete]" : {
				click : function(deletebutton) {
					var grid = this.getGridObj(deletebutton);
					this.GridDoActionUtil.doDelete(grid);
				}
			},
			// 保存按钮事件处理
			"goodgrid button[id=save]" : {
				click : function(savebutton) {
					var grid = this.getGridObj(savebutton);
					this.GridDoActionUtil.doSave(grid);
				}
			},
			// 模糊搜索按钮事件处理
			"goodgrid button[id=searchfuzzy]" : {
				click : function(searchfuzzybutton) {
					var grid = this.getGridObj(searchfuzzybutton);
					var input = Ext.getCmp("searchkey");
					var inputValue = input.getValue();
					Ext.Ajax.request({
								url : grid.getStore().getProxy().api["search"], // 实现低耦合，url不能写固定，因为这个是工具类，需要在store配置api
								params : {
									search : inputValue
								},
								method : "POST",
								timeout : 4000,
								success : function(response, opts) {
									var data = Ext.JSON
											.decode(response.responseText);
									grid.getStore().getProxy().extraParams = {
										'crudUtil.whereSql' : data.whereSql
									};
									grid.getStore().load(function() {
												input.setValue(inputValue);
											});
								}
							});
				}
			},
			// 上架下架和行模式的action事件在view中来实现

			// 组合搜索按钮事件处理
			"goodgrid button[id=searchgroup]" : {
				click : function(searchgroupbutton) {
					var grid = this.getGridObj(searchgroupbutton);
					var searchname = Ext.getCmp("goodsearchname").getValue();
					var searchtype = Ext.getCmp("goodsearchtype").getValue();
					var searchprice = Ext.getCmp("goodsearchprice").getValue();
					var searchpricetype = Ext.getCmp("searchpricetype")
							.getValue();
					var goodnumber = Ext.getCmp("goodnumber").getValue();
					var searchnumbertype = Ext.getCmp("searchnumbertype")
							.getValue();
					var whereSql = "where 1<2";
					if (searchname != null && searchname != "") {
						whereSql += " and Name like '%" + searchname + "%' ";
					}
					if (searchtype != null && searchtype != "") {
						if (searchtype == 1) {
							whereSql += " and status in (1,11) ";
						} else if (serchtype = 2) {
							whereSql += " and status in (2,22)";
						} else {
							whereSql += " and status = " + serchtype + " ";
						}
					}

					if (searchprice != null && searchprice != ""
							&& searchpricetype != null && searchpricetype != "") {
						// 问题已经解决。 sum是HQL查询中的关键字。 字段名已经修改成money
						if (searchpricetype == "less-than") {
							whereSql += " and price<=" + searchprice + " ";
						} else if (searchpricetype == "greater-than") {
							whereSql += " and price>=" + searchprice + " ";
						}
					}
					if (goodnumber != null && goodnumber != ""
							&& searchnumbertype != null
							&& searchnumbertype != "") {
						// 问题已经解决。 sum是HQL查询中的关键字。 字段名已经修改成money
						if (searchnumbertype == "less-than") {
							whereSql += " and countNumber<=" + goodnumber + " ";
						} else if (searchnumbertype == "greater-than") {
							whereSql += " and countNumber>=" + goodnumber + " ";
						}
					}
					grid.getStore().getProxy().extraParams = {
						'crudUtil.whereSql' : whereSql
					};
					grid.getStore().load();
				}
			},
			"goodform button[id=upload]" : {
				click : function(submitbutton) {
					var form = Ext.getCmp("uploadform").getForm();
					form.submit({
						url : "/buy360/jsonupload/oper!upload.action",
//						waitMsg : "文件上传中",
						success : function() {
							Ext.Msg.alert("success", "上传成功");
						},
						failure : function(form, action) {
							switch (action.failureType) {
								case Ext.form.action.Action.CLIENT_INVALID :
									Ext.Msg
											.alert('Failure',
													'Form fields may not be submitted with invalid values');
									break;
								case Ext.form.action.Action.CONNECT_FAILURE :
									Ext.Msg.alert('Failure',
											'Ajax communication failed');
									break;
								case Ext.form.action.Action.SERVER_INVALID :
									Ext.Msg.alert('Failure', action.result.msg);
							}
						}
					});
				}
			},
			"goodform button[id=submit]" : {
				click : function(submitbutton) {
					var form = Ext.getCmp("myform").getForm();
					// 得到上传中form的image和decreibe属性 值并当作参数传走
					// var uploadform = Ext.getCmp("uploadform");
					// var panel = uploadform.child("#goodimage");
					form.submit({
								clientValidation : true,
								url : '/buy360/jsongood/oper!add.action',
								params : {
									newStatus : 'delivered'
								},
								success : function(form, action) {
									Ext.Msg.alert('Success', "添加成功");
									Ext.create("OA.view.good.GoodForm",{}).hide();
								},
								failure : function(form, action) {
									switch (action.failureType) {
										case Ext.form.action.Action.CLIENT_INVALID :
											Ext.Msg.alert('提示', '提交数据不合法');
											break;
										case Ext.form.action.Action.CONNECT_FAILURE :
											Ext.Msg.alert('提示', '后台处理错误');
											break;
										case Ext.form.action.Action.SERVER_INVALID :
											Ext.Msg.alert('提示', "添加成功");
									}
								}
							});
				}
			},
			"goodform button[id=reset]" : {
				click : function(resetbutton) {
					var form = Ext.getCmp("myform").getForm();
					form.reset();
					var uploadform = Ext.getCmp("uploadform").getForm();
					uploadform.reset();
				}
			}*/
		});
	},
//	models : ['GoodModel'],
	stores : ['GoodStore']
//	views : ['good.GoodForm', 'good.GoodGrid']
});