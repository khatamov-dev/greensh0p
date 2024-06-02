import left from "../../../assets/images/Rectangle 355.png"
import center from "../../../assets/images/Rectangle 356.png"
import right from "../../../assets/images/Rectangle 357.png"

export default function SupportCard() {
    return(
        <div className="flex flex-col gap-[3rem] py-[5rem]">
            <h1 className="md:text-[34px] text-[28px] leading-[30px] md:leading-[37px] font-[400] px-[1rem] md:px-[3rem]">Отзывы клиентов</h1>
            <div className="md:py-[4rem] py-[1rem] px-[1rem] md:px-[4rem] bg-white md:bg-[#F0F4F8] md:rounded-tl-[120px] md:rounded-br-[120px] flex flex-col items-center gap-[2rem] md:gap-[3rem]">
                <div className="flex justify-between items-center gap-[1rem] md:gap-[2rem]">
                    <div className="flex flex-col md:w-auto w-full gap-[1rem] items-start">
                        <img className="md:w-auto w-full" src={left} alt="" />
                        <span>
                        <h1 className="text-[16px] md:text-[19px] leading-[22px] md:leading-[25px] font-[700]">Евгений Садков</h1>
                        <p className="md:text-[16px] text-[12px] leading-[16px] md:leading-[22px] font-[400] text-[#6E9BB8]">Программа  –  Экспресс Рассрочка</p>
                        </span>
                    </div>
                    <div className="md:flex md:flex-col hidden gap-[1rem] items-start">
                        <img src={center} alt="" />
                        <span>
                        <h1 className="text-[19px] leading-[25px] font-[700]">Анастасия Майер</h1>
                        <p className="text-[16px] leading-[22px] font-[400] text-[#6E9BB8]">Инвестиции  –  Вклад Активный</p>
                        </span>
                    </div>
                    <div className="md:flex md:flex-col hidden gap-[1rem] items-start">
                        <img src={right} alt="" />
                        <span>
                        <h1 className="text-[19px] leading-[25px] font-[700]">Фанзиль Гарипов</h1>
                        <p className="text-[16px] leading-[22px] font-[400] text-[#6E9BB8]">Программа  –  Авто Рассрочка</p>
                        </span>
                    </div>
                    
                    
                </div>
                <button className="md:px-[6rem] md:w-auto w-full py-[1rem] rounded-tl-[20px] rounded-br-[20px] bg-[#F0F4F8] md:bg-white text-[#0000DE] text-[14px] leading-[15px] font-[400]">
                Смотреть больше отзывов
                </button>
                <p className=""></p>
            </div>
        </div>
    )
}