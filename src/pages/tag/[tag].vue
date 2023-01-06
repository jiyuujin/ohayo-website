<script setup lang="ts">
import ArchivesView from '../../components/ArchivesView.vue'
import FooterText from '../../components/FooterText.vue'
import NavText from '../../components/NavText.vue'

const props = defineProps<{ tag: string }>()
const postTag = computed(() => props.tag)
</script>

<template>
  <main>
    <nav-text />
    <archives-view :tag="postTag" />
    <footer-text />
  </main>
</template>
