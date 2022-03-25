<template>
  <a
    href="https://twitter.com/intent/tweet?hashtags=ohayo_engineer"
    title="#ohayo_engineerを付けてツイートする"
    target="_blank"
    rel="noopener noreferrer"
    class="tweet_button"
    role="button"
  >
    <span class="icon_wrapper">
      <TwitterIcon />
    </span>
  </a>
</template>

<script lang="ts">
import TwitterIcon from '../assets/twitter.svg'

export default {
  components: {
    TwitterIcon
  }
}
</script>
