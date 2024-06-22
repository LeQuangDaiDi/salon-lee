const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            lang: 'vi',
            i18n: {
                'en': {
                    'test': 'Test'
                },
                'vi': {
                    'test': 'cc'
                }
            }
        }
    }
});
app.mount('#app')