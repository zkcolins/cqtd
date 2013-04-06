/*
 * ClassName 商品数据集
 */
 Ext.define("OA.store.GoodStore",{
 	extend:'Ext.data.Store',
	model:'OA.model.GoodModel',
	pageSize:3,
	proxy:{
		api:{
			remove:"",  //后台处理删除的url地址
			update:"",  //后台处理删除的url地址
			search:""  //后台处理删除的url地址
		},
		type:"ajax",
		url:basePath+'/OA/server/listgood.json',
		reader:{
			type:"json",
			root:"datas",
			totalProperty :'total'		
		},
		writer:{
			type:"json"
		}
	},
	autoLoad:true	
 });