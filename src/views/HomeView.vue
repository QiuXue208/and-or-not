<template>
  <div class="wrapper">
    <div class="operations-container" v-if="!formData?.children?.length">
      <n-button
        dashed
        @click="addCondition"
      >加条件</n-button>
      <n-button dashed @click="addConditionGroup">加条件组</n-button>
    </div>
    <template v-else>
      <condition-group
        v-model="formData"
        @remove="formData = undefined"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton } from 'naive-ui';
import { LOGIC_TYPE_ENUM } from './types';
import type { ConditionItem } from './types';
import ConditionGroup from '../components/ConditionGroup.vue';

const formData = ref<ConditionItem>()

const addCondition = () => {
  formData.value = {
    logicType: LOGIC_TYPE_ENUM.AND,
    notFlag: false,
    children: [
      {
        notFlag: false,
        columnName: undefined,
        columnValue: undefined,
        operator: undefined,
      }
    ]
  }
}

const addConditionGroup = () => {
  formData.value = {
    logicType: LOGIC_TYPE_ENUM.AND,
    notFlag: false,
    children: [
      {
        logicType: LOGIC_TYPE_ENUM.AND,
        notFlag: false,
        children: [
          {
            notFlag: false,
            columnName: undefined,
            columnValue: undefined,
            operator: undefined,
          }
        ]
      }
    ]
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  padding: 16px;
  width: 100%;

  .operations-container {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 16px;
    .n-button {
      flex: 1;
    }
  }
}
</style>