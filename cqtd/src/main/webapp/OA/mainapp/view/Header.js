Ext.define('OA.view.Header', { 
    extend: 'Ext.Component', 
    //bodyStyle:'background-image:url(cqtd/OA/images/head_bg.jpg)',
    initComponent: function() { 
        Ext.applyIf(this, { 
            xtype: 'box', 
            itemCls: 'header', 
            region: 'north', 
            html: '<h1>OA管理系统</h1>', 
            height: 60 
        }); 
        this.callParent(arguments); 
    } 
});