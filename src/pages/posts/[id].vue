<script setup lang="ts">
import Issue from '../../components/Issue.vue'
import FooterText from '../../components/FooterText.vue'
import Alert from '../../components/Alert.vue'

const props = defineProps<{ id: string }>()
const postId = computed(() => props.id)
</script>

<template>
  <main>
    <alert />
    <issue :id="postId" />
    <footer-text />
  </main>
</template>
