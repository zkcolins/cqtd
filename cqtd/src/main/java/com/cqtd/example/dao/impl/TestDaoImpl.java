package com.cqtd.example.dao.impl;

import org.springframework.stereotype.Repository;

import com.cqtd.base.dao.BaseDao;
import com.cqtd.base.dao.impl.BaseDaoImpl;
import com.cqtd.example.model.Ttest;

@Repository("testDao")
public class TestDaoImpl extends BaseDaoImpl<Ttest> implements BaseDao<Ttest> {

}
