<template>
  <div class="condition-group">
    <div class="group-header">
      <n-checkbox
        style="width: 70px"
        v-model:checked="modelValue.notFlag"
      >NOT</n-checkbox>
      <n-select
        v-model:value="modelValue.logicType"
        :options="LOGIC_TYPE_OPTIONS"
        style="width: 80px"
      />
    </div>
    
    <div class="group-container">
      <div
        class="condition-item"
        v-for="(item, index) in modelValue.children"
        :key="index"
      >
        <!-- 如果是条件组 -->
        <condition-group
          v-if="item.logicType === LOGIC_TYPE_ENUM.AND"
          v-model="modelValue.children[index]"
          @remove="removeChild(index)"
        />
        <!-- 如果是条件项 -->
        <condition
          v-else
          v-model="modelValue.children[index]"
          @remove="removeChild(index)"
        />
      </div>
      <div class="group-footer">
        <n-button dashed @click="addCondition">加条件</n-button>
        <n-button dashed @click="addConditionGroup">加条件组</n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NCheckbox, NSelect, NIcon } from 'naive-ui'
import { LOGIC_TYPE_OPTIONS } from '../views/constant/field'
import { LOGIC_TYPE_ENUM } from '../views/types'
import type { ConditionItem } from '../views/types'
import Condition from './Condition.vue'

const props = defineProps<{
  modelValue: ConditionItem
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: ConditionItem): void
  (e: 'remove'): void
}>()

const addCondition = () => {
  props.modelValue.children?.push({
    columnName: undefined,
    columnValue: undefined,
    operator: undefined,
  })
}

const addConditionGroup = () => {
  props.modelValue.children?.push({
    logicType: LOGIC_TYPE_ENUM.AND,
    notFlag: false,
    children: [
      {
        columnName: undefined,
        columnValue: undefined,
        operator: undefined,
      }
    ]
  })
}

const removeChild = (index: number) => {
  props.modelValue.children?.splice(index, 1)
}
</script>

<style scoped lang="less">
.condition-group {
  border-radius: 2px;
  padding: 16px;
  margin: 8px 0;
  display: flex;
  flex-direction: row;

  .group-container {
    display: flex;
    flex-direction: column;
  }

  .group-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .group-content {
    margin-left: 24px;
  }

  .group-footer {
    margin-top: 16px;
    display: flex;
    gap: 8px;
  }
}
</style> 