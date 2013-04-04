/* 
 * 主面板版权部分
 * 部件使用方式：
 * 1.起个别名alias:'widget.South'
 * 2.gwtjs.controller.Controller添加views:['South']
 * 3.引用组件：xtype:'South'
 */
Ext.define('mis.view.South',{
    extend:'Ext.panel.Panel',
    alias:'widget.South',
    info : {
        version:'v0.2',
        company:'mis Software Foundation',
        year:2013
    },
    height:32,
    margins:'3 0',
    html:Ext.create('Ext.XTemplate',
        '<div id="south-copyright" style="line-height:32px;background:#99BCE8; text-indent:1em;">',
        '<tpl>',
        'Copyright © 2013 The mis Software Foundation',
        '<span style="float:right; margin-right:6px;">v0.2',
        '</tpl>',
        '</span></div>'
        ),
    initComponent:function(){
        this.callParent(arguments);
    }
});

