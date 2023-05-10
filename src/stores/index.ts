import { createPinia } from 'pinia'
const pinia = createPinia()


import onRegister from './plugins/onRegister'
import withRouter from './plugins/withRouter'
import stateCacher from './plugins/stateCacher'
import exportImportState from './plugins/exportImportState'

pinia.use(onRegister)
pinia.use(withRouter)
pinia.use(stateCacher)
pinia.use(exportImportState)


export default pinia