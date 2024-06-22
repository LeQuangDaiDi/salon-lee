const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: 'vi',
            i18n: {
                'en': {
                    'home': 'Home',
                    'content-1': 'OUR STUDIO',
                    'navbarTitle': 'Lee Hair Salon',
                    'Menu': 'Menu'
                },
                'vi': {
                    'home': 'Trang Chủ',
                    'content-1': 'OUR STUDIO',
                    'navbarTitle': 'Lee Hair Salon',
                    'Menu': 'Menu'
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
