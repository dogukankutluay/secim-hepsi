<script setup>
import { onMounted, ref } from 'vue'
import { useTemplateStore } from '../store/template.store'

import DeleteIcon from '../assets/svg/delete.svg'
import MoveIcon from '../assets/svg/move.svg'
import DropSpaceIcon from '../assets/svg/drop-space.svg'

const templateStore = useTemplateStore()
const props = defineProps({
  bultenId: String,
  bultenName: String
})
const loading = ref(true)

const readySrc = `https://www.youtube.com/embed/${props.bultenId}?autoplay=${templateStore.autoplay}`
</script>

<template>
  <div class="ct-template">
    <div class="header-template">
      <div class="move-content">
        <img v-if="!templateStore.drag" :src="MoveIcon" class="move" />
      </div>
      <div class="bulten-name">{{ props.bultenName }}</div>
      <v-btn
        class="delete-btn"
        icon
        size="x-small"
        @click="templateStore.deleteBulten(props.bultenId)"
      >
        <img :src="DeleteIcon" />
      </v-btn>
    </div>
    <div class="template-bulten">
      <iframe
        :src="readySrc"
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div v-if="templateStore.drag" id="handle" class="drop-space">
        <img :src="DropSpaceIcon" />
      </div>
    </div>
  </div>
</template>

<style>
.drop-space {
  width: 100%;
  position: absolute;
  height: 100%;
  background: rgba(128, 128, 128, 0.486);
  display: flex;
  align-items: center;
  justify-content: center;
}
.drop-space img {
  width: 50%;
  height: 100%;
}

.header-template {
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  background: rgba(128, 128, 128, 0.293);
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
}
.header-template img {
  width: 15px;
}
.end-move {
  font-size: 12px;
}
.ct-template {
  width: 24%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}

.template-bulten {
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(128, 128, 128, 0.274);
  position: relative;
}
.template-bulten iframe {
  width: 100%;
  height: 100%;
}
</style>
