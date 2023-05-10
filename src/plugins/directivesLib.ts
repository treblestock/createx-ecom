import type { App, Directive } from 'vue'
import * as directives from '~/components/directives'

interface DirectivesList {
  [key: string]: Directive
}

export default function (app: App) {
  Object.getOwnPropertyNames(directives).forEach(directiveName => {
    app.directive(directiveName, (directives as DirectivesList)[directiveName] )
  })
}