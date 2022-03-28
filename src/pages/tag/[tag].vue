<script setup lang="ts">
import ArchivesView from '../../components/ArchivesView.vue'
import FooterText from '../../components/FooterText.vue'
import NavText from '../../components/NavText.vue'
import AlertView from '../../components/AlertView.vue'

const props = defineProps<{ tag: string }>()
const postTag = computed(() => props.tag)
</script>

<template>
  <main>
    <nav-text />
    <alert-view />
    <archives-view :tag="postTag" />
    <footer-text />
  </main>
</template>
