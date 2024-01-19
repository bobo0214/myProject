/**
 * 子菜单
 */
export default {
  framework: {
    menu_100: {
      icon: "profile",
      title: "通信",
      pageName: "FrameworkSocketIpc",
      params: {},
    },
    menu_101: {
      icon: "profile",
      title: "http服务",
      pageName: "FrameworkSocketHttpServer",
      params: {},
    },
    menu_102: {
      icon: "profile",
      title: "socket服务",
      pageName: "FrameworkSocketSocketServer",
      params: {},
    },
    menu_103: {
      icon: "profile",
      title: "json数据库",
      pageName: "FrameworkJsonDBIndex",
      params: {},
    },
    menu_104: {
      icon: "profile",
      title: "sqlite数据库",
      pageName: "FrameworkSqliteDBIndex",
      params: {},
    },
    menu_105: {
      icon: "profile",
      title: "任务",
      pageName: "FrameworkJobsIndex",
      params: {},
    },
    menu_106: {
      icon: "profile",
      title: "自动更新",
      pageName: "FrameworkUpdaterIndex",
      params: {},
    },
    menu_107: {
      icon: "profile",
      title: "软件调用",
      pageName: "FrameworkSoftwareIndex",
      params: {},
    },
    menu_108: {
      icon: "profile",
      title: "java",
      pageName: "FrameworkJavaIndex",
      params: {},
    },
    menu_109: {
      icon: "profile",
      title: "测试",
      pageName: "FrameworkTestApiIndex",
      params: {},
    },
  },
  os: {
    menu_100: {
      icon: "profile",
      title: "指令核",
      pageName: "OsCoreIndex",
      params: {},
      id: 1,
      nodeItemList: [
        {
          label: "3803指令核",
          value: {
            width: 120,
            height: 40,
            meta: {
              label: "3803指令核",
              name: "3803指令核",
            },
          },
        },
      ],
    },
    menu_101: {
      icon: "profile",
      title: "片内设备集",
      pageName: "OsCoreIndex",
      params: {},
      id: 2,
      nodeItemList: [
        {
          label: "3803片内设备集",
          value: {
            width: 120,
            height: 40,
            meta: {
              label: "3803片内设备集",
              name: "3803片内设备集",
            },
          },
        },
      ],
    },
    menu_102: {
      icon: "profile",
      title: "片外设备",
      pageName: "OsCoreIndex",
      params: {},
      id: 3,
      nodeItemList: [
        {
          label: "RS422",
          value: {
            width: 120,
            height: 40,
            meta: {
              label: "RS422",
              name: "RS422",
            },
          },
        },
      ],
    },
    menu_103: {
      icon: "profile",
      title: "虚拟网络端口",
      pageName: "OsCoreIndex",
      params: {},
      id: 4,
      nodeItemList: [
        {
          label: "DDS_Client",
          value: {
            width: 120,
            height: 40,
            meta: {
              label: "DDS_Client",
              name: "DDS_Client",
            },
          },
        },
      ],
    },
  },
  hardware: {
    menu_100: {
      icon: "profile",
      title: "Simulink",
      pageName: "HardwarePrinterIndex",
      params: {},
    },
    menu_101: {
      icon: "profile",
      title: "MWorks",
      pageName: "HardwarePrinterIndex",
      params: {},
    },
    menu_102: {
      icon: "profile",
      title: "虚拟网络端口",
      pageName: "HardwarePrinterIndex",
      params: {},
    },
  },
  effect: {
    menu_100: {
      icon: "profile",
      title: "视频播放器",
      pageName: "EffectVideoIndex",
      params: {},
    },
    menu_110: {
      icon: "profile",
      title: "登录",
      pageName: "EffectLoginIndex",
      params: {},
    },
  },
  cross: {
    menu_100: {
      icon: "profile",
      title: "go服务",
      pageName: "CrossGoIndex",
      params: {},
    },
  },
};
