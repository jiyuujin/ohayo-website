<template>
  <div class="grid" aria-label="Blog post list">
    <div v-for="issue in issues" :key="issue.id" class="item">
      <router-link
        :to="`/posts/${currentDateFormatText(issue.createdAt)}`"
        :title="`${currentDateLabelText(issue.createdAt)}の記事を見る`"
      >
        <div class="date">
          {{ `${currentDateLabelText(issue.createdAt)}` }}
        </div>
        <h2>
          <span v-if="headlines(issue.timelineItems)">
            {{ `${headlines(issue.timelineItems)}` }}
          </span>
        </h2>
        <p>
          <span v-for="label in issue.labels.nodes" :key="label.id" class="tag">
            <router-link :to="`/tag/${label.name}`" :title="label.name">
              {{ label.name }}
            </router-link>
          </span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { getHeadlines, currentDateFormatText, currentDateLabelText } from '../services/utilService'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const issues = computed(() => props.data)
    const headlines = (items: string) => {
      let result = ''
      items.nodes?.forEach((node, index: number) => {
        const headlineList = getHeadlines(node?.body)
        headlineList?.forEach((headline: string, key: number) => {
          if (index === items.nodes.length - 1 && key === headlineList?.length - 1) {
            result += `${headline.replace(/## /, '')}`
          } else {
            result += `${headline.replace(/## /, '')},`
          }
        })
      })
      result = result.slice(0, -1)
      return result
    }
    return { issues, currentDateFormatText, currentDateLabelText, headlines }
  }
}
</script>
