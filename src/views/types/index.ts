// 逻辑类型
export enum LOGIC_TYPE_ENUM {
  AND = 0,
  OR = 1
}

// 操作符枚举
export enum OPERATOR_ENUM {
  // 等于
  EQUAL = '1',
  // 不等于
  NOT_EQUAL = '2',
  // 大于
  GREATER_THAN = '3',
  // 小于
  LESS_THAN = '4',
  // null
  IS_NULL = '5',
  // in
  IN = '6',
  // 大于等于
  GREATER_THAN_OR_EQUAL = '7',
  // 小于等于
  LESS_THAN_OR_EQUAL = '8',
  // regexp
  REGEXP = '9',
  // like
  LIKE = '10',
  // isEmpty
  IS_EMPTY = '11',
  // contains
  CONTAINS = '12',
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

// 将接口中的可选字段都变为可为 null
type NullableOptional<T> = {
  [P in keyof T]: T[P] | null | undefined;
};
export type ConditionItem = NullableOptional<
{
  id?: string;
  // 属性字段
  columnName?: string;
  // 属性名称
  columnValue?: string;
  // 逻辑操作类型
  logicType?: LOGIC_TYPE_ENUM;
  // 操作符
  operator?: OPERATOR_ENUM;
  // 是否取反
  notFlag?: boolean;
  // 操作类型code
  operateTypeCode?: OPERATE_TYPE_CODE_ENUM;
  // 数组类型
  arrayFlag?: number;
  // 属性描述
  attrDesc?: string;
  // 条件值输入框类型
  attrShowType?: 'input' | 'select';
  // 条件值列表
  dataAttrConstantDTOList?: any[];
  // 子节点
  children?: ConditionItem[];
}
> 
