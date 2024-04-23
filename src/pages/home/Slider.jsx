// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderItem from './SliderItem';

export const Slider = () => {
	const sliderItems = [
		{ text: 'Kemasan Isi Ulang 500ml', image: 'bango-hitam.png' },
		{ text: 'Bango Kecap Manis Hitam...', image: 'bango-kecap-manis.png' },
		{ text: 'Buavita Guava', image: 'buavita-guava.png' },
		{ text: 'Buavita Korean Peach', image: 'buavita-korean.png' },
		{ text: 'Jawara Cabai Tabur Bawang', image: 'jawara-bawang-goreng.png' },
		{ text: 'Royco Kaldu Ayam Special', image: 'royco-ayam-spesial.png' },
		{ text: 'Royco Kaldu Rasa Ayam', image: 'royco-kaldu-ayam.png' },
		{ text: 'Royco Kaldu Rasa Jamur', image: 'royco-kaldu-jamur.png' },
		{ text: 'Royco Kaldu Rasa Sapi', image: 'royco-kaldu-sapi.png' },
		{ text: 'Royco Saus Tiram', image: 'royco-saus-tiram.png' },
		{ text: 'SariWangi Teh Asli', image: 'sariwangi-teh-asli.png' },
		{
			text: 'Jawara Saus Sambal Extra',
			image: 'saus-sambal-jawara-extra-hot.png',
		},
	];

	return (
		<Swiper
			className='h-[450px] '
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			slidesPerView={2}
			spaceBetween={10}
			breakpoints={{
				640: {
					slidesPerView: 6,
					spaceBetween: 10,
				},
			}}
			navigation
			pagination={{ clickable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			{sliderItems.map((item) => {
				return (
					<SwiperSlide key={item.text} className='pt-[80px] '>
						<SliderItem text={item.text} image={item.image} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
