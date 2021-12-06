<template>
  <div>
    <section v-if="loading">
      {{ `Loading...` }}
    </section>
    <section v-else>
      <h1>{{ `Archive at ${tag}` }}</h1>
      <div v-for="issue in issues" :key="issue.id" class="issues">
        <router-link
          :to="`/posts/${currentDateFormatText(issue.createdAt)}`"
          :title="`${currentDateLabelText(issue.createdAt)}の記事を見る`"
        >
          <h2>{{ issue.title }}</h2>
          <h3>
            <span v-for="label in issue.labels.nodes" :key="label.id" class="tag">
              {{ label.name }}
            </span>
          </h3>
          <p class="expanded_text_multiline">
            {{ issue.timelineItems.nodes[0].body ? issue.timelineItems.nodes[0].body : '続きを読む' }}
          </p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { searchQuery } from '../graphql/issue'
import { currentDateFormatText, currentDateLabelText } from '../services/utilService'

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
    return { loading, error, issues, currentDateFormatText, currentDateLabelText }
  }
}
</script>
