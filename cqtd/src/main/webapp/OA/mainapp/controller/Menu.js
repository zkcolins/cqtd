Ext.define('OA.controller.Menu', {
			extend : 'Ext.app.Controller',
			stores : ['bastore'],
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
								itemmousedown : this.loadMenu
							}
						})
			},
			loadMenu : function(selModel, record) {
				// console.info(record);
				if (record.get('leaf')) {
					var panel = Ext.getCmp(record.get('id'));
					if (!panel) {
						Ext.require(['Ext.grid.*']);
						var rowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
							clicksToMoveEditor: 1,
		        			autoCancel: true
						});
						panel = Ext.create("Ext.grid.Panel", {
									store : record.get('stores'),
									columns : record.get('columns'),
									errorSummary:false, 
									title : record.get('text'),
									id : record.get('text') + record.get('id'),
									columnLines: true, 
									bodyPadding:0,
									/*
									viewConfig : {
										stripeRows : true
									},
									*/
									closable : true,
									bbar: Ext.create('Ext.PagingToolbar', { 
				                        store: record.get('stores'), 
				                        displayInfo: true, 
				                        displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
				                        emptyMsg: "没有数据" 
				                    }),
				                    dockedItems: [{ 
				                        xtype: 'toolbar', 
				                        items: [{ 
				                            text: '增加信息', 
				                            iconCls: 'icon-add', 
				                            handler: function(){ 
				                                rowEditing.cancelEdit(); 
				                                var panelStore = this.up("panel").getStore(); 
				                                var panelModel = this.up("panel").getSelectionModel(); 
				                                panelStore.insert(0,panelModel); 
				                                rowEditing.startEdit(0, 0); 
				                            } 
				                        }, '-', { 
				                            itemId: 'delete', 
				                            text: '删除信息', 
				                            iconCls: 'icon-delete', 
				                            disabled: true, 
				                            handler: function(){ 
				                                var selection = panel.getView().getSelectionModel().getSelection()[0]; 
				                                var panelStore = this.up("panel").getStore(); 
				                                if (selection) { 
				                                    panelStore.remove(selection); 
				                                } 
				                            } 
				                        }, '-' ,{ 
				                            text:'刷新数据', 
				                            iconCls:'icon-refresh', 
				                            handler:function(){ 
				                                var panelStore = this.up("panel").getStore(); 
				                                var currPage = panelStore.currentPage; 
				                                panelStore.removeAll(); 
				                                panelStore.load(currPage); 
				                            } 
				                        }] 
				                    }], 
				                    plugins: [rowEditing], 
				                    listeners: { 
				                        'selectionchange': function(view, records) { 
				                            panel.down('#delete').setDisabled(!records.length); 
				                        } 
				                    } 
								})
						this.openTab(panel, record.get('id'));
					} else {
						var main = Ext.getCmp("content-panel");
						main.setActiveTab(panel);
					}
				}

			},
			openTab : function(panel, id) {
				var o = (typeof panel == "string" ? panel : id || panel.id);
				var main = Ext.getCmp("content-panel");
				var tab = main.getComponent(o);
				if (tab) {
					main.setActiveTab(tab);
				} else if (typeof panel != "string") {
					panel.id = o;
					var p = main.add(panel);
					main.setActiveTab(p);
				}
			}

		})