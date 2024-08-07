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
                    'content-H22':  'tel:0903617376',
                    'content-H22_1':'tel:0908679635',
                    'content-H22_2':'📞 0903617376',
                    'content-H22_3':'📞 0908679635',
                    'content-H23':'Society',
                    'content-H24': 'Address',
                    'content-H25':'331 Tran Hung Dao, Co Giang Ward, District 1, Ho Chi Minh City',
                    'content-H26':'PRESTIGE - QUALITY - SERVICE & AESTHETICS ARE THE CRITERIA WHICH LEE HAIR SALON PUT ON EVERYTHING',
                    'content-H27': 'The Space & The Team',
                    'content-H28': 'SYSTEM  HAIR  STYLIST',
                    'content-H28': 'HAIR STYLIST SYSTEM',
                    'content-H29': 'The staff is carefully selected from the beginning. Training and always updating new techniques to bring customers a quality product and a great experience!',
                    'content-H30': 'FOUNDER/MASTER',
                    'content-H31': '10 years of experience',
                    'content-H32': 'LE NGOC PHAT',
                    'content-H33': 'Mr. Lee Phat is not only a famous Hair Artist with skillful bleaching and dyeing techniques. With more than 10 years of experience.',
                    'content-H34': 'The Vidal Sassoon School combines Japanese and Korean styles to create a unique style.',
                    'content-H35': 'Trained by international experts from England, Italy, France, Japan, and Korea, bringing top-notch knowledge and skills.',
                    'content-H36': 'Strengths: Cutting, Curling, Straightening, Dyeing, Balayage, Highlighting.',
                    'content-H37': '- Mr. Le Ngoc Phat -',
                    'content-H38': 'SENIOR STYLIST',
                    'content-H39': 'Mss KHANH NHU',
                    'content-H40': 'Experience from 3 years+',
                    'content-H41': '"Personality. Intelligence. Strength and Style. Those are the things that make beauty"',
                    'content-H42': 'JUNIOR STYLIST',
                    'content-H43': 'Mss. THANH NGOC',
                    'content-H44': '2+ years of experience',
                    'content-H45': '"Loving beauty is enjoyment. Creating beauty is art"',
                    'content-H46': '"BE BEAUTIFUL EVERY DAY, CONFIDENT IN EVERY MOMENT"',
                    'content-H47': '- LEE HAIR SALON -',
                    'content-H48': 'CORE VALUES',
                    'content-H49': 'Over the years, we have never stopped improving and developing our skills and team with high-end product lines to bring better and better service value.',
                    'content-H50': 'We always listen to our customers contributions and use that as motivation to develop better and better services.',
                    'content-H51': 'SERVICE PRICE LIST',
                    'content-H52': 'PERM / STRAIGHTENING SERVICE',
                    'content-H53': 'BLEACHING SERVICE',
                    'content-H54': 'RESTORATION SERVICE',
                    'content-H55': 'PREMIUM SERVICE',
                    'content-H56': 'CONTACT US NOW FOR CONSULTATION SUPPORT AND PARTICIPATE IN THE LATEST DISCOUNT PROGRAMS!',
                    'content-H57': '© Lee Hair Salon | 2024',
                    'content-H58': 'Copyright © INet Mowxl | All rights reserved.',
                    'content-H59': 'TRUSTED BRAND',
                    'content-H60': 'More...',




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
                    'content-H22':  'tel:0903617376',
                    'content-H22_1':'tel:0908679635',
                    'content-H22_2':'📞 0903617376',
                    'content-H22_3':'📞 0908679635',
                    'content-H23':'Socials',
                    'content-H24':'Địa chỉ',
                    'content-H25':'331 Trần Hưng Đạo, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh',
                    'content-H26':'UY TÍN - CHẤT LƯỢNG - DỊCH VỤ & THẨM MỸ LÀ NHỮNG TIÊU CHÍ MÀ LEE HAIR SALON ĐẶT LÊN HÀNG ĐẦU',
                    'content-H27': 'KHÔNG GIAN & ĐỘI NGŨ',
                    'content-H28': 'HỆ  THỐNG  HAIR  STYLIST',
                    'content-H29': 'Đội ngũ nhân sự được chọn lọc kỹ càng từ đầu vào. Training và luôn cập nhập các kỹ thuật mới nhằm mang đến cho khách hàng một sản phẩm chất lượng và trải nghiệm tuyệt vời!',
                    'content-H30': 'FOUNDER/MASTER',
                    'content-H31': '10 năm kinh nghiệm',
                    'content-H32': 'LÊ NGỌC PHÁT',
                    'content-H33': 'Mr. Lee Phat không chỉ là một Hair Artist nổi tiếng với kỹ thuật tẩy nhuộm đầy tài tình. Với kinh nghiệm hơn 10 năm.',
                    'content-H34': 'Trường Phái Vidal Sassoon kết hợp phong cách Nhật - Hàn tạo ra một phong cách riêng biệt.',
                    'content-H35': 'Đã được đào tạo bởi các chuyên gia quốc tế từ Anh, Ý, Pháp, Nhật, và Hàn, mang đến những kiến thức và kỹ năng đỉnh cao.',
                    'content-H36': 'Thế mạnh: Cắt, Uốn, Duỗi, Nhuộm, Balayage, Highlight.',
                    'content-H37': '- Mr. Le Ngoc Phat -',
                    'content-H38': 'SENIOR STYLIST',
                    'content-H39': 'KHÁNH NHƯ',
                    'content-H40': 'Kinh nghiệm từ 5 năm+',
                    'content-H41': '"Cá tính. Sự thông minh. Mạnh Mẽ và Phong cách. Đó là những điều làm nên vẻ đẹp"',
                    'content-H42': 'JUNIOR STYLIST',
                    'content-H43': 'THANH NGỌC',
                    'content-H44': 'Kinh nghiệm từ 3 năm+',
                    'content-H45': '"Yêu cái đẹp là thưởng thức. Tạo ra cái đẹp là nghệ thuật"',
                    'content-H46': '"ĐẸP MỖI NGÀY, TỰ TIN TRONG MỌI KHOẢNH KHẮC"',
                    'content-H47': '- LEE HAIR SALON -',
                    'content-H48': 'GIÁ TRỊ CỐT LÕI',
                    'content-H49': 'Những năm qua chúng tôi chưa bao giờ ngừng cải tiến và phát triển tay nghề, đội ngũ với các dòng sản phẩm phân khúc cao cấp để mang lại giá trị dịch vụ ngày một tốt hơn.',
                    'content-H50': 'Chúng tôi luôn lắng nghe những đóng góp của khách hàng và lấy đó làm động lực để phát triển dịch vụ ngày càng tốt hơn.',
                    'content-H51': 'BẢNG GIÁ DỊCH VỤ',
                    'content-H52': 'DỊCH VỤ UỐN / DUỖI',
                    'content-H53': 'DỊCH VỤ TẨY NHUỘM',
                    'content-H54': 'DỊCH VỤ PHỤC HỒI',
                    'content-H55': 'DỊCH VỤ PREMIUM',
                    'content-H56': 'LIÊN HỆ NGAY ĐỂ ĐƯỢC HỖ TRỢ TƯ VẤN VÀ THAM GIA CÁC CHƯƠNG TRÌNH GIẢM GIÁ MỚI NHẤT!',
                    'content-H57': '© Lee Hair Salon | 2024',
                    'content-H58': 'Copyright © INet Mowxl | All rights reserved.',
                    'content-H59': 'THƯƠNG HIỆU TIN DÙNG',
                    'content-H60': 'More...',


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

