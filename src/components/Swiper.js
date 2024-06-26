import { Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination} from "swiper/modules";

export const SwiperComponent = ({ swiperImage, handleChange}) => {
    return (
        <div className="main">
            <Swiper
                centeredSlides
                pagination
                navigation
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                onTransitionEnd={handleChange}
            >
                {swiperImage.map(item =>
                    <SwiperSlide key={item}>
                        <img style={{width:'500px', height:'300px'}} src={item.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
