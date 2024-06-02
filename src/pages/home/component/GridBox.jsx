import bobocha from "../../../assets/images/Mask Group.png"
import akacha from "../../../assets/images/handsome-businessman-suit-glasses-cross-arms-chest-look 1.png"

export default function GridBox() {
    return(
        <div className="py-[2rem] flex flex-col gap-[1rem]">
            <div className="md:flex flex md:flex-row flex-col gap-[1rem]">

                <div className="md:w-[70%] w-full md:h-[360px] bg-[#F0F4F8] rounded-[6px] flex md:flex-row md:justify-center md:items-center items-start gap-[1rem] py-[2rem] md:py-[1rem] px-[2rem]">
                    
                    <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
                        <span className="">
                            <p className="text-[14px] leading-[15px] text-[#79A6C3]">Инвестиции</p>

                            <h1 className="md:text-[24px] text-[20px] md:leading-[26px] leading-[22px] font-bold">Вклад Комфорт</h1>
                        </span>

                        <span className="flex gap-[2rem] items-start">
                            <span className="flex flex-col gap-1">
                                <h1 className="md:text-[36px] text-[24px] md:leading-[39px] leading-[26px] text-[#355dfb] font-black">17,5%</h1>
                                <p className="md:text-[14px] text-[12px] md:leading-[15px] leading-[13px]">Доходность, до</p>
                            </span>
                            <span>
                                <h1 className="md:text-[36px] text-[24px] md:leading-[39px] leading-[26px] text-[#355dfb] font-black">90 дней</h1>
                                <p className="md:text-[14px] text-[12px] md:leading-[15px] leading-[13px]">Срок вклада, от</p>
                            </span>
                        </span>

                        <p className="md:text-[16px] text-[12px] md:leading-[22px] leading-[16px] text-[#6e9bb8]">Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>

                        <span className="flex gap-[2rem]"> 
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] bg-[#0000de] text-white">Инвестировать</button>
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] text-[#0000de] bg-white">Подробнее</button>
                        </span>
                    </div>

                    <img className="md:flex hidden" src={bobocha} alt="" />
                </div>




                <div className="md:w-[30%] w-full md:h-[360px] h-auto bg-[#F0F4F8] rounded-[6px] flex flex-col md:gap-[2rem] gap-[1rem] justify-center py-[2rem] md:py-[1rem] px-[2rem]">

                <span className="">
                            <p className="text-[14px] leading-[15px] text-[#79A6C3]">Финансирование</p>

                            <h1 className="md:text-[24px] text-[20px] md:leading-[26px] leading-[22px] font-bold">Авто Рассрочка</h1>
                        </span>

                        <span className="flex gap-[2rem] items-start">
                            <span className="flex flex-col gap-1">
                                <h1 className="md:text-[36px] text-[24px] leading-[26px] md:leading-[39px] text-[#355dfb] font-black">5 млн</h1>
                                <p className="text-[14px] leading-[15px]">Сумма, до</p>
                            </span>
                            <span>
                                <h1 className="md:text-[36px] text-[24px] leading-[26px] md:leading-[39px] text-[#355dfb] font-black">3 лет</h1>
                                <p className="text-[14px] leading-[15px]">Срок, до</p>
                            </span>
                        </span>

                        <p className="md:text-[14px] text-[12px] leading-[16px] md:leading-[19px] text-[#6e9bb8]">Отсутствие обязательности страхования КАСКО. Первоначальный взнос от 10%</p>

                        <span className="flex gap-[2rem]"> 
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] bg-[#0000de] text-white">Оформить</button>
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] text-[#0000de] bg-white">Подробнее</button>
                        </span>

                </div>



            </div>

            <div className="flex md:flex-row flex-col gap-[1rem]">

                <div className="md:w-[30%] w-full md:h-[360px] bg-[#F0F4F8] rounded-[6px] flex flex-col gap-[1rem] md:gap-[2rem] justify-center py-[2rem] md:py-[1rem] px-[2rem]">

                <span className="">
                            <p className="text-[14px] leading-[15px] text-[#79A6C3]">Финансирование</p>

                            <h1 className="md:text-[24px] text-[20px] md:leading-[26px] leading-[22px] font-bold">Экспресс Рассрочка</h1>
                        </span>

                        <span className="flex gap-[2rem] items-start">
                            <span className="flex flex-col gap-1">
                                <h1 className="md:text-[36px] text-[24px] leading-[26px] md:leading-[39px] text-[#355dfb] font-black">1 млн</h1>
                                <p className="text-[14px] leading-[15px]">Сумма, до</p>
                            </span>
                            <span>
                                <h1 className="md:text-[36px] text-[24px] leading-[26px] md:leading-[39px] text-[#355dfb] font-black">3 лет</h1>
                                <p className="text-[14px] leading-[15px]">Срок, до</p>
                            </span>
                        </span>

                        <p className="text-[14px] leading-[19px] text-[#6e9bb8]">Финансирование физическим лицам для приобретения необходимых товаров</p>

                        <span className="flex gap-[2rem]"> 
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] bg-[#0000de] text-white">Оформить</button>
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] text-[#0000de] bg-white">Подробнее</button>
                        </span>

                </div>

                <div className="md:w-[70%] w-full md:h-[360px] bg-[#F0F4F8] rounded-[6px] flex justify-center items-center gap-[1rem] py-[2rem] md:py-[1rem] px-[2rem]">
                    <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
                        <span className="">
                            <p className="text-[14px] leading-[15px] text-[#79A6C3]">Инвестиции</p>

                            <h1 className="md:text-[24px] text-[20px] md:leading-[26px] leading-[22px] font-bold">Вклад Активный</h1>
                        </span>

                        <span className="flex gap-[2rem] items-start">
                            <span className="flex flex-col gap-1">
                                <h1 className="md:text-[36px] text-[24px] leading-[26px] md:leading-[39px] text-[#355dfb] font-black">16,5%</h1>
                                <p className="text-[14px] leading-[15px]">Доходность, до</p>
                            </span>
                            <span>
                                <h1 className="md:text-[36px] text-[24px] leading-[26px] md:leading-[39px] text-[#355dfb] font-black">90 дней</h1>
                                <p className="text-[14px] leading-[15px]">Срок вклада, от</p>
                            </span>
                        </span>

                        <p className="text-[16px] leading-[22px] text-[#6e9bb8]">Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>

                        <span className="flex gap-[2rem]"> 
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] bg-[#0000de] text-white">Инвестировать</button>
                            <button className="py-[1rem] px-[1rem] md:px-[2rem] rounded-tl-[20px] rounded-br-[20px] text-[14px] leading-[15px] text-[#0000de] bg-white">Подробнее</button>
                        </span>
                    </div>
                    <img className="md:flex hidden" src={akacha} alt="" />
                </div>

            </div>
        </div>
    
    )
}