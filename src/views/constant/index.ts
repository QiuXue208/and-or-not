import { OPERATOR_ENUM } from '../types';

// 匹配字符串的操作符列表
export const STRING_OPERATORS = [
  {
    label: '=',
    value: OPERATOR_ENUM.EQUAL,
  },
  {
    label: 'regex',
    value: OPERATOR_ENUM.REGEXP,
  },
  {
    label: 'like  ',
    value: OPERATOR_ENUM.LIKE,
  },
  {
    label: 'isEmpty',
    value: OPERATOR_ENUM.IS_EMPTY,
  },
  {
    label: 'in',
    value: OPERATOR_ENUM.IN,
  },
  {
    label: '!=',
    value: OPERATOR_ENUM.NOT_EQUAL,
  },
  {
    label: 'isNull',
    value: OPERATOR_ENUM.IS_NULL,
  },
];

// 匹配数字的操作符列表
export const NUMBER_OPERATORS = [
  {
    label: '=',
    value: OPERATOR_ENUM.EQUAL,
  },
  {
    label: '!=',
    value: OPERATOR_ENUM.NOT_EQUAL,
  },
  {
    label: '>',
    value: OPERATOR_ENUM.GREATER_THAN,
  },
  {
    label: '<',
    value: OPERATOR_ENUM.LESS_THAN,
  },
  {
    label: '>=',
    value: OPERATOR_ENUM.GREATER_THAN_OR_EQUAL,
  },
  {
    label: '<=',
    value: OPERATOR_ENUM.LESS_THAN_OR_EQUAL,
  },
  {
    label: 'in',
    value: OPERATOR_ENUM.IN,
  },
  {
    label: 'isNull',
    value: OPERATOR_ENUM.IS_NULL,
  },
]

// 匹配日期时间的操作符列表
export const DATE_OPERATORS = [
  {
    label: '=',
    value: OPERATOR_ENUM.EQUAL,
  },
  {
    label: '>',
    value: OPERATOR_ENUM.GREATER_THAN,
  },
  {
    label: '<',
    value: OPERATOR_ENUM.LESS_THAN,
  },
  {
    label: 'isEmpty',
    value: OPERATOR_ENUM.IS_EMPTY,
  },
]

// 匹配数组类型的操作符列表
export const ARRAY_OPERATORS = [
  {
    label: 'contains',
    value: OPERATOR_ENUM.CONTAINS,
  },
  {
    label: 'isEmpty',
    value: OPERATOR_ENUM.IS_EMPTY,
  },
  {
    label: 'isNull',
    value: OPERATOR_ENUM.IS_NULL,
  },
]