/* 
 * 
 */
Ext.define('mis.store.ModulesTree',{
    extend:'Ext.data.TreeStore',
    model:'mis.model.Module',
    nodeParam:'id',
    autoSync:true,
    proxy:{
        type:'ajax',//
        //url:basePath+'/module/getModules.action',
        url:basePath+'/mis/data/module.json',
        extraParams:{},
        api:{
            //update:basePath+'/module/editor.action',
            //remove:basePath+'/module/delete.action'
        	update:'',
        	remove:''
        },
        reader:{
            type:'json',
            root:'models'
        },
        writer:{
            type:'json'
        }
    },
    root:{
        text:'Module Tree',
        id:0,
        expanded:true
    },
    listeners:{
        write:function(store,operation){
            console.warn('进来了',operation.action);
            //console.dir(operation);
            var record = operation.getRecords()[0],
            name = Ext.String.capitalize(operation.action),
            verb;
                    
                    
            if (name == 'Destroy') {
                record = operation.records[0];
                verb = 'Destroyed';
            } else {
                verb = name + 'd';
            }
        },
        itemclick:function(){
        	console.warn("进来了吗？");
        }
    },
    autoLoad:true
})

