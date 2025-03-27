<template>
  <JsonViewer
    :value="data"
    copyable
    boxed
  />
</template>

<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'

defineProps<{
  data: any
}>()
</script>
  