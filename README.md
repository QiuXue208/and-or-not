# AND-OR-NOT Condition Builder

一个基于 Vue 3 + TypeScript + Naive UI 的条件构建器组件。

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

## 使用方法

```vue
<template>
  <condition-group
    v-model="formData"
    @remove="formData = undefined"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ConditionItem } from './types'
import ConditionGroup from './components/ConditionGroup.vue'

const formData = ref<ConditionItem>()
</script>
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

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
