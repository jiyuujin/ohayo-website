<script setup lang="ts">
import Issue from '../../components/Issue.vue'
import FooterText from '../../components/FooterText.vue'
import Alert from '../../components/Alert.vue'

import { currentDateText } from '../../services/utilService'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
const postDateText = computed(() => currentDateText(props.date))

useHead({
  title: postDateText,
  meta: [
    {
      name: 'description',
      content: 'おはようエンジニア'
    },
    {
      name: 'og:site_name',
      content: postDateText
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:description',
      content: 'おはようエンジニア'
    },
    {
      name: 'og:title',
      content: postDateText
    },
    {
      name: 'og:url',
      content: 'https://ohayo.nekohack.me/'
    },
    {
      name: 'twitter:description',
      content: 'おはようエンジニア'
    },
    {
      name: 'twitter:title',
      content: postDateText
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image' // ex: summary, summary_large_image
    },
    {
      name: 'twitter:site',
      content: '@jiyuujinlab'
    },
    {
      name: 'twitter:creator',
      content: '@jiyuujinlab'
    },
    {
      name: 'twitter:site',
      content: '@jiyuujinlab'
    },
    {
      name: 'twitter:image',
      content: 'https://ohayo.nekohack.me/og/ohayo-engineer.jpg',
    }
  ]
})
</script>

<template>
  <main>
    <alert />
    <issue :date="postDate" />
    <footer-text />
  </main>
</template>
