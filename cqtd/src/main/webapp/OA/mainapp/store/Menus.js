Ext.define('OA.store.Menus',{ 
    extend: 'Ext.data.TreeStore', 
    requires:'OA.model.Menu',
    model:'OA.model.Menu',
    root: {  
        expanded: true  
    },  
    proxy: {  
        type: 'ajax',  
        
        url: 'menuAction/menulist.action'  
    }  
}) 