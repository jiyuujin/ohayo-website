import { SheetService } from './services/sheetService'
import {
  getCurrentYear,
  getCurrentMonth,
  getCurrentDay,
  getCurrentDate,
  isBusinessDay,
} from './services/dateService'
import { GithubService } from './services/githubService'

import { getPropertyValue, getDayFormat } from './utils'
import { GITHUB_LABEL_ID } from './constants'

declare let global: any

global.createNewSpreadsheet = (): void => {
  const title = `New File ${getDayFormat()}`
  SheetService.createNewFile(title)
}

global.createNewODIssue = (): void => {
  const GITHUB_REPO_ID = getPropertyValue('GITHUB_OD_REPO_ID')

  // Notion
  const oldIndex = 105

  const json = GithubService.fetchIssuesTotalCount('ohayo-developers')
  const totalCount = json.data.viewer.repository.issues.totalCount

  const date = new Date()
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  if (!isBusinessDay(today)) {
    return
  }
  const currentYear = getCurrentYear(today)
  const currentMonth = getCurrentMonth(today)
  const currentDay = getCurrentDay(today)

  const title = `${currentYear}/${currentMonth}/${currentDay} で喋ったこと Vol.${
    oldIndex + totalCount + 1
  }`

  GithubService.createNewIssue(GITHUB_REPO_ID, title)
}

global.createNewCVIssue = (): void => {
  const GITHUB_REPO_ID = getPropertyValue('GITHUB_CV_REPO_ID')

  const date = new Date()
  const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
  const currentYear = getCurrentYear(lastMonth)
  const currentMonth = getCurrentMonth(lastMonth)

  const title = `[feat] ${getCurrentDate()} 更新`
  const label = GITHUB_LABEL_ID
  const body = `## はじめに\n${currentYear}年 ${currentMonth}月 を振り返ってみます。`

  GithubService.createNewIssue(GITHUB_REPO_ID, title, label, body)
}
