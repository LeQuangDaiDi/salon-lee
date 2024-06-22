const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: 'vi',
            i18n: {
                'en': {
                    'home': 'Home',
                    'schedule': 'Schedule',
                    'about': 'Schedule',
                    'price': 'Price',
                    'policy': 'Policy',
                    'news': 'News',
                    'content-1': 'OUR STUDIO',
                    'navbarTitle': 'Lee Hair Salon',
                    'Close': 'Close'
                },
                'vi': {
                    'home': 'Trang Chủ',
                    'schedule': 'Đặt hẹn',
                    'about': 'Về chúng tôi',
                    'price': 'Bảng giá dịch vụ',
                    'policy': 'Chính sách bảo hành',
                    'news': 'Tin tức',
                    'content-1': 'OUR STUDIO',
                    'navbarTitle': 'Lee Hair Salon',
                    'Close': 'Đóng'
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

