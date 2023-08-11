<template>
  <footer>
    <div class="footer-text">
      <div class="copyright">
        <a
          href="https://github.com/nekohack"
          role="button"
          aria-pressed="true"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©︎ jiyuujin LAB. by {{ ' ' }}
          <NekohackSvg />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import NekohackSvg from '../assets/nekohack.svg'

export default {
  components: {
    NekohackSvg
  }
}
</script>
