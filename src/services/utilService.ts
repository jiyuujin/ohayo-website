export type IssuesType = Array<{
  id: string
  body: string
  createdAt: string
  title: string
  url: string
  labels: {
    nodes: Array<{
      id: string
      name: string
    }>
  }
  timelineItems: {
    nodes: Array<any>
  }
}>

type CountsType = {
  [key: string]: number
}

export const removeDuplicates = (items: string[]) => {
  return items.filter((x, i, self) => {
    return self.indexOf(x) === i
  })
}

export const getLabels = (issues: IssuesType) => {
  console.log(issues)
  const labels = []
  if (issues !== null) {
    for (const issue of issues) {
      for (const label of issue.labels.nodes) {
        labels.push(label.name)
      }
    }
  }
  return labels
}

export const getCounts = (items: string[]) => {
  const counts: CountsType = {}
  for (let i = 0; i < items.length; i++) {
    const key = items[i]
    counts[key] = counts[key] ? counts[key] + 1 : 1
  }
  return counts
}

export const sortCounts = (items: CountsType) => {
  const sorted = Object.entries(items).sort((a, b) => {
    if (Number(a[1]) > Number(b[1])) return -1
    if (Number(a[1]) < Number(b[1])) return 1
    return 0
  })
  return Object.fromEntries(sorted)
}

export const currentDateText = (d: string) => {
  const target = new Date(d)
  return target.getFullYear() + '-' + zeroPadding(target.getMonth() + 1) + '-' + zeroPadding(target.getDate())
}

export const zeroPadding = (target: number): string => {
  if (target < 10) {
    return `0${target}`
  }
  return String(target)
}

export const modalStyle = (
  topPosition: string,
  bottomPosition: string,
  leftPosition: string,
  rightPosition: string,
  width: string,
  height: string,
) => {
  const ua = navigator.userAgent
  const isIPad = ua.indexOf('iPad') >= 0

  let baseStyle = {
    position: 'fixed',
    maxWidth: '900px',
    transform: isIPad ? 'translate(-50%, -50%)' : '',
    width: 'calc(100% - 44px)',
    top: isIPad ? '50%' : '',
    left: isIPad ? '50%' : '',
    height: height,
    backgroundColor: '#fff',
    borderRadius: '6px',
    'box-shadow': '0px 5px 5px 0px rgba(0, 0, 0, 0.3)',
  }

  if (topPosition !== '') {
    baseStyle = Object.assign(baseStyle, {
      top: topPosition,
    })
  }

  if (bottomPosition !== '') {
    baseStyle = Object.assign(baseStyle, {
      bottom: bottomPosition,
    })
  }

  if (leftPosition !== '') {
    baseStyle = Object.assign(baseStyle, {
      left: leftPosition,
    })
  }

  if (rightPosition !== '') {
    baseStyle = Object.assign(baseStyle, {
      right: rightPosition,
    })
  }

  return baseStyle
}
