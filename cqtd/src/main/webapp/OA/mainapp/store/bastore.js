Ext.define('OA.store.bastore', { 
    extend: 'Ext.data.Store', 
    requires: 'OA.model.beianlistmodel', 
    model: 'OA.model.beianlistmodel',
    pageSize: 20, 
    remoteSort: true, 
    autoLoad:true, 
    proxy: { 
        type: 'ajax', 
        url: 'menuAction/getgridlist.action', 
        reader: { 
            root: 'items', 
            totalProperty  : 'total' 
        }, 
        simpleSortMode: true 
    }, 
    listeners:{ 
        update:function(store,record){ 
            var currPage = store.currentPage; 
            //alert(record.get("ID")) 
            Ext.Ajax.request({ 
                url:'menuAction/save.action', 
                params:{ 
                    id : record.get("ID"), 
                    kehu_name:record.get("kehu_name"), 
                    beianhao:record.get("beianhao"), 
                    beianpass:record.get("beianpass"), 
                    beianemail:record.get("beianemail"), 
                    emailpass:record.get("emailpass"), 
                    beianzh:record.get("beianzh"), 
                    beianzhpa:record.get("beianzhpa")
                }, 
                success:function(response){ 
                    store.removeAll(); 
                    store.load(currPage); 
                } 
            }); 
        }, 
        remove:function(store,record){ 
            var currPage = store.currentPage; 
            //alert(record.get("ID")) 
            Ext.Ajax.request({ 
                url:'menuAction/del.action', 
                params:{ 
                    id : record.get("ID") 
                }, 
                success:function(response){ 
                    store.removeAll(); 
                    store.load(currPage); 
                } 
            }); 
        } 
    }, 
    sorters: [{ 
        property: 'ID', 
        direction: 'DESC' 
    }] 

});