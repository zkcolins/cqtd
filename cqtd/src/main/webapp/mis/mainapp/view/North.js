/* 
 * 视图分为：
 * 1.上部，logo\退出按钮、修改密码；
 * 2.左部，可折叠面板，内包含树型管理菜单等；
 * 3.右部，tabpanel面板，主要装载数据表格等具体视图；
 * 4.底部，版权部分，版本部分；
 * 此为视图上部分,为扩展方便，后面可能会再对他再次规划，所以抽出来单独写；
 * 如何使用:
 * 1.添加Controller的views属性'North',alias:'widget.North',
 * 2.在MainLayout添加xtype:'North'
 */

var UserMenu = Ext.create('Ext.XTemplate',
    '<table id="{4}" cellspacing="0" class="x-btn {3}"><tbody class="{1}">',
    '<tr><td class="x-btn-tc x-btn-ml"><i>&#160;</i></td><td class="x-btn-tc"></td><td class="x-btn-tc x-btn-mr"><i>&#160;</i></td></tr>',
    '<tr><td class="x-btn-ml"><i>&#160;</i></td><td class="x-btn-mc"><em class="{2}" unselectable="on"><button type="{0}"></button></em></td><td class="x-btn-mr"><i>&#160;</i></td></tr>',
    '<tr><td class="x-btn-bl"><i>&#160;</i></td><td class="x-btn-bc"></td><td class="x-btn-br"><i>&#160;</i></td></tr>',
    '</tbody></table>');
    
Ext.define('mis.view.North',{
    extend:'Ext.panel.Panel',
    alias:'widget.North',
    bodyStyle:'background-image:url(images/head_bg.jpg)',
    height:81,
    border:0,
    layout:'fit',
    items:[{
        layout:{
            type:'hbox',
            align:'left'
        },
        baseCls:'x-plain',
        defaults:{
            anchor:'100%',
            baseCls:'x-plain'
        },
        items:[{
            margins:"14 0 0 6",
            flex:4,
            html:"<span><img src='images/logo.png'/></span>"
        },{
            xtype:'tbspacer',
            flex:4
        },{
            margins:'0 5 0 0',
            layout: {
                type: 'hbox',
                pack:'end',
                align:'center'
            },
            defaults:{
                scale: 'large',
                margins:'0 5 0 0'
            },
            items:[{
                iconCls:'user-ico',
                xtype:'button',
                text: '当前用户：Admin',
                tpl:UserMenu
            },{
                xtype:'button',
                text: '用户角色：Administrator',
                margins:'0',
                tpl:UserMenu
            }]
        }]
    }]
});



