import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import './index.css'
import '@nekohack/normalize.css/dist/index.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './plugins/apollo'
import './plugins/web-components'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    ctx.app.config.isCustomElement = tag => tag.startsWith('read-more')
    ctx.app.provide(DefaultApolloClient, apolloClient)
  }
)
