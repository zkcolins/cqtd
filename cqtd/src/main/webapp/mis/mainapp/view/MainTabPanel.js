/* 
 * 内容管理主区域,组件形式tabpanel面板，主要装载数据表格等具体视图；
 * * 如何使用:
 * 1.添加Controller的views属性'North'
 * 2.在MainLayout添加xtype:'North'
 */
Ext.define('mis.view.MainTabPanel',{
    extend:'Ext.tab.Panel',
    alias:'widget.MainTabPanel',
    id:'MainTabPanel',
    margins:'0 3 0 0',
    enableTabScroll: true,
    plain: true,
    activeTab: 0,
    defaults:{
        padding:1,border:false,layout:'fit'
    },
    items:[{
        title: 'Welcome',
        iconCls:'tab-home-ico',
        loader: {
            bodyPadding:3,
            url: 'welcome.html',
            contentType: 'html',
            autoLoad: true,
            params: 'foo=123&bar=abc'
        }
    }],
    initComponent:function(){        
        this.callParent(arguments);
    },

    onAddItem:function(){
        console.dir(this);
    },
    onActiveTab:function(){}
});

