<script setup lang="ts">
import Issue from '../../components/Issue.vue'
import FooterText from '../../components/FooterText.vue'
import Alert from '../../components/Alert.vue'

import { currentDateText } from '../../services/utilService'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
const postDateText = computed(() => currentDateText(props.date))
</script>

<template>
  <main>
    <alert />
    <issue :date="postDate" />
    <footer-text />
  </main>
</template>
