Ext.define('OA.view.Header', { 
    extend: 'Ext.Component', 
    initComponent: function() { 
        Ext.applyIf(this, { 
            xtype: 'box', 
            cls: 'header', 
            region: 'north', 
            html: '<h1>OA管理系统</h1>', 
            height: 60 
        }); 
        this.callParent(arguments); 
    } 
});