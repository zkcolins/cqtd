/* 
 * 控制层.控制器,动态添加就要做四件事：
 * 1.添加controller的views;
 * 2.添加controller的stores
 * 3.添加controller的models
 * 4.添加MainLayout布局center部分tabpanel组件的Items,格式为：
 * <code>
 * {
 *      title:'T2 ',
 *      closable:true,
 *      items:[{xtype:'TestGrid'}]  //TestGrid为视图组件,里面包含store、model
 * }
 * </code>
 */
Ext.define('mis.controller.Controller',{
    extend:'Ext.app.Controller',
    alias:'widget.Cont',
    init:function(){
        this.control({
            'SysTree':{
                itemclick:this.putTabPanel
            }
        })
    },
    views:['MainLayout','North','SysTree','StartMenu','MainTabPanel','South'],//,'TestGrid'
    stores:['ModulesTree'],
    //models:['Module','SysButtons'],
    models:['SysButtons'],
    autoCreateViewport: true,
    putTabPanel:function(view, record, element, index, e,object){
        e.stopEvent();
        
        //var url = record.raw.mgrUrl;
        console.info(record);
        var url = record.raw.href;
        var id = record.raw.id;
        var text = record.raw.text;
        //var description = record.raw.direction;
        var description = record.raw.description;
        
        var iconCls = record.raw.iconCls;
        if(record.data.leaf){
            var ModuleTabId = 'tab-'+record.raw.id;
            var mainTabPanel = Ext.getCmp('MainLayout').getComponent('MainTabPanel');
            var tab = mainTabPanel.getComponent(ModuleTabId);
            console.info("ModuleTabId:"+ModuleTabId);
            console.info("mainTabPanel:"+mainTabPanel);
            console.info("tab:"+tab);
            if(!tab){
                var p = {
                    title:text,
                    id:ModuleTabId,
                    iconCls:iconCls,
                    closable:true
                };
                //只能这样传，不然组件渲染有问题,没有标题，没有图标等,只有在create的时候另外传参数才能解决；
                //另外pkg由数据存储的类名拼接而成,不用写app下一级的包名，如果再下级就要写了；
                
                var pkg = 'mis.view.'+url;
                console.info("pkg:"+pkg);
                tab = mainTabPanel.add(Ext.create(pkg,p));
                console.log("姐姐的，成功啦！");
                if(tab.getStore())
                tab.getStore().load();
            }
            
            mainTabPanel.setActiveTab(tab);
        }
    }
});

