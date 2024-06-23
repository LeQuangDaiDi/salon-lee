const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: 'vi',
            i18n: {
                'en': {
                    'home': 'Home',
                    'Close': 'Close',
                    'schedule': 'Schedule',
                    'aboutUs': 'About Us',
                    'price': 'Price',
                    'policy': 'Policy',
                    'news': 'News',
                    'navbarTitle': 'LEE HAIR SALON',
                    'Menu': 'Menu',
                    'content-H0':'PRESTIGE - QUALITY - SERVICE & AESTHETICS ARE THE TOP PRIORITIES THAT LEE HAIR SALON PUTS ON TOP',
                    'content-H1': 'OUR STUDIO',
                    'content-H2': 'LEE HAIR SALON',
                    'content-H3': 'HAIR SALON & STUDIO',
                    'content-H4': '331 Tran Hung Dao Street, Ward Co Giang, District 1, Ho Chi Minh City',
                    'content-H5': 'OUR SERVICES',
                    'content-H6': 'DESIGN CUT',
                    'content-H7': 'We have stylist levels from Junior to Director and always include a thorough consultation process. Stylists will design based on the customers hair material, wishes and style.',
                    'content-H8': 'DYE',
                    'content-H9': 'LEE HAIR uses high quality hair dye products (L`Oreal, Lakme, Milbon, Guytang,..) to bring you a fresh change that suits your style.',
                    'content-H10': 'PERM / STRAIGH',
                    'content-H11': 'With regularly updated hair curling/straightening techniques and personalized advice, LEE offers you many curling styles from gentle to bold to suit your preferences, hair texture and condition.',
                    'content-H12': 'AND MORE.',
                    'content-H13': 'FOLLOW US ON INSTAGRAM!',
                    'content-H14': '@LEE.HAIR.SALON',
                    'content-H15': 'We offer products, hair styles and shows continuously on our main Instagram channel.',
                    'content-H16': 'FOLLOW US.',
                    'content-H17': 'HAIR SALON ABOUT LEE',
                    'content-H18': 'Lee Hair Salon was established in June 2020. "Lee Hair" is a five-color hair stylist selected with high expertise and extensive experience by hair stylist Le Ngoc Phat - Founder of LEE HAIR SALON.',
                    'content-H19':'Contact and book an appointment with Salon',
                    'content-H20':'Schedule now',
                    'content-H21':'Hotline',
                    'content-H22':'📞0903617376 📞0908679635',
                    'content-H23':'Society',
                    'content-H24': 'Address',
                    'content-H25':'331 Tran Hung Dao, Co Giang Ward, District 1, Ho Chi Minh City',
                    'content-H26':'PRESTIGE - QUALITY - SERVICE & AESTHETICS ARE THE CRITERIA WHICH LEE HAIR SALON PUT ON EVERYTHING',


                },
                'vi': {
                    'home': 'Trang Chủ',
                    'Close': 'Đóng',
                    'schedule': 'Đặt Hẹn',
                    'aboutUs': 'Về Chúng Tôi',
                    'price': 'Bảng Giá Dịch Vụ',
                    'policy': 'Chính Sách Bảo Hành',
                    'news': 'Tin Tức',
                    'navbarTitle': 'LEE HAIR SALON',
                    'Menu': 'Menu',
                    'content-H0':'UY TÍN - CHẤT LƯỢNG - DỊCH VỤ & THẨM MỸ LÀ NHỮNG TIÊU CHÍ MÀ LEE HAIR SALON ĐẶT LÊN HÀNG ĐẦU',
                    'content-H1': 'CHÀO MỪNG BẠN ĐẾN VỚI',
                    'content-H2': 'LEE HAIR SALON',
                    'content-H3': 'HAIR SALON & STUDIO',
                    'content-H4': '331 Trần Hưng Đạo, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh',
                    'content-H5': 'DỊCH VỤ CỦA CHÚNG TÔI',
                    'content-H6': 'CẮT THIẾT KẾ',
                    'content-H7': 'Chúng tôi có các level stylist từ Junior đến Director và luôn đi kèm quá trình tư vấn trao đổi kỹ càng. Các stylist sẽ thiết kế dựa trên chất liệu tóc, mong muốn và phong cách của khách hàng.',
                    'content-H8': 'NHUỘM',
                    'content-H9': 'LEE HAIR sử dụng các sản phẩm nhuộm tóc chất lượng cao (L`Oreal, Lakme, Milbon, Guytang,..) để mang đến cho bạn sự thay đổi mới mẻ và phù hợp với phong cách của bạn.',
                    'content-H10': 'UỐN DUỖI',
                    'content-H11': 'Với kỹ thuật uốn/duỗi tóc được cập nhập thường xuyên và được tư vấn cá nhân hóa, LEE mang đến cho bạn nhiều kiểu tóc uốn từ nhẹ nhàng đến cá tính phù hợp với sở thích và chất liệu, tình trạng tóc.',
                    'content-H12': 'VÀ HƠN THẾ NỮA.',
                    'content-H13': 'THEO DÕI CHÚNG TÔI TẠI INSTAGRAM!',
                    'content-H14': '@LEE.HAIR.SALON',
                    'content-H15': 'Chúng tôi cập nhập sản phẩm, mẫu tóc và chương trình liên tục tại kênh Instagram chính chủ.',
                    'content-H16': 'FOLLOW US!.',
                    'content-H17': 'VỀ LEE HAIR SALON',
                    'content-H18': 'Lee Hair Salon được thành lập từ tháng 06/2020. "Lee Hair" là đội ngũ Hair Stylist được chọn lọc gắt gao với chuyên môn cao và kinh nghiệm dày dặn bởi chuyên gia tạo mẫu tóc Lê Ngọc Phát - Nhà sáng lập LEE HAIR SALON.',
                    'content-H19':'Liên hệ và đặt lịch với Salon',
                    'content-H20':'Đặt lịch ngay',
                    'content-H21':'Hotline',
                    'content-H22':'📞0903617376   📞0908679635',
                    'content-H23':'Socials',
                    'content-H24':'Địa chỉ',
                    'content-H25':'331 Trần Hưng Đạo, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh',
                    'content-H26':'UY TÍN - CHẤT LƯỢNG - DỊCH VỤ & THẨM MỸ LÀ NHỮNG TIÊU CHÍ MÀ LEE HAIR SALON ĐẶT LÊN HÀNG ĐẦU',
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

