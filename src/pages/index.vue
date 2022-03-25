<script setup lang="ts">
import IssuesView from '../components/IssuesView.vue'
import FooterText from '../components/FooterText.vue'
import NavText from '../components/NavText.vue'
import MaintainerView from '../components/MaintainerView.vue'
import AlertView from '../components/AlertView.vue'
</script>

<template>
  <main>
    <nav-text />
    <alert-view />
    <issues-view />
    <maintainer-view />
    <footer-text />
  </main>
</template>
