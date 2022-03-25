<template>
  <div class="nav-container">
    <nav id="nav" ref="navRef" class="nav">
      <div class="nav-content">
        <h1 class="nav-icon">
          <a href="/" title="トップへ戻る">
            <span class="nav-hidden">みんな</span>で作るブログ
          </a>
        </h1>

        <div class="nav-links">
          <tweet-button />
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import TweetButton from '../components/TweetButton.vue'

export default {
  components: {
    TweetButton
  }
}
</script>
