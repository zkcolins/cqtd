/**
 * ClassName 商品类型管理数据列表视图
 * */

/*
Ext.require([
    'Mis.store.good.GoodStore'
]); 
*/
var googStore = Ext.create('Mis.store.good.GoodStore');

Ext.define("Mis.view.good.GoodGrid",{
	extend:"Ext.grid.Panel",
	alias:"widget.good_GoodGrid",
	//store:'good.GoodStore',//因为GoodController中已初始化了该STORE
	store:googStore,
	border:0,
	stripeRows: true,
	multiSelect:true,
	margins: '0 1 1 0',
	autoScroll:true,
	selModel:{
		selType:"checkboxmodel"
	},
//	frame:true,
	autoExpandColumn : 'describe',
	tbar:[
		{xtype:'button',text:'添加',id:'add',iconCls:'table_add'},
		{xtype:'button',text:'删除',id:'delete',iconCls:'table_remove'},
		{xtype:'button',text:'保存',id:'save',iconCls:'table_save'},"->",
		{
			xtype:'textfield',
			fieldLabel:"关键字搜索",
			labelWidth:70,
			width:170,
			id:"searchkey",
			name:"searchkey",
			emptyText:"请输入关键字",
			selectOnFocus:true
		},"-",{
			xtype:"button",
			text:"搜索",
			iconCls:"search",
			id:"searchfuzzy"
		},"-"
	],
	bbar:[{
				fieldLabel:"商品名",
				labelWidth:50,
				width:150,
				xtype:'textfield',
				name:"goodsearchname",
				id:"goodsearchname",
				emptyText:"请输入商品名",
				selectOnFocus:true
			},"-",
			/*	
			{
				xtype:"combobox",
				labelWidth:60,
				width:160,
				listConfig:{ //控制下拉列表的样式
					emptyText:"没有找到匹配的项",
					maxHeight:200
				},
				fieldLabel:"活动类型",
				name:"goodsearchtype",
				id:"goodsearchtype",
				queryMode:"local",
				store:new Ext.data.Store({
					model:"FMApp.CustomerApp.model.SelectTypeModel",
					data:[
						{text:"无状态",value:"0"},
						{text:"抢购商品",value:"1"},
						{text:"热门商品",value:"2"}
					]
				}),
				valueField:"value",
				displayField:"text",
				forceSelection:true,
				typeAhead:true,
				value:"0"
			},"-",{
				fieldLabel:"价格",
				xtype:"numberfield",
				labelWidth:50,
				width:150,
				name:"goodsearchprice",
				id:"goodsearchprice",
				emptyText:"请输入价格",
				selectOnFocus:true
			},
				
			{
				xtype:"combobox",
				labelWidth:60,
				width:160,
				listConfig:{ //控制下拉列表的样式
					emptyText:"没有找到匹配的项",
					maxHeight:200
				},
				fieldLabel:"价格选择",
				name:"searchpricetype",
				id:"searchpricetype",
				queryMode:"local",
				store:new Ext.data.Store({
					model:"FMApp.CustomerApp.model.SelectTypeModel",
					data:[
						{text:"小于",value:"less-than"},
						{text:"大于",value:"greater-than"}
					]
				}),
				valueField:"value",
				displayField:"text",
				forceSelection:true,
				typeAhead:true,
				value:"less-than"
			},
			*/
			"-",{
				fieldLabel:"存货量",
				xtype:"numberfield",
				labelWidth:50,
				width:150,
				name:"goodnumber",
				id:"goodnumber",
				emptyText:"请输入存货量",
				selectOnFocus:true
			},
			/*	
			{
				xtype:"combobox",
				labelWidth:60,
				width:160,
				listConfig:{ //控制下拉列表的样式
					emptyText:"没有找到匹配的项",
					maxHeight:200
				},
				fieldLabel:"价格选择",
				name:"searchnumbertype",
				id:"searchnumbertype",
				queryMode:"local",
				store:new Ext.data.Store({
					model:"FMApp.CustomerApp.model.SelectTypeModel",
					data:[
						{text:"小于",value:"less-than"},
						{text:"大于",value:"greater-than"}
					]
				}),
				valueField:"value",
				displayField:"text",
				forceSelection:true,
				typeAhead:true,
				value:"less-than"
			},"-","","","",
			*/
			{
				xtype:"button",
				text:"组合查询",
				iconCls:"search",
				id:"searchgroup"
			}
	],
	enableKeyNav:true,  //可以使用键盘控制上下
	columnLines:true, //展示竖线
	columns:[{
		text:"名称",dataIndex:"name",
		//width:100,
		field:{
			xtype:"textfield"
		}},
		{text:"价格",dataIndex:"price",
		//width:100,
		field:{
			xtype:"numberfield",
			step:0.05,
			minValue:0,
			decimalPrecision:2
		}},
		{text:"折扣价",dataIndex:"discount",
		//width:100,
		field:{
			xtype:"numberfield",
			step:0.05,
			minValue:0,
			decimalPrecision:2
		}},
		/*
		{text:"状态",dataIndex:"status",width:100,
			renderer:function(value){
						if(value==0){
							return "无状态";
						}else if(value==1){
							return "抢购商品";
						}else if(value==11){
							return "<font color=red>抢购商品</font>";							
						}else if(value==2){
							return "热门商品";
						}else if(value==22){
							return "<font color=red>热门商品</font>";							
						}
			},field:{
				xtype:"combobox",
				queryMode:"local",
				store:new Ext.data.Store({
					model:"FMApp.CustomerApp.model.SelectTypeModel",
					data:[
						{text:"无状态",value:"0"},
						{text:"抢购商品",value:"1"},
						{text:"热门商品",value:"2"}
					]
				}),
				valueField:"value",
				displayField:"text",
				forceSelection:true,
				typeAhead:true,
				value:"0"
			}	
		},
		*/
		{text:"数量",dataIndex:"countNumber",
		//width:100,
		field:{
			xtype:"numberfield",
			step:1,
			minValue:0,
			decimalPrecision:2
		}},
		{text:"生产日期",xtype:"datecolumn",dataIndex:"produceDate",
		//width:100,
		format:"Y年m月d日"},
		{text:"描述信息",dataIndex:"describe",width:150,field:{
				xtype:"textfield",
				allowBlank:false
		}},{
			header:"前台操作",
			xtype:"actioncolumn",
			align:"center",
			id:"display",
			//width:100,
			items:[{
				id:'displa',
				tooltip:'前台显示',
				icon:"image/good/good_up.png",
				handler:function(o,rowIndex,colIndex,e){
					alert("out");
					var store=o.getStore();
					var obj=store.getAt(rowIndex);
					var status=obj.get("status");
					if(status!=0 && status!=null){
						if(status==1 || status==2){
						 Ext.Ajax.request({
								//url:"/buy360/jsongood/oper!grounding.action",
						 		url:'',
								params:{
									id:obj.get("id")
								},
								method:"POST",
								timeout:4000,
								success:function(response,opts){
										var result=Ext.JSON.decode(response.responseText).message;
										if(result=='success'){
											if(status==1){
												obj.set("status",11);
											}else{
												obj.set("status",22);											
											}
											obj.commit();
											Ext.Msg.alert("提示","已前台显示");
										}else{
											Ext.Msg.alert("提示","后台修改失败");
										}
								}
						});
						}else{
							Ext.Msg.alert("提示","已是显示状态");
						
						}
					}else{
							Ext.Msg.alert("提示","无状态商品不可下架");
					}
				}
			},"","","",{
				id:'display-no',
				tooltip:'取消前台显示',
				icon:"image/good/good_down.png",
				handler:function(o,rowIndex,colIndex,e){
					var store=o.getStore();
					var obj=store.getAt(rowIndex);
					var status=obj.get("status");
					if(status!=0 && status!=null){
						if(status==11 || status===22){
						 Ext.Ajax.request({
								//url:"/buy360/jsongood/oper!undercarriage.action",
						 		url:'',
								params:{
									id:obj.get("id")
								},
								method:"POST",
								timeout:4000,
								success:function(response,opts){
										var result=Ext.JSON.decode(response.responseText).message;
										if(result=='success'){
											if(status==11){
												obj.set("status",1);
											}else{
												obj.set("status",2);											
											}
											obj.commit();
											Ext.Msg.alert("提示","已取消前台显示");
										}else{
											Ext.Msg.alert("提示","后台修改失败");
										}
								}
						});
						}else{
							Ext.Msg.alert("提示","已是下架状态");
						
						}
					}else{
							Ext.Msg.alert("提示","无状态商品不可下架");
					}
				}
			}]
		},{
			header:"数据操作",
			xtype:"actioncolumn",
			align:"center",
			id:"crud",
			//width:106,
			items:[{
				id:'crud-select',
				tooltip:'查看',
				icon:"image/good/good_select.png",
				handler:function(o,item,rowIndex,colIndex,e){
					Ext.Msg.alert("提示","此功能暂未实现！");
				}
			},"-","-","-","-",{
				id:'crud-edit',
				tooltip:'编辑',
				icon:"image/good/good_edit.png",
				handler:function(o,item,rowIndex,colIndex,e){
					Ext.Msg.alert("提示","此功能暂未实现！");
				}
			},"-","-","-","-",{
				id:'crud-delete',
				tooltip:'删除',
				icon:"image/good/good_delete.png",
				handler:function(o,item,rowIndex,colIndex,e){
					Ext.Msg.alert("提示","此功能暂未实现！");
				}
			}]
		}
	],
	initComponent:function(){
		this.editing=Ext.create("Ext.grid.plugin.CellEditing");
		this.plugins=[this.editing];
	  	this.dockedItems = [];//bbar   dockeItems:[{as},{asas}]
        var paging = Ext.create('Ext.toolbar.Paging',{
                 //store:'good.GoodStore',
        		 store:googStore,
                 dock:'bottom',
                 displayInfo:true,
                 displayMsg : '显示{0}条到{1}条,共{2}条',
                 emptyMsg : "没有符合条件的记录",
                 plugins: Ext.create('Ext.ux.ProgressBarPager'),// 分页进度条
                 autoShow:true,
                 autoDestroy:true
         });
        this.dockedItems.push(paging);
		this.callParent(arguments);
	}
});