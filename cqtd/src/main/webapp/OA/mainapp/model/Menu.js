Ext.define('OA.model.Menu', {
			extend : 'Ext.data.Model',
			fields : ['id', 'text', 'iconCls', 'stores', 'columns'],
			root : {
				expanded : true
			},
			proxy : {
				type : 'ajax',
				//url : '/server/MenuLoader.json'
				url : 'menuAction/menulist.action'
			}
		})