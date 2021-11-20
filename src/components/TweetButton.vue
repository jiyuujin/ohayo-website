<template>
  <a
    href="https://twitter.com/intent/tweet?hashtags=ohayo_engineer"
    title="#ohayo_engineerを付けてツイートする"
    target="_blank"
    rel="noopener noreferrer"
    class="tweet_button"
    role="button"
  >
    {{ `#ohayo_engineer` }}
    <span class="icon_wrapper">
      <TwitterIcon />
    </span>
  </a>
  <p>{{ `平日は毎日、Twitter Spaces でお喋りしている内容のメモを記録しています。` }}</p>
</template>

<script lang="ts">
import TwitterIcon from '../assets/twitter.svg'

export default {
  components: {
    TwitterIcon
  }
}
</script>
