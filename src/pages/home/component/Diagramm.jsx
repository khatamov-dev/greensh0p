import Renge from "../../../components/Renge"
import Renge2 from "../../../components/Renge2"
import Renge3 from "../../../components/Renge3"
import diagramm from "../../../assets/images/Frame (1).png"

export default function Diagramm() {
    return(
        <div className="bg-[#F0F4F8] flex justify-between items-end px-[2rem] py-[2rem] rounded-[6px] rounded-tl-[64px] rounded-br-[64px]">
            
            <div className="flex flex-col gap-[2rem]">
            <h1 className="text-[34px] leading-[37px] font-[400]">Рассчитай свои <br /> накопления и доход</h1>
                <Renge />
                <Renge2 />

                <span className="flex flex-col gap-[2rem]">
                    <p>Порядок выплаты дохода</p>
                    <span className="flex items-center gap-[1rem] justify-between">
                        <label className="flex gap-2 items-center border py-[1rem] px-[1rem] rounded-tl-[20px] rounded-br-[20px] bg-white ">
                            <input type="checkbox"/>
                            <h1 className="text-[16px] font-[400] leading-[16px]">Ежемесячно</h1>
                        </label>
                        <label className="flex gap-2 items-center border border-[#C6D9E9] py-[1rem] px-[1rem] rounded-tl-[20px] rounded-br-[20px]">
                            <input type="checkbox"/>
                            <h1 className="text-[16px] font-[400] text-[#6E9BB8] leading-[16px]">В конце срока</h1>
                        </label>
                        
                    </span>

                </span>



                <Renge3 />

            </div>

            <div>
                <img src={diagramm} alt="" />
            </div>

            <div className="flex flex-col gap-[2rem] bg-white py-[2rem] px-[3rem] rounded-[10px] rounded-br-[120px]">
                <span>
                    <h1 className="text-[36px] leading-[39px] font-[700] text-[#355DFB]">12,5%</h1>
                    <p className="text-[14px] leading-[15px] font-[400]">Доходность</p>
                </span>
                <span>
                    <h1 className="text-[36px] leading-[39px] font-[700] text-[#355DFB]">282 366 ₽</h1>
                    <p className="text-[14px] leading-[15px] font-[400]">Сумма доходности</p>
                </span>
                <span>
                    <h1 className="text-[36px] leading-[39px] font-[700] text-[#355DFB]">1 282 366 ₽</h1>
                    <p className="text-[14px] leading-[15px] font-[400]">Итоговая сумма</p>
                </span>
                <button className="text-[16px] leading-[17px] font-[400] bg-[#0000DE] rounded-tl-[28px] rounded-br-[28px] py-[1rem] px-[1rem] text-white">
                Инвестировать
                </button>
            </div>
        </div>
    )
}