<script setup>
import { useTemplateStore } from '../store/template.store'
import { onMounted, ref, watch } from 'vue'
import { bultens } from '../constants'
import NewBultenForm from '../components/NewBultenForm.vue'
const templateStore = useTemplateStore()

const selectedItems = ref(
  bultens
    .map((item) => templateStore.bultens.find((b) => b.url == item.url) && item)
    .filter((item) => item)
)
watch(
  () => selectedItems.value,
  () => {
    templateStore.setStorage(selectedItems.value)
  }
)
</script>

<template>
  <header>
    <v-row justify="center">
      <v-dialog v-model="templateStore.formDialog" scrollable width="auto">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">Ekle / Düzenle </v-btn>
        </template>
        <v-card>
          <v-card-title>Bültenler</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-checkbox
              v-for="item in bultens"
              :key="item"
              :label="item.name"
              :value="item"
              v-model="selectedItems"
              class="checkbox-bulten"
            />
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="actions">
            <v-btn color="red"> Kapat </v-btn>
            <v-btn>
              Ekle

              <v-overlay
                location="end top"
                origin="auto"
                activator="parent"
                location-strategy="connected"
                scroll-strategy="close"
              >
                <NewBultenForm />
              </v-overlay>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </header>
</template>

<style>
.checkbox-bulten {
  height: 35px;
}
.actions {
  display: flex;
  justify-content: space-between;
}
header {
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
