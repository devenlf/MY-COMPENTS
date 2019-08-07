import LButton from './button'

const compents = [
    LButton
]

const install = function(Vue){
    if(install.installed) return;
    compents.map(compent=> Vue.component(compent.name, compent))
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

export default {
    install,
    LButton
}