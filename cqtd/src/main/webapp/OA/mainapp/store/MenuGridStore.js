Ext.define('OA.store.MenuGridStore',{ 
    extend: 'Ext.grid.Panel', 
    requires:'OA.model.Menu',
    model:'OA.model.Menu',
    proxy: {
        type: 'ajax',
        url: 'menuAction/menulist3.action',  
        reader: {
            type:"json",
			root:"datas",
			totalProperty :'total'
        }
    }
}) 