<script setup lang="ts">
import ArchivesView from '../../components/ArchivesView.vue'
import FooterText from '../../components/FooterText.vue'
import AlertView from '../../components/AlertView.vue'

const props = defineProps<{ tag: string }>()
const postTag = computed(() => props.tag)
</script>

<template>
  <main>
    <alert-view />
    <archives-view :tag="postTag" />
    <footer-text />
  </main>
</template>
