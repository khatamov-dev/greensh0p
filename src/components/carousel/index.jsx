import CarouselItem from "./CarouselItem";
import { Carousel } from "flowbite-react";
import { Flowbite } from "flowbite-react"
import carouselImg from "../../assets/images/image 1.png";

const customTheme = {
	carousel: {
		control: {
			base: "!hidden",
		},
		indicators: {
			active: {
				off: "bg-[#C3D1E1] hover:bg-[#355DFB]",
				on: "bg-[#355DFB]",
			},
			base: "h-2 w-2 rounded-full",
			wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
		},
	},
};

export default function CarouselComponent() {
	return (
		<div className='my-[2rem]'>
      <Flowbite theme={{
        theme:customTheme
      }}
      >
				<Carousel spellCheck className='md:min-h-[450px] min-h-[200px]'>
					<CarouselItem img={carouselImg} />
					<CarouselItem img={carouselImg} />
					<CarouselItem img={carouselImg} />
					<CarouselItem img={carouselImg} />
				</Carousel>
			</Flowbite>
		</div>
	);
}
