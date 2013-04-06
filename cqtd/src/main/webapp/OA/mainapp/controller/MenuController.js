Ext.define('OA.controller.MenuController', {
			extend : 'Ext.app.Controller',
			//stores : [],
			refs : [{
						ref : 'smsmenu',
						selector : 'smstablepanel'
					}, {
						ref : 'tabPanel',
						selector : 'smstablepanel'
					}],
			init : function() {
				this.control({
							'smsmenu' : {
								itemclick : this.loadMenuTree
							}
						})
			},
			loadMenuTree : function(view, record, element, index, e, object) {
				e.stopEvent();

				var url = record.raw.mgrUrl;
				var id = record.raw.id;
				var text = record.raw.text;
				var description = record.raw.direction;
				var iconCls = record.raw.iconCls;
				
				var controllerUrl = record.raw.controlUrl;
				if (record.data.leaf) {
					var ModuleTabId = 'tab-' + record.raw.id;
					var mainTabPanel = Ext.getCmp('content-panel');
					var tab = mainTabPanel.getComponent(ModuleTabId);
					if (!tab) {
						var p = {
							title : text,
							id : ModuleTabId,
							iconCls : iconCls,
							closable : true
						};
						// 只能这样传，不然组件渲染有问题,没有标题，没有图标等,只有在create的时候另外传参数才能解决；
						// 另外pkg由数据存储的类名拼接而成,不用写app下一级的包名，如果再下级就要写了；
						
						//动态加载Controller
						if(!application.hasController(controllerUrl)){
				           application.addController(controllerUrl);
						}
						//动态生成中心的TAB面板
						var pkg = 'OA.view.' + url;
						tab = mainTabPanel.add(Ext.create(pkg, p));
//						if (tab.getStore())
//							tab.getStore().load();
					}

					mainTabPanel.setActiveTab(tab);
				}
			}
		})