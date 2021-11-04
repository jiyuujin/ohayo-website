<script setup lang="ts">
import Issues from '../components/Issues.vue'
import FooterText from '../components/FooterText.vue'
import Alert from '../components/Alert.vue'

useHead({
  title: 'おはようエンジニア',
  meta: [
    {
      name: 'description',
      content: '平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。'
    },
    {
      name: 'og:site_name',
      content: 'おはようエンジニア'
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:description',
      content: '平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。'
    },
    {
      name: 'og:title',
      content: 'おはようエンジニア'
    },
    {
      name: 'og:url',
      content: 'https://ohayo.nekohack.me/'
    },
    {
      name: 'twitter:description',
      content: '平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。'
    },
    {
      name: 'twitter:title',
      content: 'おはようエンジニア'
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
    <h1>Spaces in Routine</h1>
    <alert />
    <issues />
    <footer-text />
  </main>
</template>
