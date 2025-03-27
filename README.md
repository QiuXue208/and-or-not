# AND-OR-NOT Condition Builder

一个基于 Vue 3 + TypeScript + Naive UI 的条件构建器组件。

## 功能特点
[预览地址](https://qiuxue208.github.io/and-or-not)

## 功能特点

- 支持条件组的嵌套
- 支持 AND/OR/NOT 逻辑操作
- 支持多种数据类型的条件项
- 支持动态添加/删除条件和条件组

## 项目设置

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 数据结构

```typescript
// 条件项
interface ConditionItem {
  // 字段名
  columnName?: string
  // 字段值
  columnValue?: string
  // 操作符
  operator?: OPERATOR_ENUM
  // 逻辑类型 (AND/OR)
  logicType?: LOGIC_TYPE_ENUM
  // 是否取反
  notFlag?: boolean
  // 子条件
  children?: ConditionItem[]
}
```
