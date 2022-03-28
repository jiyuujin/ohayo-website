<template>
  <div>
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else>
      <h1>{{ currentArticle?.title }}</h1>
      <h2>{{ currentDate(currentArticle?.createdAt) }}</h2>
      <h3>
        <span v-for="label in currentArticle?.labels.nodes" :key="label.id" class="tag">
          <router-link :to="`/tag/${label.name}`" :title="label.name">
            {{ label.name }}
          </router-link>
        </span>
      </h3>
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
    </section>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import dayjs from 'dayjs'
import { md } from '../plugins/markdown-it'
import { searchQuery } from '../graphql/issue'
import { currentJPStandardDate } from '../services/utilService'

import GithubSvg from '../assets/github.svg'

export default {
  components: {
    GithubSvg
  },
  props: {
    date: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { result, error, loading } = useQuery(searchQuery)
    const issues = useResult(
      result,
      null,
      (data) => data.viewer.repository?.issues?.nodes
    )

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

    const currentDate = (d: string) => {
      return dayjs(d).format('YYYY/MM/DD')
    }

    return { loading, error, currentArticle, currentBody, currentDate }
  }
}
</script>
