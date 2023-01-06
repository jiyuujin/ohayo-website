<template>
  <div>
    <div class="article">
      <div class="post-detail">
        <div v-if="currentBody" class="body" v-html="currentBody" />
        <div class="footer-area">
          <a
            :href="currentArticle?.url"
            :title="`${currentArticle?.url}を見る`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSvg />
            <span class="editing_label">Githubで編集を提案</span>
          </a>
        </div>
      </div>
    </div>

    <div class="contributor">
      Contributor
      <span
        v-for="participant in currentArticle?.participants.nodes"
        :key="participant.id"
        class="participant_wrapper"
      >
        <a
          :href="`https://github.com/${participant.login}`"
          :title="`${participant.login}を見る`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :alt="participant.name" :src="participant.avatarUrl" />
        </a>
      </span>
    </div>

    <social-menu
      :slug-text="currentArticle.slug"
      :title="currentArticle.title"
      :is-vertical="!isVertical"
    />
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { md } from '../plugins/markdown-it'
import { currentJPStandardDate } from '../services/utilService'
import GithubSvg from '../assets/github_logo.svg'

import SocialMenu from './SocialMenu.vue'

export default {
  components: {
    SocialMenu,
    GithubSvg
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    date: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const issues = computed(() => props.data)

    const currentArticle = computed(() => {
      return issues.value.filter((item: any) => {
        if (
          currentJPStandardDate(item.createdAt).format('YYYY') === String(new Date(props.date).getFullYear()) &&
          currentJPStandardDate(item.createdAt).format('M') === String(new Date(props.date).getMonth() + 1) &&
          currentJPStandardDate(item.createdAt).format('D') === String(new Date(props.date).getDate())) {
          return item
        }
      })[0]
    })

    const currentBody = computed(() => {
      let body = ''
      issues.value.filter((item) => {
        if (
          currentJPStandardDate(item.createdAt).format('YYYY') === String(new Date(props.date).getFullYear()) &&
          currentJPStandardDate(item.createdAt).format('M') === String(new Date(props.date).getMonth() + 1) &&
          currentJPStandardDate(item.createdAt).format('D') === String(new Date(props.date).getDate())) {
          return item
        }
      })[0].timelineItems.nodes?.forEach((item) => {
        if (item.hasOwnProperty('body')) {
          body += `${item.body}\n\n`
        }
      })
      return md.render(body)
    })

    const isVertical = ref(true)

    const currentDate = (d: string) => {
      return dayjs(d).format('YYYY/MM/DD')
    }

    return { issues, currentArticle, currentBody, isVertical, currentDate }
  }
}
</script>
