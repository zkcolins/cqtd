package com.cqtd.role.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqtd.menu.action.MenuAction;
import com.cqtd.role.model.Role;
import com.cqtd.role.service.RoleService;
import com.cqtd.util.FooUtils;
import com.cqtd.util.StaticMethod;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;


@Controller
@RequestMapping("/OA/roleAction")
public class RoleAction {
	private static final Logger logger = Logger.getLogger(RoleAction.class);
	private RoleService roleService;

	@Autowired
	public void setRoleService(RoleService roleService) {
		this.roleService = roleService;
	}

	
	@RequestMapping("/rolelist")
	@ResponseBody
	public void rolelist(HttpServletResponse response){
		
		String  hql = "from Role";
		String countHql = "select count(id) "+hql;
		
		Map<String, Object> map = Maps.newHashMap();
		map.put("datas", roleService.find(hql, 1, 15));
		map.put("total",roleService.count(countHql));
		logger.info("--rolelist--");
		try {
			FooUtils.printJsonObject(response,map);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	
	@RequestMapping("/editor")
	@ResponseBody
	public void editor(HttpServletResponse response,Role role){
		roleService.saveOrUpdate(role);
		logger.info("--editor--");
		try {
			FooUtils.printJsonObject(response);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	@RequestMapping("/rolelist2")
	@ResponseBody
	public void rolelist2(HttpServletRequest request,HttpServletResponse response){
		List<Role> result = Lists.newArrayList();
		String node = StaticMethod.nullObject2String(request.getParameter("id"));
		String  hql = "from Role ";
		Map<String,Object> params = new HashMap<String,Object>();
		if(!node.equals("root")&&!"".equals(node)){
			hql+=" where parentId=:parentId";
		}else{
			hql+=" where parentId=:parentId";
			node = "";
		}
		params.put("parentId", node);
		result = roleService.find(hql, params);
		
		Map<String, Object> map = Maps.newHashMap();
		map.put("models", result);
		
		try {
			FooUtils.printJsonObject(response,map);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
}
