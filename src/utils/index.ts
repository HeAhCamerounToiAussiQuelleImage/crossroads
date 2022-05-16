import router from '@/router'
import store from '@/store'

type moduleType = {
    router: CallableFunction,
    store: any
}


const registerModule = (name:string, module:moduleType) => {
    if (module.store)
        store.registerModule(name, module.store)

    if (module.router)
        module.router(router)
}

export const register = (modules:Record<string, moduleType>) => {
    Object.keys(modules).forEach((moduleKey) => {
        const module = modules[moduleKey]
        registerModule(moduleKey, module)
    })

    router.addRoute({ 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import("@/components/NotFound.vue") 
    })
}
