Ext.define('OA.model.Menu', {
	extend : 'Ext.data.Model',
	// fields : ['id', 'text', 'iconCls', 'stores', 'columns']
	fields : [{
				name : 'id',
				type : 'string'
			}, {
				name : 'text',
				type : 'string'
			}, {
				name : 'mgrUrl',
				type : 'string'
			}, {
				name : 'url',
				type : 'string'
			}, {
				name : 'orderNo',
				type : 'int'
			}, {
				name : 'leaf',
				type : 'bool'
			}, {
				name : 'iconCls',
				type : 'string'
			}, {
				name : 'parentId',
				type : 'string'
			}, {
				name : 'direction',
				type : 'string'
			}]
		/*
		 * root : { expanded : true }, proxy : { type : 'ajax', //url :
		 * '/server/MenuLoader.json' url : 'menuAction/menulist.action' }
		 */
	})