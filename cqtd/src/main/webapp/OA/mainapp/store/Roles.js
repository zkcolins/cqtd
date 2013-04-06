/**
 * 角色
 */
Ext.define('OA.store.Roles',{
    extend:'Ext.data.Store',
    model:'OA.model.Role',
    //pageSize:18,
    proxy:{
        type:'ajax',
        //url:basePath+'/OA/roleAction/rolelist.action',
        url:'roleAction/rolelist.action',
        reader:{
            type:'json',
            successProperty:'success',
            root:'datas',
            totalProperty: 'total',
            messageProperty:'msg'
        },
        writer:{
            type:'json'
        }
    },
    autoLoad: true
})