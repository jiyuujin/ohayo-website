<script setup lang="ts">
import IssuesView from '../components/IssuesView.vue'
import FooterText from '../components/FooterText.vue'
import AlertView from '../components/AlertView.vue'
import TweetButton from '../components/TweetButton.vue'
</script>

<template>
  <main>
    <h1>{{ `みんなで作るブログ` }}</h1>
    <tweet-button />
    <alert-view />
    <issues-view />
    <footer-text />
  </main>
</template>
