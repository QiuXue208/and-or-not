import { LOGIC_TYPE_ENUM } from "../types"

export const COLUMN_DATA = [
  {
      "id": "1",
      "attrField": "tenantId",
      "attrName": "客户ID",
      "namePinyin": "khid",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "分桶键(哈希分桶)",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "2",
      "attrField": "tenantName",
      "attrName": "客户名称",
      "namePinyin": "khmc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "3",
      "attrField": "tenantProvinceCode",
      "attrName": "客户所在的省编码",
      "namePinyin": "khszdsbm",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "4",
      "attrField": "tenantCityCode",
      "attrName": "客户所在的市编码",
      "namePinyin": "khszdsbm",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "5",
      "attrField": "functionProductInstCode",
      "attrName": "客户在大平台实例编码",
      "namePinyin": "khzdptslbm",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "6",
      "attrField": "deviceType",
      "attrName": "数据来源设备类型",
      "namePinyin": "sjlysblx",
      "attrType": 5,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "参考【设备分类】：安全设备、终端设备、网络设备等",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "6",
              "attrField": "deviceType",
              "attrCode": "0",
              "attrValue": "其他设备"
          },
          {
              "attrId": "6",
              "attrField": "deviceType",
              "attrCode": "1",
              "attrValue": "安全设备"
          },
          {
              "attrId": "6",
              "attrField": "deviceType",
              "attrCode": "2",
              "attrValue": "终端设备"
          },
          {
              "attrId": "6",
              "attrField": "deviceType",
              "attrCode": "3",
              "attrValue": "网络设备"
          },
          {
              "attrId": "6",
              "attrField": "deviceType",
              "attrCode": "4",
              "attrValue": "IoT设备"
          }
      ],
      "childrenList": null
  },
  {
      "id": "11",
      "attrField": "deviceProductType",
      "attrName": "设备产品类型",
      "namePinyin": "sbcplx",
      "attrType": 5,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "参考【设备名称定义】：安全大脑、EDR、WAF",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "11",
              "attrField": "deviceProductType",
              "attrCode": "10001",
              "attrValue": "防火墙"
          },
          {
              "attrId": "11",
              "attrField": "deviceProductType",
              "attrCode": "10002",
              "attrValue": "IPS"
          },
          {
              "attrId": "11",
              "attrField": "deviceProductType",
              "attrCode": "10003",
              "attrValue": "IDS"
          },
          {
              "attrId": "11",
              "attrField": "deviceProductType",
              "attrCode": "10004",
              "attrValue": "WAF"
          },
      ],
      "childrenList": null
  },
  {
      "id": "14",
      "attrField": "deviceManageIp",
      "attrName": "设备管理地址IP",
      "namePinyin": "sbgldzip",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "IP类型，无需转成整型",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "16",
      "attrField": "deviceMachineID",
      "attrName": "设备ID",
      "namePinyin": "sbid",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "18",
      "attrField": "createTimestamp",
      "attrName": "创建时间",
      "namePinyin": "cjsj",
      "attrType": 2,
      "operateType": 5,
      "operateTypeCode": "operator_time",
      "arrayFlag": 0,
      "attrDesc": "时间戳，精确到毫秒；底层引擎创建告警的时间",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "19",
      "attrField": "sendTimestamp",
      "attrName": "上游发送时间",
      "namePinyin": "syfssj",
      "attrType": 2,
      "operateType": 5,
      "operateTypeCode": "operator_time",
      "arrayFlag": 0,
      "attrDesc": "时间戳，精确到毫秒；上游发送该日志的时间",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "20",
      "attrField": "receiveTimestamp",
      "attrName": "接收时间",
      "namePinyin": "jssj",
      "attrType": 2,
      "operateType": 5,
      "operateTypeCode": "operator_time",
      "arrayFlag": 0,
      "attrDesc": "时间戳，精确到毫秒；MSSP接收到该告警的时间",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "21",
      "attrField": "insertTimestamp",
      "attrName": "入库时间",
      "namePinyin": "rksj",
      "attrType": 2,
      "operateType": 5,
      "operateTypeCode": "operator_time",
      "arrayFlag": 0,
      "attrDesc": "时间戳，精确到毫秒；MSSP持久化数据的时间",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "22",
      "attrField": "updateTimestamp",
      "attrName": "更新时间",
      "namePinyin": "gxsj",
      "attrType": 2,
      "operateType": 5,
      "operateTypeCode": "operator_time",
      "arrayFlag": 0,
      "attrDesc": "时间戳，精确到毫秒；如有更新记录该时间",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "24",
      "attrField": "srcSecurityZone",
      "attrName": "源安全域",
      "namePinyin": "yaqy",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "25",
      "attrField": "srcEnrichSecZone",
      "attrName": "源富化安全域",
      "namePinyin": "yfhaqy",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "26",
      "attrField": "srcIpAddress",
      "attrName": "源IP",
      "namePinyin": "yip",
      "attrType": 2,
      "operateType": 3,
      "operateTypeCode": "operator_ip",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "28",
      "attrField": "srcIsIpv6",
      "attrName": "源IP是否IPv6",
      "namePinyin": "yipsfipv6",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "0：否，1：是",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "28",
              "attrField": "srcIsIpv6",
              "attrCode": "0",
              "attrValue": "否"
          },
          {
              "attrId": "28",
              "attrField": "srcIsIpv6",
              "attrCode": "1",
              "attrValue": "是"
          }
      ],
      "childrenList": null
  },
  {
      "id": "29",
      "attrField": "srcPort",
      "attrName": "源端口",
      "namePinyin": "ydk",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "30",
      "attrField": "srcGeoRegion",
      "attrName": "源地理区域",
      "namePinyin": "ydlqy",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "31",
      "attrField": "srcGeoCountry",
      "attrName": "源地理国家",
      "namePinyin": "ydlgj",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "32",
      "attrField": "srcGeoProvince",
      "attrName": "源地理省城",
      "namePinyin": "ydlsc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "33",
      "attrField": "srcGeoCity",
      "attrName": "源地理城市",
      "namePinyin": "ydlcs",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "34",
      "attrField": "srcGeoCounty",
      "attrName": "源地理市县",
      "namePinyin": "ydlsx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "35",
      "attrField": "srcGeoLatitude",
      "attrName": "源纬度信息",
      "namePinyin": "ywdxx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "36",
      "attrField": "srcGeoLongitude",
      "attrName": "源经度信息",
      "namePinyin": "yjdxx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "37",
      "attrField": "srctiName",
      "attrName": "源威胁情报库名称",
      "namePinyin": "ywxqbkmc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "参考【威胁情报库名称定义】：微步、电信自研、vt",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "38",
      "attrField": "srcTiType",
      "attrName": "源情报类型",
      "namePinyin": "yqblx",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "参考【威胁情报类型定义】：IP、IP-Port、Domian、URL、Hash",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "38",
              "attrField": "srcTiType",
              "attrCode": "1",
              "attrValue": "IP"
          },
          {
              "attrId": "38",
              "attrField": "srcTiType",
              "attrCode": "2",
              "attrValue": "IP:Port"
          },
          {
              "attrId": "38",
              "attrField": "srcTiType",
              "attrCode": "3",
              "attrValue": "Domain"
          },
      ],
      "childrenList": null
  },
  {
      "id": "39",
      "attrField": "srcIoc",
      "attrName": "源IOC",
      "namePinyin": "yioc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "IOC",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "40",
      "attrField": "srcIocType",
      "attrName": "源IOC类型",
      "namePinyin": "yioclx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "矿池、cc、黑灰产、勒索",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "41",
      "attrField": "srcIocLevel",
      "attrName": "源IOC级别",
      "namePinyin": "yiocjb",
      "attrType": 5,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "42",
      "attrField": "srcIocTag",
      "attrName": "源IOC情报标签",
      "namePinyin": "yiocqbbq",
      "attrType": 1,
      "operateType": 7,
      "operateTypeCode": "operator_array_str",
      "arrayFlag": 1,
      "attrDesc": "原始日志中目的情报标签",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "43",
      "attrField": "srcIocConfidence",
      "attrName": "源IOC置信度",
      "namePinyin": "yioczxd",
      "attrType": 5,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "44",
      "attrField": "srcAssetName",
      "attrName": "源资产名",
      "namePinyin": "yzcm",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "45",
      "attrField": "srcAssetId",
      "attrName": "源资产ID",
      "namePinyin": "yzcid",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "46",
      "attrField": "srcAssetType",
      "attrName": "源资产一级分类",
      "namePinyin": "yzcyjfl",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "46",
              "attrField": "srcAssetType",
              "attrCode": "0",
              "attrValue": "其他"
          },
          {
              "attrId": "46",
              "attrField": "srcAssetType",
              "attrCode": "1",
              "attrValue": "安全类"
          },
          {
              "attrId": "46",
              "attrField": "srcAssetType",
              "attrCode": "2",
              "attrValue": "主机类"
          },
      ],
      "childrenList": null
  },
  {
      "id": "47",
      "attrField": "srcAssetSubType",
      "attrName": "源资产二级分类",
      "namePinyin": "yzcejfl",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "47",
              "attrField": "srcAssetSubType",
              "attrCode": "0",
              "attrValue": "未知"
          },
          {
              "attrId": "47",
              "attrField": "srcAssetSubType",
              "attrCode": "10000",
              "attrValue": "安全大脑"
          },
          {
              "attrId": "47",
              "attrField": "srcAssetSubType",
              "attrCode": "10001",
              "attrValue": "防火墙系统"
          },
          {
              "attrId": "47",
              "attrField": "srcAssetSubType",
              "attrCode": "10002",
              "attrValue": "入侵防御系统IPS"
          },
          {
              "attrId": "47",
              "attrField": "srcAssetSubType",
              "attrCode": "10003",
              "attrValue": "入侵检测系统IDS"
          },
      ],
      "childrenList": null
  },
  {
      "id": "48",
      "attrField": "srcAssetServiceLevel",
      "attrName": "源资产服务等级",
      "namePinyin": "yzcfwdj",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "是否在服务范围内等服务等级标识",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "48",
              "attrField": "srcAssetServiceLevel",
              "attrCode": "0",
              "attrValue": "否"
          },
          {
              "attrId": "48",
              "attrField": "srcAssetServiceLevel",
              "attrCode": "1",
              "attrValue": "是"
          }
      ],
      "childrenList": null
  },
  {
      "id": "49",
      "attrField": "srcAssetImportance",
      "attrName": "源资产重要性",
      "namePinyin": "yzczyx",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "49",
              "attrField": "srcAssetImportance",
              "attrCode": "0",
              "attrValue": "未知"
          },
          {
              "attrId": "49",
              "attrField": "srcAssetImportance",
              "attrCode": "1",
              "attrValue": "一般资产（Normal）"
          },
          {
              "attrId": "49",
              "attrField": "srcAssetImportance",
              "attrCode": "2",
              "attrValue": "重要资产（Important）"
          },
          {
              "attrId": "49",
              "attrField": "srcAssetImportance",
              "attrCode": "3",
              "attrValue": "核心资产（Core）"
          }
      ],
      "childrenList": null
  },
  {
      "id": "50",
      "attrField": "srcAssetLabels",
      "attrName": "源资产标签",
      "namePinyin": "yzcbq",
      "attrType": 1,
      "operateType": 7,
      "operateTypeCode": "operator_array_str",
      "arrayFlag": 1,
      "attrDesc": "[]",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "51",
      "attrField": "dstSecurityZone",
      "attrName": "目的安全域",
      "namePinyin": "mdaqy",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "52",
      "attrField": "dstEnrichSecZone",
      "attrName": "目的富化安全域",
      "namePinyin": "mdfhaqy",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "54",
      "attrField": "dstIpAddressStr",
      "attrName": "目的IP_字符串",
      "namePinyin": "mdip_zfc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "55",
      "attrField": "dstIsIpv6",
      "attrName": "目的IP是否IPv6",
      "namePinyin": "mdipsfipv6",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "0：否，1：是",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "55",
              "attrField": "dstIsIpv6",
              "attrCode": "0",
              "attrValue": "否"
          },
          {
              "attrId": "55",
              "attrField": "dstIsIpv6",
              "attrCode": "1",
              "attrValue": "是"
          }
      ],
      "childrenList": null
  },
  {
      "id": "56",
      "attrField": "dstPort",
      "attrName": "目的端口",
      "namePinyin": "mddk",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "57",
      "attrField": "dstGeoRegion",
      "attrName": "目的地理区域",
      "namePinyin": "mddlqy",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "58",
      "attrField": "dstGeoCountry",
      "attrName": "目的地理国家",
      "namePinyin": "mddlgj",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "59",
      "attrField": "dstGeoProvince",
      "attrName": "目的地理省城",
      "namePinyin": "mddlsc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "60",
      "attrField": "dstGeoCity",
      "attrName": "目的地理城市",
      "namePinyin": "mddlcs",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "61",
      "attrField": "dstGeoCounty",
      "attrName": "目的地理市县",
      "namePinyin": "mddlsx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "62",
      "attrField": "dstGeoLatitude",
      "attrName": "目的纬度信息",
      "namePinyin": "mdwdxx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "63",
      "attrField": "dstGeoLongitude",
      "attrName": "目的经度信息",
      "namePinyin": "mdjdxx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "64",
      "attrField": "dstTiName",
      "attrName": "目的威胁情报库名称",
      "namePinyin": "mdwxqbkmc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "参考【威胁情报库名称定义】：微步、电信自研、vt",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "65",
      "attrField": "dstTiType",
      "attrName": "目的情报类型",
      "namePinyin": "mdqblx",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "参考【威胁情报类型定义】：IP、IP-Port、Domian、URL、Hash",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "66",
      "attrField": "dstIoc",
      "attrName": "目的IOC",
      "namePinyin": "mdioc",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "IOC",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "67",
      "attrField": "dstIocType",
      "attrName": "目的IOC类型",
      "namePinyin": "mdioclx",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "矿池、cc、黑灰产、勒索",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "68",
      "attrField": "dstIocLevel",
      "attrName": "目的IOC级别",
      "namePinyin": "mdiocjb",
      "attrType": 5,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "69",
      "attrField": "dstIocTag",
      "attrName": "目的IOC情报标签",
      "namePinyin": "mdiocqbbq",
      "attrType": 1,
      "operateType": 7,
      "operateTypeCode": "operator_array_str",
      "arrayFlag": 1,
      "attrDesc": "原始日志中目的情报标签",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "70",
      "attrField": "dstIocConfidence",
      "attrName": "目的IOC置信度",
      "namePinyin": "mdioczxd",
      "attrType": 5,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "71",
      "attrField": "dstAssetName",
      "attrName": "目的资产名",
      "namePinyin": "mdzcm",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "72",
      "attrField": "dstAssetId",
      "attrName": "目的资产ID",
      "namePinyin": "mdzcid",
      "attrType": 1,
      "operateType": 1,
      "operateTypeCode": "operator_str",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "input",
      "dataAttrConstantDTOList": null,
      "childrenList": null
  },
  {
      "id": "73",
      "attrField": "dstAssetType",
      "attrName": "目的资产一级分类",
      "namePinyin": "mdzcyjfl",
      "attrType": 2,
      "operateType": 2,
      "operateTypeCode": "operator_int",
      "arrayFlag": 0,
      "attrDesc": "\n",
      "attrShowType": "select",
      "dataAttrConstantDTOList": [
          {
              "attrId": "73",
              "attrField": "dstAssetType",
              "attrCode": "0",
              "attrValue": "其他"
          },
          {
              "attrId": "73",
              "attrField": "dstAssetType",
              "attrCode": "1",
              "attrValue": "安全类"
          },
          {
              "attrId": "73",
              "attrField": "dstAssetType",
              "attrCode": "2",
              "attrValue": "主机类"
          },
          {
              "attrId": "73",
              "attrField": "dstAssetType",
              "attrCode": "3",
              "attrValue": "网络类"
          },
          {
              "attrId": "73",
              "attrField": "dstAssetType",
              "attrCode": "4",
              "attrValue": "IoT类"
          },
          {
              "attrId": "73",
              "attrField": "dstAssetType",
              "attrCode": "5",
              "attrValue": "应用类"
          },
          {
              "attrId": "73",
              "attrField": "dstAssetType",
              "attrCode": "6",
              "attrValue": "审计组件"
          }
      ],
      "childrenList": null
  },
]

export const LOGIC_TYPE_OPTIONS = [
  {
    label: 'AND',
    value: LOGIC_TYPE_ENUM.AND
  },
  {
    label: 'OR',
    value: LOGIC_TYPE_ENUM.OR
  }
]