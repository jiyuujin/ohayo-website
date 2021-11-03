<script setup lang="ts">
import Issue from '../../components/Issue.vue'
import FooterText from '../../components/FooterText.vue'
import Alert from '../../components/Alert.vue'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
</script>

<template>
  <main>
    <alert />
    <issue :date="postDate" />
    <footer-text />
  </main>
</template>
