Ext.define('Mis.store.mainframe.MainFrameStore', {
			extend : 'Ext.data.TreeStore',
			requires : 'Mis.model.mainframe.MainFrameModel',
			model : 'Mis.model.mainframe.MainFrameModel',
			nodeParam:'id',
			root : {
				expanded : true
			},

			/*
			 * proxy: { type: 'ajax',
			 * 
			 * url: 'menuAction/menulist2.action' }
			 */
			proxy : {
				
				api:{
					update:"",  //后台处理修改的url地址
					remove:"",  //后台处理删除的url地址
					search:""  //后台处理搜索的url地址
				},
				
				type : 'ajax',//
				//url:basePath+'/OA/server/menugrid.json',
				url: 'menuAction/menulist2.action',
				//url: 'menuAction/menulist.action',

				extraParams : {},
				reader : {
					type : 'json',
					root : 'models'
				},
				writer : {
					type : 'json'
				}
			}
		})