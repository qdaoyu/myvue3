-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `namezh` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES (1, 'ROLE_root', '系统管理员');
INSERT INTO `t_role` VALUES (2, 'ROLE_test', '测试角色');
INSERT INTO `t_role` VALUES (3, 'ROLE_normal', '普通角色');

-- Table structure for t_admin_role
-- ----------------------------
DROP TABLE IF EXISTS `t_admin_role`;
CREATE TABLE `t_admin_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `admin_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `rid` int(11) NULL DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `rid`(`rid`) USING BTREE,
  INDEX `admin_id`(`admin_id`) USING BTREE,
  CONSTRAINT `t_admin_role_ibfk_1` FOREIGN KEY (`adminId`) REFERENCES `t_admin` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `t_admin_role_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `t_role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 68 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

INSERT INTO `t_admin_role` VALUES (1, 1, 4);
INSERT INTO `t_admin_role` VALUES (2, 1, 4);
INSERT INTO `t_admin_role` VALUES (3, 5, 3);
INSERT INTO `t_admin_role` VALUES (4, 5, 2);
INSERT INTO `t_admin_role` VALUES (5, 4, 3);
INSERT INTO `t_admin_role` VALUES (6, 4, 2);
INSERT INTO `t_admin_role` VALUES (7, 4, 4);
INSERT INTO `t_admin_role` VALUES (8, 4, 5);
INSERT INTO `t_admin_role` VALUES (16, 1, 6);
INSERT INTO `t_admin_role` VALUES (55, 3, 3);
INSERT INTO `t_admin_role` VALUES (56, 3, 4);
INSERT INTO `t_admin_role` VALUES (67, 2, 3);
INSERT INTO `t_admin_role` VALUES (68, 2, 4);
-- ----------------------------
-- Table structure for t_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `url` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'url',
  `path` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'path',
  `component` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组件',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜单名',
  `iconCls` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标',
  `keepAlive` tinyint(1) NULL DEFAULT NULL COMMENT '是否保持激活',
  `requireAuth` tinyint(1) NULL DEFAULT NULL COMMENT '是否要求权限',
  `parentId` int(11) NULL DEFAULT NULL COMMENT '父id',
  `enabled` tinyint(1) NULL DEFAULT 1 COMMENT '是否启用',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parentId`(`parentId`) USING BTREE,
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `t_menu` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_menu_role
-- ----------------------------
DROP TABLE IF EXISTS `t_menu_role`;
CREATE TABLE `t_menu_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `mid` int(11) NULL DEFAULT NULL COMMENT '菜单id',
  `rid` int(11) NULL DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `mid`(`mid`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  CONSTRAINT `t_menu_role_ibfk_1` FOREIGN KEY (`mid`) REFERENCES `t_menu` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `t_menu_role_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `t_admin` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 747 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;



-- ----------------------------
-- Records of t_menu_role
-- ----------------------------
INSERT INTO `t_menu_role` VALUES (1, 7, 1);
INSERT INTO `t_menu_role` VALUES (2, 8, 1);
INSERT INTO `t_menu_role` VALUES (3, 9, 1);
INSERT INTO `t_menu_role` VALUES (4, 10, 1);
INSERT INTO `t_menu_role` VALUES (5, 11, 1);
INSERT INTO `t_menu_role` VALUES (6, 12, 1);
INSERT INTO `t_menu_role` VALUES (7, 13, 1);
INSERT INTO `t_menu_role` VALUES (8, 14, 1);
INSERT INTO `t_menu_role` VALUES (9, 15, 1);
INSERT INTO `t_menu_role` VALUES (10, 16, 1);
INSERT INTO `t_menu_role` VALUES (11, 17, 1);
INSERT INTO `t_menu_role` VALUES (12, 18, 1);
INSERT INTO `t_menu_role` VALUES (13, 19, 1);
INSERT INTO `t_menu_role` VALUES (14, 7, 2);
INSERT INTO `t_menu_role` VALUES (15, 8, 2);
INSERT INTO `t_menu_role` VALUES (16, 9, 2);
INSERT INTO `t_menu_role` VALUES (17, 10, 2);
INSERT INTO `t_menu_role` VALUES (18, 11, 2);
INSERT INTO `t_menu_role` VALUES (19, 12, 2);
INSERT INTO `t_menu_role` VALUES (20, 13, 2);
INSERT INTO `t_menu_role` VALUES (21, 14, 2);
INSERT INTO `t_menu_role` VALUES (22, 15, 2);
INSERT INTO `t_menu_role` VALUES (23, 16, 2);
INSERT INTO `t_menu_role` VALUES (24, 17, 2);
INSERT INTO `t_menu_role` VALUES (25, 18, 2);
INSERT INTO `t_menu_role` VALUES (26, 19, 2);
INSERT INTO `t_menu_role` VALUES (27, 7, 3);
INSERT INTO `t_menu_role` VALUES (28, 8, 3);
INSERT INTO `t_menu_role` VALUES (29, 9, 3);
INSERT INTO `t_menu_role` VALUES (30, 10, 3);
INSERT INTO `t_menu_role` VALUES (31, 11, 3);
INSERT INTO `t_menu_role` VALUES (32, 12, 3);
INSERT INTO `t_menu_role` VALUES (33, 13, 3);