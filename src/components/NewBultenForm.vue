<script setup>
import { ref } from 'vue'
import { bultens } from '../constants'
import { useTemplateStore } from '../store/template.store'

const templateStore = useTemplateStore()

const url = ref('')
const name = ref('')
const refere = 'https://www.youtube.com/watch?v=-L'

const rules = {
  link: [
    (value) => {
      if (value?.length > refere.length) return true
      return 'Karakter uzunluğu yetersiz.'
    },
    (value) => {
      if (value.includes('youtube') || value.includes('watch')) return true
      return 'Lütfen sadece YouTube linki ekleyiniz.'
    }
  ],
  bultenName: [
    (value) => {
      if (value?.length) return true

      return 'Karakter uzunluğu yetersiz.'
    }
  ]
}

const submitForm = () => {
  const body = {
    url: url.value,
    name: name.value
  }

  if (bultens.length === templateStore.bultens.length) {
    alert('Lütfen 1 adet bülten çıkartınız !')
  } else {
    templateStore.addBulten(body)
  }
}
</script>
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="submitForm">
      <v-text-field
        type="text"
        v-model="url"
        label="YouTube Link"
        :rules="rules.link"
      ></v-text-field>
      <v-text-field
        type="text"
        v-model="name"
        label="Bülten İsmi"
        :rules="rules.bultenName"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">KAYDET</v-btn>
    </v-form>
  </v-sheet>
</template>
<style scoped></style>
