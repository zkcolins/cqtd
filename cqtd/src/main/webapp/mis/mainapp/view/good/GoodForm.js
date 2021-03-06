/*
 * ClassName 商品的详细信息视图
 * */
Ext.define("Mis.view.good.GoodForm",{
	extend:"Ext.window.Window",
	title:"商品的详细信息展示",
	alias:"widget.good_GoodForm",
	layout:"auto",
	width:702,
	height:405,
	isSelect:true,
	autoScroll:true,//自动滚动条
	closable:true,
	closeAction:"destroy",
	layout:"border",
	modal:true,
	columnLines:false,
	items:[{
		xtype:"form",
		region:"west",
		id:"myform",
		width:300,
		border:0,
		layout:"auto",
		align:"center",
		defaults:{
			margin:"7 0 0 15",
			selectOnFocus:true,
			allowBlank:false, //是否能为空
			msgTarget:"side" //提示信息现在的位置
		},
		items:[{
			xtype:"textfield",
			fieldLabel:"商品序号",
			hidden:true,
			name:"good.id",
			allowBlank:true,
			id:"id"
			},{
				xtype:"textfield",
				fieldLabel:"商品名称",
				name:"good.name",
				id:"name"
			},{
				xtype:"numberfield",
				fieldLabel:"价格",
				step:0.05,
				minValue:0,
				name:"good.price",
				decimalPrecision:2,
				id:"price"
			},
				
				/*	
			{
				xtype:"combobox",
				labelWidth:100,
				width:180,
				
				listConfig:{ //控制下拉列表的样式
					emptyText:"没有找到匹配的项",
					maxHeight:200
				},
				fieldLabel:"活动类型",
				name:"good.status",
				queryMode:"local",
				store:new Ext.data.Store({
					model:"OA.CustomerApp.model.SelectTypeModel",
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
			},
			*/
			{
				fieldLabel:"折扣价",
				xtype:"numberfield",
				decimalPrecision:2,
				minValue:0,
				step:0.05,
				name:"good.discount",
				id:"discount"
			},{
				fieldLabel:"生产日期",
				xtype:"datefield",
				allowBlank:true,
				name:"good.produceDate",
				format:"y-m-d",
				id:"produceDate"
			},{
				fieldLabel:"库存量",
				xtype:"numberfield",
				minValue:0,
				name:"good.countNumber",
				step:10,
				allowDecimals:false,
				id:"countNumber"
			},{
				fieldLabel:"售出量",
				minValue:0,
				step:10,
				xtype:"numberfield",
				allowDecimals:false,
				name:"good.sellNumber",
				id:"sellNumber"
			},{
				xtype:"textfield",
				name:"good.uptime",
				id:"uptime",
				fieldLabel:"上架时间",
				allowBlank:true,
				disabled:true
			},{
				xtype:"numberfield",
				name:"good.timeLength",
				id:"timelength",
				fieldLabel:"上架时长"
			}]
	},{
		xtype:"form",
		border:0,
		id:"uploadform",
		region:"center",
		items:[{
			xtype:"panel",
			width:150,
			height:150,
			id:"goodimage",
			margin:"5 5 5 50",
			border:0,
//			bodyStyle:"background:url("+this.model.image+");"
			bodyStyle:"background:red;"
		},{
			xtype:"fileuploadfield",
			name:"image",
			id:"image",
			fieldLabel:"图片地址",
			labelWidth:60,
			allowBlank:false,
			regex:/\\*\.jpg|\\*\.gif/,
			regexText:"文件格式错误",
			width:280,
			anchor:"70%",
			buttonText:"选择图片"
		},{
			xtype:"button",
			name:"upload",
			id:"upload",
			text:"上传",
			margin:"-45 0 0 300"
		},{
			xtype:"textareafield",
			width:300,
			height:100,
			labelWidth:60,
			name:"describe",
			id:"describe",
			fieldLabel:"描述信息"
		}]
	},{
		xtype:"panel",
		region:"south",
		border:0,
		height:50,
		items:[{
			margin:"5 0 0 300",
			xtype:"button",
			id:"submit",
			text:"保存"
		},{
			margin:"5 0 0 20",
			xtype:"button",
			id:"reset",
			text:"重置"
		}]
	}],
	initComponent:function(){
		this.callParent(arguments);
	}
});