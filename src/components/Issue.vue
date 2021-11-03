<template>
  <div>
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else>
      <div class="article-container">
        <h1>{{ currentArticle.title }}</h1>
        <h2>{{ currentDate(currentArticle.createdAt) }}</h2>
        <h3>
          <span v-for="label in currentArticle.labels.nodes" :key="label.id" class="tag">
            {{ label.name }}
          </span>
        </h3>
        <div class="contributor">
          Contributor
          <span v-for="participant in currentArticle.participants.nodes" :key="participant.id" class="participant_wrapper">
            <a :href="`https://github.com/${participant.login}`" target="_blank" rel="noopener noreferrer">
              <img :alt="participant.name" :src="participant.avatarUrl" />
            </a>
          </span>
        </div>
        <div v-if="currentBody" class="body" v-html="currentBody" />
        <div class="footer-area">
          <a :href="currentArticle.url" target="_blank" rel="noopener noreferrer">
            <GithubSvg />
            <span class="editing_label">Githubで編集を提案</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import dayjs from 'dayjs'
import marked from 'marked'
import { searchQuery } from '../graphql/issue'

import GithubSvg from '../assets/github.svg'

export default {
  components: {
    GithubSvg
  },
  props: {
    id: {
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
        if (item.id === props.id) {
          return item
        }
      })[0]
    })

    const currentBody = computed(() => {
      let body = ''
      issues.value.filter((item) => item.id === props.id)[0].timelineItems.nodes?.forEach((item) => {
        if (item.hasOwnProperty('body')) {
          body += `${item.body}\n\n`
        }
      })
      return marked(body)
    })

    const currentDate = (d: string) => {
      return dayjs(d).format('YYYY/MM/DD')
    }

    return { loading, error, currentArticle, currentBody, currentDate }
  }
}
</script>
