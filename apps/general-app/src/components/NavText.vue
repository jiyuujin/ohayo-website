<template>
  <div class="nav-container">
    <nav id="nav" ref="navRef" class="nav">
      <div class="nav-content">
        <div class="nav-icon">
          <h1>
            <a href="/" title="トップへ戻る">
              <span class="nav-hidden">みんな</span>で作るブログ
            </a>
          </h1>
          <h2 v-if="subheader">
            {{ subheader }}
          </h2>
        </div>

        <div class="nav-links">
          <a href="https://ohayo-ai.nekohack.me" title="AI関連で1週間の総浚いを確認する" class="nav-link">
            AI
          </a>
          <a href="https://ohayo-friday.nekohack.me" title="AI以外で1週間の総浚いを確認する" class="nav-link">
            Fri
          </a>
          <a href="https://blog.nekohack.me" title="猫の足あとを見る" class="nav-link">
            Blog
          </a>
          <a href="https://twitter.com/intent/tweet?hashtags=ohayo_engineer" title="ツイートする" class="nav-link">
            Tweet
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    subheader: {
      type: String,
      default: ''
    }
  }
}
</script>
