<template>
  <div>
    <h3 id="#calendar">{{ `Calendar - ${formatYM}` }}</h3>
    <div class="calendar">
      <span v-for="weekday in weekdays" :key="weekday" class="weekday">
        {{ weekday }}
      </span>
      <div v-for="i in startOfMonth" :key="i" class="day day--disabled" />
      <div
        v-for="day in parseInt(formatCurrentDate('DD'))"
        :key="day"
        class="day"
      >
        <div v-if="getPost(day)" class="tooltip">
          <a
            :href="getPost(day).url"
            role="button"
            aria-pressed="true"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ getPost(day).title }}
          </a>
        </div>
        <div class="date">
          {{ day }}
        </div>
        <div v-if="getPost(day)">
          <a
            :href="getPost(day).url"
            role="button"
            aria-pressed="true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :alt="getPost(day).title"
              src="/icon/bakeneko2.png"
              class="day--existed"
            />
            <span class="tooltip">
              {{ getPost(day).title }}
            </span>
          </a>
        </div>
        <div v-else>
          <img
            :alt="getPost(day) ? getPost(day).title : ''"
            src="/icon/bakeneko2.png"
            class="day--not-existed"
          />
        </div>
      </div>
      <div v-for="i in endOfMonth" :key="i" class="day day--disabled" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

type CalendarProps = {
  items?: Array<unknown>
}

const WEEKDAY_LIST = ['日', '月', '火', '水', '木', '金', '土']

export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props: CalendarProps) {
    const ym = ref(dayjs().format('YYYY-MM'))
    const weekdays = WEEKDAY_LIST

    const formatYM = computed(() => {
      const d = dayjs(props.ym)
      return `${d.format('MM')} ${d.format('YYYY')}`
    })

    const startOfMonth = computed(() => {
      const startDay = dayjs(`${ym.value}/01`).startOf('month').format('dddd')
      if (startDay === 'Sunday') {
        return 0
      } else if (startDay === 'Monday') {
        return 1
      } else if (startDay === 'Tuesday') {
        return 2
      } else if (startDay === 'Wednesday') {
        return 3
      } else if (startDay === 'Thursday') {
        return 4
      } else if (startDay === 'Friday') {
        return 5
      } else if (startDay === 'Saturday') {
        return 6
      }
      return null
    })

    const endOfMonth = computed(() => {
      const d = new Date(ym.value)
      const day = dayjs(new Date(d.getFullYear(), d.getMonth() + 1, 0))
      const endDay = dayjs(day).format('dddd')
      if (endDay === 'Sunday') {
        return 6
      } else if (endDay === 'Monday') {
        return 5
      } else if (endDay === 'Tuesday') {
        return 4
      } else if (endDay === 'Wednesday') {
        return 3
      } else if (endDay === 'Thursday') {
        return 2
      } else if (endDay === 'Friday') {
        return 1
      } else if (endDay === 'Saturday') {
        return 7
      }
      return null
    })

    /**
     * 現在の日付を取得する
     * @param formatType
     */
    const formatCurrentDate = (formatType: string) => {
      const target = ym.value ? new Date(ym.value) : new Date()
      const day = dayjs(new Date(target.getFullYear(), target.getMonth() + 1, 0))
      return dayjs(day).format(formatType)
    }

    /**
     * 過去の日付を取得する
     * @param formatType
     */
    const formatPreviousDate = (formatType: string) => {
      const target = ym.value ? new Date(ym.value) : new Date()
      const day = dayjs(new Date(target.getFullYear(), target.getMonth(), 0))
      return dayjs(day).format(formatType)
    }

    const getPost = (day: number) => {
      let post: any | null | undefined
      props.items?.map((item: any) => {
        if (day === Number(dayjs(item.createdAt).format('DD'))) {
          post = item
        }
      })
      return post
    }

    return {
      formatYM,
      startOfMonth,
      endOfMonth,
      formatCurrentDate,
      formatPreviousDate,
      getPost,
      weekdays
    }
  }
}
</script>
