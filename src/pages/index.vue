<script setup lang="ts">
import Issues from '../components/Issues.vue'
import FooterText from '../components/FooterText.vue'
import Alert from '../components/Alert.vue'
import TweetButton from '../components/TweetButton.vue'
</script>

<template>
  <main>
    <h1>{{ `みんなで作るブログ` }}</h1>
    <tweet-button />
    <alert />
    <issues />
    <footer-text />
  </main>
</template>
