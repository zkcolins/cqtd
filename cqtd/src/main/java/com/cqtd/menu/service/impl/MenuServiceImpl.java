package com.cqtd.menu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cqtd.base.service.impl.BaseServiceImpl;
import com.cqtd.menu.dao.MenuDao;
import com.cqtd.menu.model.Menu2;
import com.cqtd.menu.service.MenuService;

@Service("menuService")
public class MenuServiceImpl extends BaseServiceImpl<Menu2> implements MenuService {
	private MenuDao menuDao;

	@Qualifier("menuDao")
	@Autowired
	public void setMenuDao(MenuDao menuDao) {
		this.menuDao = menuDao;
	}
	
}
