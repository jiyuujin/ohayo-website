<script setup lang="ts">
import Issues from '../components/IssuesView.vue'
import FooterText from '../components/FooterText.vue'
import Alert from '../components/AlertView.vue'
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
