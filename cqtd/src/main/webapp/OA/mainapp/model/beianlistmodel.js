Ext.define('OA.model.beianlistmodel', { 
    extend: 'Ext.data.Model', 
    fields: ['ID', 'kehu_name','beianhao','beianpass','beianemail','emailpass','beianzh','beianzhpa']
     
    //proxy: { 
//        type: 'ajax', 
//        url: '/server/getbeianlist.asp', 
//        reader: { 
//            type: 'json', 
//            root: 'results' 
//        } 
//    } 
}); 