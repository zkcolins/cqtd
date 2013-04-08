<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- ext控件 -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/ext-4.2.0/resources/css/ext-all.css" />
<!--引入自定义CSS-->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/mis/scripts/ext_icon.css" />
<!-- 
<script type="text/javascript" src="${pageContext.request.contextPath}/ext-4.2.0/bootstrap.js" charset="utf-8"></script>
 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/ext-4.2.0/ext-all-debug.js" charset="utf-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/ext-4.2.0/ext-lang-zh_CN.js" charset="utf-8"></script>
<script type="text/javascript">
var basePath = '${pageContext.request.contextPath}';
Ext.QuickTips.init();
var user = {
    username:"",
    id:0
};
	
var CurrentTablePanel = {
    id:'',
    title:'',
    resourceNo:0,
    iconCls:''
};
</script>