<template>
  <main>
    <h1>Spaces in Routine</h1>
    <issues />
    <footer-text />
  </main>
</template>

<script lang="ts">
import Issues from './components/Issues.vue'
import FooterText from './components/FooterText.vue'

export default {
  components: {
    Issues,
    FooterText
  }
}
</script>
