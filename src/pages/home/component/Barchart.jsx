import coin from "../../.././assets/icons/Coin.svg"
import wallet from "../../.././assets/icons/Wallet.svg"
import barchart from "../../../assets/icons/ChartBar.svg"
import shit from "../../.././assets/icons/ShieldChevron.svg"
import line from "../../../assets/images/Group 116.png"

export default function Barchart() {
    return(
        <div className="py-[5rem] flex flex-col gap-[2rem]">
            <h1 className="text-[34px] leading-[37px] font-[400]">Ваши возможности с НурФинанс</h1>
            <div className="flex justify-between gap-[2rem] items-end">

                
                <div className=" w-[30%] flex flex-col gap-[2rem] items-start">

                    <div className="flex flex-col gap-[2.5rem]">
                        <span className="flex items-center gap-[2rem]">
                            <img src={coin} alt="" />
                            <p className="text-[16px] leading-[22px] font-[400]">Накапливайте, принося пользу окружающим (обществу)</p>
                        </span>
                        <span className="flex items-center gap-[2rem]">
                            <img src={wallet} alt="" />
                            <p className="text-[16px] leading-[22px] font-[400]">Зарабатывайте честно и справедливо</p>
                        </span>
                        <span className="flex items-center gap-[2rem]">
                            <img src={barchart} alt="" />
                            <p className="text-[16px] leading-[22px] font-[400]">Вкладывайте в реальные проверенные сделки</p>
                        </span>
                        <span className="flex items-center gap-[2rem]">
                            <img src={shit} alt="" />
                            <p className="text-[16px] leading-[22px] font-[400]">Обеспечьте вложения надежными активами</p>
                        </span>
                    </div>
                    <button className="text-[14px] leading-[15px] font-[400] text-white bg-[#0000DE] rounded-tl-[20px] rounded-br-[20px] px-[2rem] py-[1rem]">
                    Инвестиционные продукты
                    </button>
                </div>




                <div className="flex flex-col gap-[3rem] justify-between">
                    <div className="flex justify-between gap-[2rem]">
                        <div className="flex flex-col gap-[2rem]">
                            <h1 className="text-[18px] leading-[21px] font-[400]">Получайте повышенный доход от вложений</h1>
                            <div className="flex items-end justify-center gap-[2rem]">

                                <div className="flex flex-col gap-[1rem]">
                                    <span>
                                        <h1 className="text-[30px] leading-[33px] font-[700] text-[#7C83A1]"><span className="text-[20px] leading-[22px] font-[700]">до</span> 8%</h1>
                                    <p className="text-[14px] leading-[15px] font-[400] text-[#7C83A1]">Годовых</p>
                                    </span>
                                    <div className="bg-[#C9CEE1] rounded-tl-[18px] rounded-br-[18px] w-[95px] h-[33px] border"></div>
                                    <p className="text-[14px] leading-[16px] font-[400]">Банковские вклады</p>
                                </div>

                                <div className="flex flex-col gap-[1rem]">
                                    <span>
                                        <h1 className="text-[30px] leading-[33px] font-[700] text-[#355DFB]"><span className="text-[20px] leading-[22px] font-[700]">до</span> 19%</h1>
                                    <p className="text-[14px] leading-[15px] font-[400]">Годовых</p>
                                    </span>
                                    <div className="bg-[#355DFB] rounded-tl-[18px] rounded-br-[18px] w-[95px] h-[105px] border"></div>
                                    <p className="text-[14px] leading-[16px] font-[700] text-[#355DFB]">Банковские вклады</p>
                                </div>

                                <div className="flex flex-col gap-[1rem]">
                                    <span>
                                        <h1 className="text-[30px] leading-[33px] font-[700] text-[#7C83A1]"><span className="text-[20px] leading-[22px] font-[700]">до</span> 9%</h1>
                                    <p className="text-[14px] leading-[15px] font-[400] text-[#7C83A1]">Годовых</p>
                                    </span>
                                    <div className="bg-[#C9CEE1] rounded-tl-[18px] rounded-br-[18px] w-[95px] h-[46px] border"></div>
                                    <p className="text-[14px] leading-[16px] font-[400]">Банковские вклады</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <h1 className="text-[18px] leading-[21px]">Инвестируйте со стабильным результатом</h1>
                            <div className="flex flex-col gap-[2rem]">
                            <img src={line} alt="" />
                            <div className="flex gap-[2rem] items-center">
                                <span className="flex gap-[1rem] items-center">
                                    <span className="w-[14px] h-[14px] bg-[#7C83A1] rounded-full"></span>
                                    <p className="text-[14px] leading-[16px] font-[400]">Фондовый <br /> рынок</p>
                                </span>
                                <span className="flex gap-[1rem] items-center">
                                    <span className="w-[14px] h-[14px] bg-[#0000DE] rounded-full"></span>
                                    <p className="text-[14px] leading-[16px] font-[400]">Вклады <br /> НурФинанс</p>
                                </span>
                            </div>
                            </div>


                        </div>
                    </div>


                    <div className="flex flex-col gap-[2rem]">

                        <h1 className="text-[18px] leading-[21px] font-[400]">Возвращайте свои средства вовремя</h1>
                        <div className="flex gap-[2rem] items-center">
                            <div className="flex flex-col gap-[10px]">
                                <p className="text-[16px] leading-[19px] font-[400]"><span className="font-[700]">Недвижимость</span> низкая ликвидность</p>
                                <h1 className="text-[16px] leading-[19px] font-[400] text-[#7C83A1]">Срок возврата <span className="font-[700]">от 3 месяцев</span></h1>
                                <div className="w-[340px] h-[20px] rounded-tl-[14px] rounded-br-[14px] bg-[#EAF0F6]"><div className="w-[76px] h-[20px] rounded-tl-[14px] rounded-br-[14px] bg-[#9AA3C8]"></div></div>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <p className="text-[16px] leading-[19px] font-[400]"><span className="font-[700]">НурФинанс</span> высокая ликвидность</p>
                                <h1 className="text-[16px] leading-[19px] font-[400] text-[#355DFB]">Срок возврата <span className="font-[700]">от 3 месяцев</span></h1>
                                <div className="w-[340px] h-[20px] rounded-tl-[14px] rounded-br-[14px] bg-[#EAF0F6]"><div className="w-[276px] h-[20px] rounded-tl-[14px] rounded-br-[14px] bg-[#355DFB]"></div></div>
                            </div>
                        </div>

                    </div>
                </div>





            </div>
        </div>
    )
}