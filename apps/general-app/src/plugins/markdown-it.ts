import MarkdownIt from 'markdown-it'

export const md = new MarkdownIt(
  { html: true, linkify: true, typographer: true }
)
  .use(() => import('markdown-it-container'), 'warning', {
    validate: function (params) {
      return params.trim().match(/^message\s+(.*)$/)
    },
    render: function (tokens, idx) {
      const m = tokens[idx].info.trim().match(/^message\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        return '<div class="message ' + md.utils.escapeHtml(m[1]) + '">'
      } else {
        return '</div>\n'
      }
    },
  })
  .use(() => import('markdown-it-link-attributes'), {
    pattern: /https?:/,
    attrs: {
      target: '_blank',
      rel: 'nofollow noopener noreferrer',
    },
  })
  .use(() => import('markdown-it-attrs'))
  .use(() => import('markdown-it-video'))
