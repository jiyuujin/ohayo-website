<script setup lang="ts">
import IssueView from '../../components/IssueView.vue'
import FooterText from '../../components/FooterText.vue'
import NavText from '../../components/NavText.vue'

import { currentDateLabelText } from '../../services/utilService'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
const postDateLabel = computed(() => currentDateLabelText(props.date))
</script>

<template>
  <main>
    <nav-text />
    <issue-view :date="postDate" />
    <footer-text />
  </main>
</template>
