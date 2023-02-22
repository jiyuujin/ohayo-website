<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { searchQuery } from '../../graphql/issue'
import { currentDateLabelText } from '../../services/utilService'

import GitHubLogo from '../../assets/github_logo.svg'
import NoteLogo from '../../assets/note_logo.svg'
import TwitterLogo from '../../assets/twitter_logo.svg'

import IssueView from '../../components/IssueView.vue'
import FooterText from '../../components/FooterText.vue'
import NavText from '../../components/NavText.vue'

const props = defineProps<{ date: string }>()
const postDate = computed(() => props.date)
const postDateLabel = computed(() => currentDateLabelText(props.date))

const { result: github, error, loading } = useQuery(searchQuery)
const issues = computed(() => {
  return github.value.viewer.repository?.issues?.nodes
})

const allIcons = [
  { name: 'github', url: 'https://github.com/jiyuujin' },
  // { name: 'hatena', url: 'https://hatena.ne.jp/' },
  { name: 'note', url: 'https://note.com/uraneko' },
  { name: 'twitter', url: 'https://twitter.com/jiyuujinlab' },
]

onMounted(() => {
  setTimeout(() => {
    let tweetScript = document.createElement('script')
    tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    tweetScript.setAttribute('async', 'true')
    document.head.appendChild(tweetScript)
  }, 100)
})
</script>

<template>
  <nav-text />
  <div class="section">
    <div class="main">
      <section v-if="loading">
        {{ `Loading...` }}
      </section>
      <section v-else-if="error">
        {{ `Error` }}
      </section>
      <section v-else>
        <issue-view :data="issues" :date="postDate" />
      </section>
    </div>
    <div class="side">
      <div class="avatar">
        <img
          src="https://i.imgur.com/X0CcoU9.jpg"
          alt=""
          :width="144"
          :height="144"
        />
      </div>
      <div class="social">
        <a v-for="s in allIcons" :key="s.name" :href="s.url" target="_blank" rel="noopenner noreferrer" :aria-label="s.name">
          <template v-if="s.name === 'github'">
            <GitHubLogo />
          </template>
          <template v-if="s.name === 'note'">
            <NoteLogo />
          </template>
          <template v-if="s.name === 'twitter'">
            <TwitterLogo />
          </template>
        </a>
      </div>
    </div>
  </div>
  <footer-text />
</template>
