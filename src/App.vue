<template>
  <main>
    <h1>Spaces in Routine</h1>
    <alert />
    <issues />
    <footer-text />
  </main>
</template>

<script lang="ts">
import Issues from './components/Issues.vue'
import FooterText from './components/FooterText.vue'
import Alert from './components/Alert.vue'

export default {
  components: {
    Issues,
    FooterText,
    Alert
  }
}
</script>
