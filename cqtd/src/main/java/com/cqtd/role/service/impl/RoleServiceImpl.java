package com.cqtd.role.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cqtd.base.service.impl.BaseServiceImpl;
import com.cqtd.role.dao.RoleDao;
import com.cqtd.role.model.Role;
import com.cqtd.role.service.RoleService;

@Service("roleService")
public class RoleServiceImpl extends BaseServiceImpl<Role> implements RoleService {
	private RoleDao roleDao;

	@Qualifier("roleDao")
	@Autowired
	public void setRoleDao(RoleDao roleDao) {
		this.roleDao = roleDao;
	}
	
}
