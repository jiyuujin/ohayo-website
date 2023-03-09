<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { searchQuery } from '../../graphql/issue'

import GitHubLogo from '../../assets/github_logo.svg'
import NoteLogo from '../../assets/note_logo.svg'
import TwitterLogo from '../../assets/twitter_logo.svg'

import ArchivesView from '../../components/ArchivesView.vue'
import FooterText from '../../components/FooterText.vue'
import NavText from '../../components/NavText.vue'

const props = defineProps<{ tag: string }>()
const tag = computed(() => props.tag)

const { result: github, error, loading } = useQuery(searchQuery(tag.value || ''))
const issues = computed(() => {
  return [...github.value.viewer.repository?.issues?.nodes]
})

const allIcons = [
  { name: 'github', url: 'https://github.com/jiyuujin' },
  // { name: 'hatena', url: 'https://hatena.ne.jp/' },
  { name: 'note', url: 'https://note.com/uraneko' },
  { name: 'twitter', url: 'https://twitter.com/jiyuujinlab' },
]
</script>

<template>
  <nav-text :subheader="`${tag} タグ`" />
  <div class="section">
    <div class="main">
      <section v-if="loading">
        {{ `Loading...` }}
      </section>
      <section v-else-if="error">
        {{ `Error` }}
      </section>
      <section v-else>
        <archives-view :data="issues" />
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
      <div class="friday">
        <a
          href="https://ohayo-friday.nekohack.me/"
          target="_blank"
          rel="noopenner noreferrer"
          title="金曜日のエンジニアのつどい"
        >
          <p class="title">
            金曜日のエンジニアのつどい
          </p>
          <p class="subtitle">
            Every Friday AM9:00
            <br />
            Twitter Space
            <br />
            ON AIR
          </p>
        </a>
      </div>
    </div>
  </div>
  <footer-text />
</template>
