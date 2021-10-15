import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '@nekohack/normalize.css/dist/index.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './plugins/apollo'

createApp(App).provide(DefaultApolloClient, apolloClient).mount('#app')
