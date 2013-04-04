package com.cqtd.menu.dao.impl;

import org.springframework.stereotype.Repository;

import com.cqtd.base.dao.impl.BaseDaoImpl;
import com.cqtd.menu.dao.MenuDao;
import com.cqtd.menu.model.Menu2;

@Repository("menuDao")
public class MenuDaoImpl extends BaseDaoImpl<Menu2> implements MenuDao {

}
