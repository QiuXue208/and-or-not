<template>
  <div class="condition-group" v-if="formData.children?.length">
    <div class="group-logic">
      <div class="group-logic-content">
        <n-checkbox
          style="width: 70px"
          v-model="formData.notFlag"
        >NOT</n-checkbox>
        <n-select
          v-model:value="formData.logicType"
          :options="LOGIC_TYPE_OPTIONS"
          style="width: 80px"
        />
      </div>
    </div>
    
    <div class="group-content">
      <div
        class="group-content-item"
        v-for="(item, index) in formData.children"
        :key="index"
      >
        <!-- 如果是条件组 -->
        <condition-group
          v-if="item.children?.length"
          ref="conditionGroupRefs"
          v-model="formData.children[index]"
        />
        <!-- 如果是条件项 -->
        <condition
          v-else
          ref="conditionRefs"
          v-model="formData.children[index]"
          @remove="removeChild(index)"
        />
      </div>
      <div class="group-operators">
        <n-button dashed @click="addCondition">加条件</n-button>
        <n-button dashed @click="addConditionGroup">加条件组</n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NCheckbox, NSelect } from 'naive-ui'
import { LOGIC_TYPE_OPTIONS } from '../views/constant/field'
import { LOGIC_TYPE_ENUM } from '../views/types'
import type { ConditionItem } from '../views/types'
import Condition from './Condition.vue'
import { ref } from 'vue'

const props = defineProps<{
  modelValue: ConditionItem
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: ConditionItem): void
}>()

const formData = ref(props.modelValue)
const conditionGroupRefs = ref([])
const conditionRefs = ref([])

const addCondition = () => {
  formData.value.children?.push({
    columnName: undefined,
    columnValue: undefined,
    operator: undefined,
  })
  emit('update:modelValue', formData.value)
}

const addConditionGroup = () => {
  formData.value.children?.push({
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
  emit('update:modelValue', formData.value)
}

const removeChild = (index: number) => {
  formData.value.children?.splice(index, 1)
  emit('update:modelValue', formData.value)
}

const validateAll = async () => {
  let isValid = true;

  // 校验子条件组
  if (conditionGroupRefs.value.length > 0) {
    const groupResults = await Promise.all(
      conditionGroupRefs.value.map((item: { validateAll: () => Promise<boolean> }) => item.validateAll())
    );
    isValid = isValid && groupResults.every((result: boolean) => result === true);
  }

  // 校验条件项
  if (conditionRefs.value.length > 0) {
    try {
      const itemResults = await Promise.all(
        conditionRefs.value.map((item: { validate: () => Promise<boolean> }) => item.validate())
      );
      isValid = isValid && itemResults.every((result: boolean) => result === true);
    } catch (error) {
      isValid = false;
    }
  }

  return isValid; 
}

defineExpose({
  validateAll: validateAll,
})
</script>

<style scoped lang="less">
.condition-group {
  border-radius: 2px;
  margin: 8px 0;
  display: flex;
  flex-direction: row;

  .group-content {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 24px;
    flex: 1;
    .condition-item:first-child {
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        background-color: #fff;
        left: -55px;
        width: 50px;
        top: 0px;
        height: 20px;
        border-bottom: 1px solid #D9D9D9;
      }
    }
    .group-operators {
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        background-color: #fff;
        left: -55px;
        width: 50px;
        top: 15px;
        height: 20px;
        border-top: 1px solid #D9D9D9;
      }
    }
  }

  .group-logic {
    display: flex;
    align-items: center;
    flex-direction: column;
    &::before,
    &::after {
      position: relative;
      right: 30px;
      content: "";
      width: 100%;
      flex: 1;
      border-right: 1px solid #d9d9d9;
    }
    &-content {
      display: flex;
      align-items: center;
      .n-checkbox {
        background: #F5F5F5;
        border-radius: 2px;
        padding: 5px 4px;
        margin-right: 4px;
        white-space: nowrap;
      }
    }
  }

  .group-operators {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 8px;
    .n-button {
      flex: 1;
    }
  }
}
</style> 