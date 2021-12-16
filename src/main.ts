import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import logger from "@/utils/logger";

createApp(App)
    .use(router)
    // .mixin({methods: {
    //     logWarn: logger.logWarn,
    //     logError: logger.logError,
    //     logInfo: logger.logInfo,
    // }})
    .mount('#app')
