<template>
  <div class="condition-item">
    <n-checkbox
      style="width: 70px;"
      v-model="modelValue.notFlag"
    >NOT</n-checkbox>
    <n-select
      v-model:value="modelValue.columnName"
      :options="columnOptions"
      placeholder="请选择条件项"
      style="width: 200px"
      @update="handleColumnChange"
    />
    <n-select
      v-model:value="modelValue.operator"
      :options="operatorOptions"
      placeholder="请选择"
      style="width: 120px"
    />
    <n-select
      v-if="selectedColumn?.attrShowType === 'select'"
      v-model:value="modelValue.columnValue"
      :options="selectedColumn?.dataAttrConstantDTOList || []"
      placeholder="请选择条件值"
      style="width: 200px"
    />
    <n-input
      v-else
      v-model:value="modelValue.columnValue"
      placeholder="请输入条件值"
      style="width: 200px"
    />
    <n-button text @click="$emit('remove')">
      <template #icon>
        <n-icon><trash /></n-icon>
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { NButton, NSelect, NInput, NIcon, NCheckbox } from 'naive-ui'
import { Trash } from '@vicons/ionicons5'
import { COLUMN_DATA } from '../views/constant/field'
import { STRING_OPERATORS, NUMBER_OPERATORS, DATE_OPERATORS, ARRAY_OPERATORS } from '../views/constant'
import type { ConditionItem } from '../views/types'

const props = defineProps<{
  modelValue: ConditionItem
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: ConditionItem): void
  (e: 'remove'): void
}>()

const selectedColumn = ref<ConditionItem>()

// 转换字段数据为选项格式
const columnOptions = COLUMN_DATA.map(item => ({
  label: item.attrName,
  value: item.attrField,
  ...item
}))

// 根据字段类型获取对应的操作符选项
const operatorOptions = computed(() => {
  if (!selectedColumn.value) return []
  
  const operateTypeCode = selectedColumn.value.operateTypeCode
  if (operateTypeCode === 'operator_array_str') {
    return ARRAY_OPERATORS
  } else if (operateTypeCode === 'operator_int') {
    return NUMBER_OPERATORS
  } else if (operateTypeCode === 'operator_time') {
    return DATE_OPERATORS
  } else {
    return STRING_OPERATORS
  }
})


const handleColumnChange = (value: string) => {
  selectedColumn.value = columnOptions.find(
    item => item.value === value
  ) as ConditionItem
  props.modelValue.operator = undefined
  props.modelValue.columnValue = undefined
  props.modelValue.dataAttrConstantDTOList = []
}
</script>

<style scoped lang="less">
.condition-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
}
</style> 