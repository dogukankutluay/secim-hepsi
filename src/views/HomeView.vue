<script setup>
import TemplateBulten from '../components/TemplateBulten.vue'
import TemplateHeader from '../components/TemplateHeader.vue'

import { ref, onMounted, watch } from 'vue'
import draggable from 'vuedraggable'
import { useTemplateStore } from '../store/template.store'

const templateStore = useTemplateStore()

const readyBultens = templateStore.bultens
const drag = ref(false)

watch(
  () => templateStore.bultens,
  (now) => {
    templateStore.setStorage(now)
  }
)
</script>

<template>
  <TemplateHeader />

  <draggable
    @start="templateStore.drag = true"
    @end="templateStore.drag = false"
    class="container"
    v-model="templateStore.bultens"
    item-key="url"
    :options="{ handle: '#handle' }"
  >
    <template #item="{ element }">
      <TemplateBulten :bultenId="element.url" :bultenName="element.name" />
    </template>
  </draggable>
</template>

<style>
.container {
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
</style>
