import { ApiService } from './apiService'
import { SlackService } from './slackService'

import { SLACK_INCOMING_API, GITHUB_API, GITHUB_TOKEN } from '~/constants'

const options: {
  Authorization: string
  Accept: string
} = {
  Authorization: 'Bearer ' + GITHUB_TOKEN,
  Accept: 'application/vnd.github.starfire-preview+json',
}

export class GithubService {
  /**
   * Issueの総数を取得する
   * @param name
   */
  static fetchIssuesTotalCount(name: string) {
    const query = `query {
            viewer {
                repository(name:"${name}") {
                    issues(states: OPEN) {
                        totalCount
                    }
                }
            }
        }`

    const payload = JSON.stringify({ query: query })

    const response = ApiService.getAuthenticationApi(GITHUB_API, options, payload)
    const json = JSON.parse(response.getContentText())
    Logger.log(json)

    return json
  }

  /**
   * 新しいissueを切る
   * @param repo
   * @param title
   * @param label
   * @param body
   */
  static createNewIssue(repo: string, title: string, label?: string, body?: string) {
    const mutation = `mutation {
            createIssue(input:{repositoryId:"${repo}", title:"${title}" ${
      body ? `, body:"${body}"` : ''
    } ${label ? `, labelIds: ["${label}"]` : ''}}) {
                issue {
                    title,
                    url
                }
            }
        }`

    const payload = JSON.stringify({ query: mutation })

    const response = ApiService.postAuthenticationApi(GITHUB_API, options, payload)
    const json = JSON.parse(response.getContentText())
    Logger.log(json)

    const botMessage = {
      text: '新しいissueを切りました',
    }

    SlackService.sendMessage(SLACK_INCOMING_API, JSON.stringify(botMessage))
  }
}
