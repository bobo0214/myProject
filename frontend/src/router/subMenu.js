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
            height: 60,
            meta: {
              label: "3803指令核",
              name: "3803指令核",
              accept: ["3803片内设备集"],
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
            height: 60,
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
            height: 60,
            meta: {
              label: "RS422",
              name: "RS422",
            },
          },
        },
        {
          label: "1553B",
          value: {
            width: 120,
            height: 60,
            meta: {
              label: "1553B",
              name: "1553B",
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
            height: 60,
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
      id: 1,
      nodeItemList: [
        {
          label: "四轴飞行器模型",
          value: {
            width: 120,
            height: 60,
            meta: {
              label: "四轴飞行器模型",
              name: "四轴飞行器模型",
            },
          },
        },
        {
          label: "四旋翼植物",
          value: {
            width: 120,
            height: 60,
            meta: {
              label: "四旋翼植物",
              name: "四旋翼植物",
            },
          },
        },
        {
          label: "控制力矩陀螺模型",
          value: {
            width: 120,
            height: 60,
            meta: {
              label: "控制力矩陀螺模型",
              name: "控制力矩陀螺模型",
            },
          },
        },
        {
          label: "串口",
          value: {
            width: 80,
            height: 80,
            bacColor: "#DEC6BA",
            meta: {
              label: "串口",
              name: "串口",
            },
          },
        },
        {
          label: "AD",
          value: {
            width: 80,
            height: 80,
            bacColor:"#BCDBC1",
            meta: {
              label: "AD",
              name: "AD",
            },
          },
        },
        {
          label: "DA",
          value: {
            width: 80,
            height: 80,
            bacColor:"#B9C9E6",
            meta: {
              label: "DA",
              name: "DA",
            },
          },
        },
        {
          label: "1553B",
          value: {
            width: 80,
            height: 40,
            bacColor:"#D2B7E0",
            meta: {
              label: "1553B",
              name: "1553B",
            },
          },
        },
      ],
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
      id: "menu_100",
      icon: "profile",
      title: "遥控遥测",
      pageName: "CrossGoIndex",
      params: {},
    },
    menu_101: {
      id: "menu_101",
      icon: "profile",
      title: "模型参数监控",
      pageName: "CrossMonitorIndex",
      params: {},
    },
    menu_102: {
      id: "menu_102",
      icon: "profile",
      title: "节点数据处理",
      pageName: "CrossGoIndex",
      params: {},
    },
    menu_103: {
      id: "menu_103",
      icon: "profile",
      title: "仿真控制",
      pageName: "CrossControlIndex",
      params: {},
    },
    menu_104: {
      id: "menu_104",
      icon: "profile",
      title: "一键启动",
      pageName: "CrossGoIndex",
      params: {},
    },
  },
};
