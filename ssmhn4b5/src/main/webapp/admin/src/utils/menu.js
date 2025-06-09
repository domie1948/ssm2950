const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "学生",
                    "menuJump": "列表",
                    "tableName": "xuesheng"
                }],
                "menu": "学生管理"
            }, {
                "child": [{
                    "buttons": ["查看", "删除", "审核"],
                    "menu": "社团申请信息",
                    "menuJump": "列表",
                    "tableName": "shetuanshenqingxinxi"
                }],
                "menu": "社团申请信息管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "校园社团",
                    "menuJump": "列表",
                    "tableName": "xiaoyuanshetuan"
                }],
                "menu": "校园社团管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "社团活动",
                    "menuJump": "列表",
                    "tableName": "shetuanhuodong"
                }],
                "menu": "社团活动管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "会员",
                    "menuJump": "列表",
                    "tableName": "huiyuan"
                }],
                "menu": "会员管理"
            }, {
                "child": [{
                    "buttons": ["查看", "审核", "删除"],
                    "menu": "活动参与",
                    "menuJump": "列表",
                    "tableName": "huodongcanyu"
                }],
                "menu": "活动参与管理"
            }, {
                "child": [{
                    "buttons": ["添加会员", "查看", "审核", "删除"],
                    "menu": "会员申请",
                    "menuJump": "列表",
                    "tableName": "huiyuanshenqing"
                }],
                "menu": "会员申请管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "校园资讯",
                    "tableName": "news"
                }, {
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "在线咨询",
                    "tableName": "chat"
                }, {
                    "buttons": ["查看", "删除", "修改"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }],
                "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "删除", "修改"],
                    "menu": "社团申请信息列表",
                    "menuJump": "列表",
                    "tableName": "shetuanshenqingxinxi"
                }],
                "menu": "社团申请信息模块"
            }, {
                "child": [{
                    "buttons": ["查看", "加入社团"],
                    "menu": "校园社团列表",
                    "menuJump": "列表",
                    "tableName": "xiaoyuanshetuan"
                }],
                "menu": "校园社团模块"
            }, {
                "child": [{
                    "buttons": ["查看", "报名参加"],
                    "menu": "社团活动列表",
                    "menuJump": "列表",
                    "tableName": "shetuanhuodong"
                }],
                "menu": "社团活动模块"
            }, {
                "child": [{
                    "buttons": ["查看"],
                    "menu": "活动参与列表",
                    "menuJump": "列表",
                    "tableName": "huodongcanyu"
                }],
                "menu": "活动参与模块"
            }, {
                "child": [{
                    "buttons": ["新增", "查看"],
                    "menu": "会员申请列表",
                    "menuJump": "列表",
                    "tableName": "huiyuanshenqing"
                }],
                "menu": "会员申请模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "校园社团",
                    "menuJump": "列表",
                    "tableName": "xiaoyuanshetuan"
                }],
                "menu": "校园社团管理"
            }, {
                "child": [{
                    "buttons": ["查看"],
                    "menu": "社团活动",
                    "menuJump": "列表",
                    "tableName": "shetuanhuodong"
                }],
                "menu": "社团活动管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "会员申请",
                    "menuJump": "列表",
                    "tableName": "huiyuanshenqing"
                }],
                "menu": "会员申请管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "删除", "修改"],
                    "menu": "社团申请信息列表",
                    "menuJump": "列表",
                    "tableName": "shetuanshenqingxinxi"
                }],
                "menu": "社团申请信息模块"
            }, {
                "child": [{
                    "buttons": ["查看", "加入社团"],
                    "menu": "校园社团列表",
                    "menuJump": "列表",
                    "tableName": "xiaoyuanshetuan"
                }],
                "menu": "校园社团模块"
            }, {
                "child": [{
                    "buttons": ["查看", "报名参加"],
                    "menu": "社团活动列表",
                    "menuJump": "列表",
                    "tableName": "shetuanhuodong"
                }],
                "menu": "社团活动模块"
            }, {
                "child": [{
                    "buttons": ["查看"],
                    "menu": "活动参与列表",
                    "menuJump": "列表",
                    "tableName": "huodongcanyu"
                }],
                "menu": "活动参与模块"
            }, {
                "child": [{
                    "buttons": ["新增", "查看"],
                    "menu": "会员申请列表",
                    "menuJump": "列表",
                    "tableName": "huiyuanshenqing"
                }],
                "menu": "会员申请模块"
            }],
            "hasBackLogin": "否",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "学生",
            "tableName": "xuesheng"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["查看", "删除", "修改"],
                    "menu": "社团申请信息",
                    "menuJump": "列表",
                    "tableName": "shetuanshenqingxinxi"
                }],
                "menu": "社团申请信息管理"
            }, {
                "child": [{
                    "buttons": ["查看", "加入社团"],
                    "menu": "校园社团",
                    "menuJump": "列表",
                    "tableName": "xiaoyuanshetuan"
                }],
                "menu": "校园社团管理"
            }, {
                "child": [{
                    "buttons": ["查看", "报名参加"],
                    "menu": "社团活动",
                    "menuJump": "列表",
                    "tableName": "shetuanhuodong"
                }],
                "menu": "社团活动管理"
            }, {
                "child": [{
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "活动参与",
                    "menuJump": "列表",
                    "tableName": "huodongcanyu"
                }],
                "menu": "活动参与管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "删除", "修改"],
                    "menu": "社团申请信息列表",
                    "menuJump": "列表",
                    "tableName": "shetuanshenqingxinxi"
                }],
                "menu": "社团申请信息模块"
            }, {
                "child": [{
                    "buttons": ["查看", "加入社团"],
                    "menu": "校园社团列表",
                    "menuJump": "列表",
                    "tableName": "xiaoyuanshetuan"
                }],
                "menu": "校园社团模块"
            }, {
                "child": [{
                    "buttons": ["查看", "报名参加"],
                    "menu": "社团活动列表",
                    "menuJump": "列表",
                    "tableName": "shetuanhuodong"
                }],
                "menu": "社团活动模块"
            }, {
                "child": [{
                    "buttons": ["查看"],
                    "menu": "活动参与列表",
                    "menuJump": "列表",
                    "tableName": "huodongcanyu"
                }],
                "menu": "活动参与模块"
            }, {
                "child": [{
                    "buttons": ["新增", "查看"],
                    "menu": "会员申请列表",
                    "menuJump": "列表",
                    "tableName": "huiyuanshenqing"
                }],
                "menu": "会员申请模块"
            }],
            "hasBackLogin": "否",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "会员",
            "tableName": "huiyuan"
        }]
    }
}
export default menu;
