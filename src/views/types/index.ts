// 逻辑类型
export enum LOGIC_TYPE_ENUM {
  AND = 0,
  OR = 1
}

// 操作符枚举
export enum OPERATOR_ENUM {
  // 等于
  EQUAL = 1,
  // 不等于
  NOT_EQUAL = 2,
  // 大于
  GREATER_THAN = 3,
  // 小于
  LESS_THAN = 4,
  // null
  IS_NULL = 5,
  // in
  IN = 6,
  // 大于等于
  GREATER_THAN_OR_EQUAL = 7,
  // 小于等于
  LESS_THAN_OR_EQUAL = 8,
  // regexp
  REGEXP = 9,
  // like
  LIKE = 10,
  // isEmpty
  IS_EMPTY = 11,
  // contains
  CONTAINS = 12,
}

// 操作类型枚举
export enum OPERATE_TYPE_CODE_ENUM {
  // 整数
  INT = 'operator_int',
  // 字符串
  STRING = 'operator_str',
  // 时间
  TIME = 'operator_time',
  // 数组
  ARRAY = 'operator_array_str',
}