<template>
  <div class="home-view">
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
          ref="conditionGroupRef"
          v-model="formData"
          @remove="formData = undefined"
        />
      </template>
    </div>
    <n-button
      @click="handleSubmit"
    >提交</n-button>
    <n-button
      dashed
      @click="handleShowData"
    >{{ showData ? '收起数据' : '查看数据' }}</n-button>
    <JsonViewer
      v-if="showData"
      v-model:data="formData"
      :expand-depth="5"
      copyable
      boxed
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton } from 'naive-ui';
import { LOGIC_TYPE_ENUM } from './types';
import type { ConditionItem } from './types';
import ConditionGroup from '../components/ConditionGroup.vue';
import JsonViewer from 'vue-json-viewer';

const formData = ref<ConditionItem>();
const showData = ref(false);
const conditionGroupRef = ref<InstanceType<typeof ConditionGroup>>();

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

const handleShowData = () => {
  showData.value = !showData.value
}

const handleSubmit = () => {
  console.log(formData.value)
}
</script>

<style lang="less" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

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