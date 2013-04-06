package com.cqtd.role.dao.impl;

import org.springframework.stereotype.Repository;

import com.cqtd.base.dao.impl.BaseDaoImpl;
import com.cqtd.role.dao.RoleDao;
import com.cqtd.role.model.Role;

@Repository("roleDao")
public class RoleDaoImpl extends BaseDaoImpl<Role> implements RoleDao {

}
