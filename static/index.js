const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: 'vi',
            i18n: {
                'en': {
                    'home': 'Home',
                    'content-1': 'OUR STUDIO'
                },
                'vi': {
                    'home': 'Trang Chủ',
                    'content-1': 'OUR STUDIO'
                }
            }
        }
    },
    methods: {
        getImage(link) {
            return link;
        },
        getContent(content) {
            return this.i18n[this.lang][content];
        },
        switchLanguage() {
            if (this.lang === 'vi') {
                this.lang = 'en';
            } else {
                this.lang = 'vi';
        }
    }
    
}});
app.mount('#app');
