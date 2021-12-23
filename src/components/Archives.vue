<template>
  <div>
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else>
      <h1>{{ `Archive at ${tag}` }}</h1>
      <div v-for="issue in issues" :key="issue.id" class="archives">
        <router-link
          :to="`/posts/${currentDateFormatText(issue.createdAt)}`"
          :title="`${currentDateLabelText(issue.createdAt)}の記事を見る`"
        >
          <h2>{{ headlines(issue.timelineItems) }}</h2>
          <p>
            <span v-for="label in issue.labels.nodes" :key="label.id" class="tag">
              {{ label.name }}
            </span>
          </p>
          <p>{{ currentDateLabelText(issue.createdAt) }}</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { searchQuery } from '../graphql/issue'
import { getHeadlines, currentDateFormatText, currentDateLabelText } from '../services/utilService'

export default {
  props: {
    tag: {
      type: String,
      default: ''
    }
  },
  setup(props: { tag: string }) {
    const { result, error, loading } = useQuery(searchQuery(props.tag))
    const issues = useResult(
      result,
      null,
      (data) => data.viewer.repository?.issues?.nodes
    )
    const headlines = (items: string) => {
      let result = ''
      items.nodes.forEach((node, index: number) => {
        const headlineList = getHeadlines(node.body)
        headlineList?.forEach((headline: string, key: number) => {
          if (index === items.nodes.length - 1 && key === headlineList?.length - 1) {
            result += `${headline.replace(/## /, '')}`
          } else {
            result += `${headline.replace(/## /, '')},`
          }
        })
      })
      return result
    }
    return { loading, error, issues, currentDateFormatText, currentDateLabelText, headlines }
  }
}
</script>
