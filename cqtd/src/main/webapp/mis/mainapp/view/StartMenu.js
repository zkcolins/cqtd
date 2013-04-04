/* 
 * 左面板下部'开始'按钮
 * 如何使用:
 * 1.添加Controller的views属性'StartMenu'
 * 2.在MainLayout添加xtype:'StartMenu'
 */

Ext.define('mis.view.StartMenu',{
    extend:'Ext.menu.Menu',
    alias:'widget.StartMenu',
    defaults:{
        scale:'medium'
    },
    items:[{
        iconCls:"lock-ico",
        text:'修改密码',
        handler:function(){
            console.warn("测试警告","修改密码 方法没有实现");
        }
    },{
        iconCls:'info-icon',
        handler:function() {
            console.warn("测试","关于我们 方法没有实现");
        },
        text:'关于我们'
    },{
        iconCls:'start-logout-ico',
        text:'退出系统',
        handler:function() {
            console.warn("测试","退出系统 方法没有实现");
        }
    },{
        iconCls:'help-ico',
        text:'帮助',
        handler:function() {
            console.warn("帮助测试","帮助 方法没有实现");
        }
    }]
});


