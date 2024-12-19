<script setup>
import ScrollPane from './components/ScrollPane.vue'
import TabItem from './components/TabItem.vue'
import TabsOperation from './components/TabsOperation.vue'
</script>

<template>
  <div
    h="[38px]"
    border-b="solid 1px [var(--el-border-color)]"
    flex-0
    flex
    flex-shrink-0
    items-end
  >
    <scroll-pane>
      <tab-item
        :current="true"
        tab-name="Test_1"
      />
      <tab-item tab-name="Test_2" />
    </scroll-pane>
    <tabs-operation />
  </div>
</template>
