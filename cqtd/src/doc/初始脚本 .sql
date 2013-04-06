/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50041
Source Host           : localhost:3306
Source Database       : cqtdoa

Target Server Type    : MYSQL
Target Server Version : 50041
File Encoding         : 65001

Date: 2013-04-06 12:22:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_module`
-- ----------------------------
DROP TABLE IF EXISTS `t_module`;
CREATE TABLE `t_module` (
  `id` varchar(36) NOT NULL,
  `direction` longtext,
  `iconCls` varchar(100) default NULL,
  `leaf` tinyint(1) default NULL,
  `mgrUrl` varchar(100) default NULL,
  `orderNo` int(11) default NULL,
  `parentId` varchar(36) default NULL,
  `text` varchar(100) default NULL,
  `url` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_module
-- ----------------------------
INSERT INTO `t_module` VALUES ('0', null, 'icon-menu', '0', 'menu.MenuGrid', '0', '', '菜单管理', null);
INSERT INTO `t_module` VALUES ('1', null, 'icon-menu', '1', 'menu.MenuGrid', '1', '0', '菜单管理', null);
INSERT INTO `t_module` VALUES ('2', null, 'icon-menu', '1', 'role.RoleGrid', '2', '0', '角色管理', null);

-- ----------------------------
-- Table structure for `t_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role` (
  `id` bigint(20) NOT NULL,
  `orderNo` int(11) default NULL,
  `parentId` bigint(20) default NULL,
  `text` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES ('1', '1', null, '超级管理员');
INSERT INTO `t_role` VALUES ('2', '2', '1', '普通管理员');
INSERT INTO `t_role` VALUES ('3', '3', '2', '普通用户');
