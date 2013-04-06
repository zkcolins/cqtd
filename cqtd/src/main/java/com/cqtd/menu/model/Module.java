package com.cqtd.menu.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "t_module")
@DynamicUpdate(true)
@DynamicInsert(true)
public class Module {
	@Id
	@Column(name = "id",length = 36)
	@javax.persistence.GeneratedValue(generator = "system-uuid")
	@org.hibernate.annotations.GenericGenerator(name = "system-uuid", strategy = "uuid.hex")
	private String id;
	@Column(length = 100,nullable = true)
	private String text;
	@Column(length = 100,nullable = true)
	private String controlUrl;//Controller的URL，方便动态加载Controller
	@Column(length = 100,nullable = true)
	private String mgrUrl;//模块URL
	/**
	 * 模块的排序号
	 */
	@Column(nullable = true)
	private int orderNo;
	@Column(nullable = true)
	private boolean leaf;
	@Column(length = 100,nullable = true)
	private String iconCls;
	@Column(length = 36,nullable = true)
	private String parentId;
	@Column(length = 2000,nullable = true)
	private String direction;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getControlUrl() {
		return controlUrl;
	}
	public void setControlUrl(String controlUrl) {
		this.controlUrl = controlUrl;
	}
	public String getMgrUrl() {
		return mgrUrl;
	}
	public void setMgrUrl(String mgrUrl) {
		this.mgrUrl = mgrUrl;
	}
	public int getOrderNo() {
		return orderNo;
	}
	public void setOrderNo(int orderNo) {
		this.orderNo = orderNo;
	}
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
	public String getParentId() {
		return parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
}
