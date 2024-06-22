const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: 'vi',
            i18n: {
                'en': {
                    'home': 'Home',
<<<<<<< HEAD
                    'content-H1': 'OUR STUDIO',
                    'navbarTitle': 'Lee Hair Salon',
                    'Menu': 'Menu',
                    'content-H2': 'LEE HAIR SALON',
                    'content-H3': 'HAIR SALON & STUDIO',
                    'content-H4': '331 Tran Hung Dao Stret, Ward Co Giang, District 1, Ho Chi Minh City',
                    'content-H5': 'OUR SERVICES',
                    'content-H6': 'DESIGN CUT',
                    'content-H7': 'We have stylist levels from Junior to Director and always include a thorough consultation process. Stylists will design based on the customers hair material, wishes and style.',
                    'content-H8': 'DYE',
                    'content-H9': 'LEE HAIR uses high quality hair dye products (L`Oreal, Lakme, Milbon, Guytang,..) to bring you a fresh change that suits your style.',
                    'content-H10': 'PERM / STRAIGH',
                    'content-H11': 'With regularly updated hair curling/straightening techniques and personalized advice, LEE offers you many curling styles from gentle to bold to suit your preferences, hair texture and condition.',
                    'content-H12': 'FOLLOW US ON INSTAGRAM!',
                    'content-H13': '@LEE.HAIR.SALON',
                    'content-H14': 'We update products, hairstyles and programs continuously on our official Instagram channel.',
                    'content-H15': 'FOLLOW US.',
                    'content-H16': 'ABOUT LEE HAIR SALON',
                    'content-H17': 'Lee Hair Salon was established in June 2020. "Lee Hair" is a team of Hair Stylists carefully selected with high expertise and extensive experience by hair stylist Le Ngoc Phat - Founder of LEE HAIR SALON.',
                    'content-H18':'Contact and make an appointment with Salon',
                    'content-H19':'Book now',
                    'content-H20':'Hotline',
                    'content-H21':'📞0903617376 📞0908679635',
                    'content-H22':'Socials',
                    'content-H23':'Address',
                    'content-H24':'331 Tran Hung Dao, Co Giang Ward, District 1, Ho Chi Minh City',

                },
                'vi': {
                    'home': 'Trang Chủ',
                    'content-H1': 'OUR STUDIO',
                    'navbarTitle': 'Lee Hair Salon',
                    'Menu': 'Menu',
                    'content-H2': 'LEE HAIR SALON',
                    'content-H3': 'HAIR SALON & STUDIO',
                    'content-H4': '331 Trần Hưng Đạo, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh',
                    'content-H5': 'DỊCH VỤ CỦA CHÚNG TÔI',
                    'content-H6': 'CẮT THIẾT KẾ / DESIGN CUT',
                    'content-H7': 'Chúng tôi có các level stylist từ Junior đến Director và luôn đi kèm quá trình tư vấn trao đổi kỹ càng. Các stylist sẽ thiết kế dựa trên chất liệu tóc, mong muốn và phong cách của khách hàng.',
                    'content-H8': 'NHUỘM / DYE',
                    'content-H9': 'LEE HAIR sử dụng các sản phẩm nhuộm tóc chất lượng cao (L`Oreal, Lakme, Milbon, Guytang,..) để mang đến cho bạn sự thay đổi mới mẻ và phù hợp với phong cách của bạn.',
                    'content-H10': 'UỐN DUỖI - PERM / STRAIGH',
                    'content-H11': 'Với kỹ thuật uốn/duỗi tóc được cập nhập thường xuyên và được tư vấn cá nhân hóa, LEE mang đến cho bạn nhiều kiểu tóc uốn từ nhẹ nhàng đến cá tính phù hợp với sở thích và chất liệu, tình trạng tóc.',
                    'content-H12': 'THEO DÕI CHÚNG TÔI TẠI INSTAGRAM!',
                    'content-H13': '@LEE.HAIR.SALON',
                    'content-H14': 'Chúng tôi cập nhập sản phẩm, mẫu tóc và chương trình liên tục tại kênh Instagram chính chủ.',
                    'content-H15': 'FOLLOW US.',
                    'content-H16': 'VỀ LEE HAIR SALON',
                    'content-H17': 'Lee Hair Salon được thành lập từ tháng 06/2020. "Lee Hair" là đội ngũ Hair Stylist được chọn lọc gắt gao với chuyên môn cao và kinh nghiệm dày dặn bởi chuyên gia tạo mẫu tóc Lê Ngọc Phát - Founder LEE HAIR SALON.',
                    'content-H18':'Liên hệ và đặt lịch với Salon',
                    'content-H19':'Đặt lịch ngay',
                    'content-H20':'Hotline',
                    'content-H21':'📞0903617376 📞0908679635',
                    'content-H22':'Socials',
                    'content-H23':'Địa chỉ',
                    'content-H24':'331 Trần Hưng Đạo, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh',

=======
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
>>>>>>> 44a0f5af440e265dab9bedab6bf06ffe342050bb
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

