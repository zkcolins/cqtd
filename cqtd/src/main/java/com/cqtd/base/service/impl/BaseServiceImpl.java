package com.cqtd.base.service.impl;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cqtd.base.dao.BaseDao;
import com.cqtd.base.service.BaseService;

@Service("baseService")
public class BaseServiceImpl<T> implements BaseService<T> {

	protected BaseDao<T> baseDao;
    
	@Autowired
    public void setBaseDao(BaseDao<T> baseDao){
    	this.baseDao = baseDao;
    }
	
	@Override
	public Serializable save(T o) {
		return baseDao.save(o);
	}

	@Override
	public void delete(T o) {
		baseDao.delete(o);
	}

	@Override
	public void update(T o) {
		baseDao.update(o);		
	}

	@Override
	public void saveOrUpdate(T o) {
		baseDao.saveOrUpdate(o);
	}

	@Override
	public T get(Class<T> c, Serializable id) {
		return baseDao.get(c, id);
	}

	@Override
	public T get(String hql) {
		return baseDao.get(hql);
	}

	@Override
	public T get(String hql, Map<String, Object> params) {
		return baseDao.get(hql, params);
	}

	@Override
	public List<T> find(String hql) {
		return baseDao.find(hql);
	}

	@Override
	public List<T> find(String hql, Map<String, Object> params) {
		return baseDao.find(hql, params);
	}

	@Override
	public List<T> find(String hql, int page, int rows) {
		return baseDao.find(hql, page, rows);
	}

	@Override
	public List<T> find(String hql, Map<String, Object> params, int page,
			int rows) {
		return baseDao.find(hql, params, page, rows);
	}

	@Override
	public Long count(String hql) {
		return baseDao.count(hql);
	}

	@Override
	public Long count(String hql, Map<String, Object> params) {
		return baseDao.count(hql, params);
	}

	@Override
	public int executeHql(String hql) {
		return baseDao.executeHql(hql);
	}

	@Override
	public int executeHql(String hql, Map<String, Object> params) {
		return baseDao.executeHql(hql, params);
	}

}
