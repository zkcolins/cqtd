Ext.define('Mis.view.mainframe.Header', { 
    extend: 'Ext.Component', 
    style: {
        //color: '#FFFFFF',
        background:'url(image/banner_background/default.png)'
    },
    initComponent: function() { 
        Ext.applyIf(this, { 
            xtype: 'box', 
            //itemCls: 'header123456', 
            region: 'north', 
            title:'管理系统',
            html: '<h1>&nbsp;管理系统</h1>', 
            height: 60
        }); 
        this.callParent(arguments); 
    } 
});