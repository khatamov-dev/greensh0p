import {PropTypes} from 'prop-types'
export default function CarouselItem({img}) {
	return (
		<div className='md:flex md:flex-row flex md:items-center items-center flex-col md:gap-4 gap-[3rem] w-full h-full bg-[#F0F4F8] md:p-10 p-4'>
			<div className='flex flex-col items-start justify-center h-full max-w-[557px]'>

				<h1 className='md:text-[44px] text-[32px] leading-[35px] font-[900] text-[#3D3D3D] md:leading-[48px]'>
				Инвестируйте с повышенной доходностью до <span className='text-[#0000DE]'>19%</span> годовых
				</h1>

				<p className='md:mt-4 mt-2 md:mb-8 mb-3 font-normal md:text-[18px] md:leading-[23px] text-[14px] leaading-[18px] overflow-hidden line-clamp-2'>
				100% обеспеченность активами, прибыль каждые 3 месяца!
				</p>

				<div className="flex gap-[1rem]">
					<button className='md:text-[16px] text-[12px]  md:leading-[17px] leading-[13px] text-white bg-[#0000DE] md:rounded-tl-[28px] rounded-tl-[16px] md:rounded-br-[28px] rounded-br-[16px] md:w-[190px] w-[127px] md:h-[68px] h-[31px]'>
					Инвестировать
					</button>
					
					<button	className='md:text-[16px] text-[12px] md:leading-[17px] leading-[13px] text-[#0000de] bg-white rounded-tl-[28px] rounded-br-[28px] md:w-[160px] w-[120px] md:h-[68px] h-[28px]'>
					Подробнее
					</button>
					</div>
			</div>

			<img className='md:w-[433px] md:h-[437px] w-[306px] object-cover' src={img} alt='carousel-img' />
		</div>
	);
}

CarouselItem.propTypes = {
	img: PropTypes.node,
}


