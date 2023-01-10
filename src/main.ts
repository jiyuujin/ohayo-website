import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import './index.css'
// import '@nekohack/normalize.css/dist/index.css'
import './assets/lib/customize/_article.scss'
import './assets/lib/customize/_twitter.scss'
import './assets/lib/_layout.scss'
import '@nekohack/profile-ui/dist/profile-ui.common.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './plugins/apollo'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    ctx.app.provide(DefaultApolloClient, apolloClient)
  }
)
