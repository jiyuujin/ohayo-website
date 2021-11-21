<script setup lang="ts">
import Archives from '../../components/Archives.vue'
import FooterText from '../../components/FooterText.vue'
import Alert from '../../components/Alert.vue'

const props = defineProps<{ tag: string }>()
const postTag = computed(() => props.tag)
</script>

<template>
  <main>
    <alert />
    <archives :tag="postTag" />
    <footer-text />
  </main>
</template>
