<script setup lang="ts">
import Issues from '../components/Issues.vue'
import FooterText from '../components/FooterText.vue'
import Alert from '../components/Alert.vue'
</script>

<template>
  <main>
    <h1>{{ `みんなで作るブログ` }}</h1>
    <h2>{{ `#ohayo_engineer` }}</h2>
    <p>{{ `平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。` }}</p>
    <alert />
    <issues />
    <footer-text />
  </main>
</template>
