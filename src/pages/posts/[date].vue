<script setup lang="ts">
import { useHead } from '@vueuse/head'

import Issue from '../../components/Issue.vue'
import FooterText from '../../components/FooterText.vue'
import Alert from '../../components/Alert.vue'

import { currentDateLabelText } from '../../services/utilService'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
const postDateLabel = computed(() => currentDateLabelText(props.date))

useHead({
  title: `${postDateLabel.value}の雑談記録`,
  meta: [
    {
      name: 'description',
      content: `${postDateLabel.value}に Twitter Spaces でお喋りした内容のメモを記録しています。`
    },
    {
      name: 'og:site_name',
      content: `${postDateLabel.value}の雑談記録`
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:description',
      content: `${postDateLabel.value}に Twitter Spaces でお喋りした内容のメモを記録しています。`
    },
    {
      name: 'og:title',
      content: `${postDateLabel.value}の雑談記録`
    },
    {
      name: 'og:url',
      content: `https://ohayo.nekohack.me/posts/${postDate.value}`
    },
    {
      name: 'twitter:description',
      content: `${postDateLabel.value}に Twitter Spaces でお喋りした内容のメモを記録しています。`
    },
    {
      name: 'twitter:title',
      content: `${postDateLabel.value}の雑談記録`
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
