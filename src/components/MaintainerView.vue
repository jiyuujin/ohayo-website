<template>
  <h2 id="#maintainer">
    Maintainer
  </h2>
  <profile
    :image="`https://i.imgur.com/X0CcoU9.jpg`"
    :name="maintainerTitle"
    :description="maintainerDescription"
    :social="{
      discord: 'https://discord.gg/B86cWtfr8U',
      github: 'https://github.com/jiyuujin',
      twitter: 'https://twitter.com/jiyuujinlab',
    }"
  />
</template>

<script lang="ts">
import { Profile } from '@nekohack/profile-ui'

export default {
  components: {
    Profile
  },
  setup() {
    const maintainerTitle = ref('')
    const maintainerDescription = ref('Web Developer, Design Advocator 🇯🇵<br>Please check out the <a href="https://blog.nekohack.me/" target="_blank" rel="noopener noreferrer">blog</a> posts without hesitation 👍🏼')
    return { maintainerTitle, maintainerDescription }
  }
}
</script>
