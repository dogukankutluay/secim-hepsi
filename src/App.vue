<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { bultens, KEY } from './constants'
import { useTemplateStore } from './store/template.store'
const templateStore = useTemplateStore()
onMounted(() => {
  const storageBultens = localStorage.getItem('bultens')
  if (!storageBultens) {
    templateStore.setStorage(bultens)
  }
})
</script>

<template>
  <RouterView />
</template>

<style></style>
