<script setup lang="ts">
import Issue from '../../components/Issue.vue'
import FooterText from '../../components/FooterText.vue'
import Alert from '../../components/Alert.vue'

import { currentDateText } from '../../services/utilService'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
const postDateText = computed(() => currentDateText(props.date))

useHead({
  title: `おはようエンジニア in ${postDateText.value}`,
  meta: [
    {
      name: 'description',
      content: `${postDateText.value} に Twitter Spaces でお喋りした内容のメモを記録しています。`
    },
    {
      name: 'og:site_name',
      content: `おはようエンジニア in ${postDateText.value}`
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:description',
      content: `${postDateText.value} に Twitter Spaces でお喋りした内容のメモを記録しています。`
    },
    {
      name: 'og:title',
      content: `おはようエンジニア in ${postDateText.value}`
    },
    {
      name: 'og:url',
      content: 'https://ohayo.nekohack.me/'
    },
    {
      name: 'twitter:description',
      content: `${postDateText.value} に Twitter Spaces でお喋りした内容のメモを記録しています。`
    },
    {
      name: 'twitter:title',
      content: `おはようエンジニア in ${postDateText.value}`
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
