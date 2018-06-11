//import 'bootstrap/dist/css/bootstrap.min.css'//这边就触及到我知识的盲区了...
import 'bootstrap'
import Vue from 'vue'
import router from './router'
//import store from './store'
import App from './app.vue'


/*
axios.interceptors.response.use(response => {
    if (response.data.success === false) {
        return Promise.reject({
            reason: response.data.reason,
            success: false
        })
    }
    return response
}, error => {
    if (error.response && 401 === error.response.status) {
        store.dispatch(LOGOUT_ACTION).then(() => {router.replace('/')})
    }
    return Promise.reject(error)
})
*/
router.beforeEach(({name: toName, meta: {title: toTitle}}, from, next) => {
    window.document.title = toTitle ? toTitle + ' - WZL' : 'WZL'
    next()
})

router.afterEach(({name}) => {
    if (app) {
        app.eventHub.$emit('mmActive', name)
    }
    window.scrollTo(0, 0)
})

let app = new Vue({
    el: '#app',
    router,
    //store,
    data: {
        eventHub: new Vue()
    },
    render: h => h(App)
})