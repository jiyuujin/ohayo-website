import gql from 'graphql-tag'

export const searchQuery = (tag?: string) => gql`
  query {
    viewer {
      login
      repository(name: "ohayo-developers") {
        description
        createdAt
        name
        issues(
          last: 100
          orderBy: { field: CREATED_AT, direction: DESC }
          ${tag ? `labels: "${tag}"` : ''}
        ) {
          nodes {
            id
            body
            createdAt
            title
            url
            number
            labels(last: 10) {
              nodes {
                id
                name
              }
            }
            timelineItems(first: 10) {
              nodes {
                ... on IssueComment {
                  id
                  body
                }
              }
            }
            participants(last: 10) {
              nodes {
                id
                login
                name
                avatarUrl(size: 40)
              }
            }
          }
        }
      }
    }
  }
`
