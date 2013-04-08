/**
 * 角色
 */
Ext.define('Mis.store.role.RoleStore',{
    extend:'Ext.data.Store',
    model:'Mis.model.role.RoleModel',
    //pageSize:18,
    proxy:{
        type:'ajax',
        //url:basePath+'/Mis/roleAction/rolelist.action',
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