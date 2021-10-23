<template>
  <main>
    <h1>Spaces in Routine</h1>
    <alert />
    <issues />
    <footer-text />
  </main>
</template>

<script setup lang="ts">
import Issues from './components/Issues.vue'
import FooterText from './components/FooterText.vue'
import Alert from './components/Alert.vue'

useHead({
  title: 'おはようエンジニア',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。'
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'おはようエンジニア'
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: '平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。'
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'おはようエンジニア'
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: 'https://ohayo.nekohack.me/'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: '平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'おはようエンジニア'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image' // ex: summary, summary_large_image
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@jiyuujinlab'
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@jiyuujinlab'
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@jiyuujinlab'
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://ohayo.nekohack.me/og/ohayo-engineer.jpg',
    }
  ]
})
</script>
