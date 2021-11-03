<template>
  <div>
    <h3 id="#calendar">
      {{ `Calendar - ${formatYM}` }}
    </h3>
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
        <!--
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
        -->
        <div v-if="getPost(day)">
          <router-link :to="`/posts/${currentDateText(getPost(day).createdAt)}`">
            <div v-if="getPost(day).participants?.nodes.length === 1" class="participant_wrapper">
              <img :alt="getPost(day).participants?.nodes[0].name" :src="getPost(day).participants?.nodes[0].avatarUrl" />
            </div>
            <div v-else>
              <span v-for="participant in getPost(day).participants?.nodes" :key="participant.id" class="participant_wrapper">
                <img :alt="participant.name" :src="participant.avatarUrl" />
              </span>
            </div>
            <!--
            <span class="tooltip">
              {{ getPost(day).title }}
            </span>
            -->
          </router-link>
        </div>
        <div v-else>
          <div class="date">
            {{ day }}
          </div>
          <!--
          <img
            :alt="getPost(day) ? getPost(day).title : ''"
            src="/icon/bakeneko2.png"
            class="day--not-existed"
          />
          -->
        </div>
      </div>
      <div v-for="i in endOfMonth" :key="i" class="day day--disabled" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { zeroPadding } from '../services/utilService'

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
    const detailId = ref(0)
    const weekdays = WEEKDAY_LIST

    const formatYM = computed(() => {
      const d = dayjs(ym.value)
      let m = ''
      if (parseInt(d.format('MM')) === 1) {
        m = 'Jan'
      } else if (parseInt(d.format('MM')) === 2) {
        m = 'Feb'
      } else if (parseInt(d.format('MM')) === 3) {
        m = 'Mar'
      } else if (parseInt(d.format('MM')) === 4) {
        m = 'Apr'
      } else if (parseInt(d.format('MM')) === 5) {
        m = 'May'
      } else if (parseInt(d.format('MM')) === 6) {
        m = 'Jun'
      } else if (parseInt(d.format('MM')) === 7) {
        m = 'Jul'
      } else if (parseInt(d.format('MM')) === 8) {
        m = 'Aug'
      } else if (parseInt(d.format('MM')) === 9) {
        m = 'Sep'
      } else if (parseInt(d.format('MM')) === 10) {
        m = 'Oct'
      } else if (parseInt(d.format('MM')) === 11) {
        m = 'Nov'
      } else {
        m = 'Dec'
      }
      return `${m} ${d.format('YYYY')}`
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

    const currentDateText = (d: string) => {
      const target = new Date(d)
      return target.getFullYear() + '-' + zeroPadding(target.getMonth() + 1) + '-' + zeroPadding(target.getDay())
    }

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

    const currentDate = (d: string) => {
      return dayjs(d).format('YYYY/MM/DD')
    }

    const getPost = (day: number) => {
      let post: any | null | undefined
      props.items?.map((item: any) => {
        if (ym.value === dayjs(item.createdAt).format('YYYY-MM')) {
          if (Number(dayjs(`${ym.value}-${day}`).format('DD')) === Number(dayjs(item.createdAt).format('DD'))) {
            post = item
          }
        }
      })
      return post
    }

    return {
      formatYM,
      startOfMonth,
      endOfMonth,
      currentDateText,
      formatCurrentDate,
      formatPreviousDate,
      currentDate,
      getPost,
      detailId,
      weekdays
    }
  }
}
</script>
