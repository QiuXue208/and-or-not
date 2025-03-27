<template>
  <n-form
    ref="formRef"
    class="condition-item"
    :model="formData"
    :rules="rules"
  >
    <n-form-item :show-label="false" path="notFlag">
      <n-checkbox
        style="width: 70px;"
        v-model="formData.notFlag"
      >NOT</n-checkbox>
    </n-form-item>
    <n-form-item
      class="condition-item-column"
      :show-label="false"
      path="columnName"
    >
      <n-select
        v-model:value="formData.columnName"
        :options="columnOptions"
        clearable
        placeholder="请选择条件项"
        @update:value="handleColumnChange"
      />
    </n-form-item>
    <n-form-item
      class="condition-item-column"
      :show-label="false"
      path="operator"
    >
      <n-select
        v-model:value="formData.operator"
        :options="operatorOptions"
        placeholder="请选择操作符"
        clearable
      />
    </n-form-item>
    <n-form-item
      class="condition-item-column"
      :show-label="false"
      path="columnValue"
      :required="!disabledColumnValue"
      :rule="[{
        required: true,
        trigger: ['blur', 'change'],
        message: selectedColumn?.attrShowType === 'select' ? '请选择条件值' : '请输入条件值'
      }]"
    >
      <n-select
        v-if="selectedColumn?.attrShowType === 'select'"
        v-model:value="formData.columnValue"
        :options="selectedColumn?.dataAttrConstantDTOList || []"
        :disabled="disabledColumnValue"
        placeholder="请选择条件值"
        clearable
      />
      <n-input
        v-else
        v-model:value="formData.columnValue"
        placeholder="请输入条件值"
        clearable
        :disabled="disabledColumnValue"
      />
    </n-form-item>
    <n-form-item :show-label="false">
      <n-button text @click="$emit('remove')">
        <template #icon>
          <n-icon><trash /></n-icon>
          </template>
      </n-button>
    </n-form-item>
  </n-form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { NButton, NSelect, NInput, NIcon, NCheckbox, NForm,NFormItem } from 'naive-ui'
import { Trash } from '@vicons/ionicons5'
import { COLUMN_DATA } from '../views/constant/field'
import { STRING_OPERATORS, NUMBER_OPERATORS, TIME_OPERATORS, ARRAY_OPERATORS } from '../views/constant'
import { OPERATOR_ENUM, type ConditionItem } from '../views/types'

const props = defineProps<{
  modelValue: ConditionItem
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: ConditionItem): void
  (e: 'remove'): void
}>()

const selectedColumn = ref<ConditionItem>()
const formData = ref(props.modelValue)
const formRef = ref<InstanceType<typeof NForm>>()

const rules = ref({
  columnName: [{
    required: true,
    message: '请选择条件项',
    trigger: 'change'
  }],
  operator: [{
    required: true,
    message: '请选择操作符',
    trigger: 'change'
  }],
})

watch(formData, (newVal) => {
  emit('update:modelValue', newVal)
}, { deep: true })

// 转换字段数据为选项格式
const columnOptions = COLUMN_DATA.map(item => ({
  label: item.attrName,
  value: item.attrField,
  ...item
}))

// 禁用条件值
const disabledColumnValue = computed(() => {
  // 操作符是isEmpty、isNull的时候，禁用
  if (selectedColumn.value?.operator && [
    OPERATOR_ENUM.IS_EMPTY,
    OPERATOR_ENUM.IS_NULL
  ].indexOf(selectedColumn.value?.operator) !== -1) {
    return true
  }
  return false
})

// 根据字段类型获取对应的操作符选项
const operatorOptions = computed(() => {
  if (!selectedColumn.value) return []
  
  const operateTypeCode = selectedColumn.value.operateTypeCode
  if (operateTypeCode === 'operator_array_str') {
    return ARRAY_OPERATORS
  } else if (operateTypeCode === 'operator_int') {
    return NUMBER_OPERATORS
  } else if (operateTypeCode === 'operator_time') {
    return TIME_OPERATORS
  } else {
    return STRING_OPERATORS
  }
})


const handleColumnChange = (value: string) => {
  selectedColumn.value = columnOptions.find(
    item => item.value === value
  ) as ConditionItem
  formData.value.operator = undefined
  formData.value.columnValue = undefined
  formData.value.operateTypeCode = selectedColumn.value?.operateTypeCode
  formData.value.dataAttrConstantDTOList = selectedColumn.value?.dataAttrConstantDTOList || []
}

const validate = async () => {
  const res = await formRef.value?.validate()
  if (res) {
    return true
  }
  return false
}

defineExpose({
  validate,
})
</script>

<style scoped lang="less">
.condition-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  .n-form-item.condition-item-column {
    flex: 1;
  }
  .n-checkbox {
    background: #F5F5F5;
    border-radius: 2px;
    padding: 5px 4px;
    margin-right: 4px;
    white-space: nowrap;
  }
}
</style> 