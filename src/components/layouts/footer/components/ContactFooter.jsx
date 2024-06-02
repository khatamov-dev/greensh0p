import Container from "../../../Container"
import facebook from "../../../../assets/icons/FacebookLogo.svg"
import whatsup from "../../../../assets/icons/WhatsappLogo.svg"
import telegram from "../../../../assets/icons/TelegramLogo.svg"
import youtube from "../../../../assets/icons/YoutubeLogo.svg"
import instagram from "../../../../assets/icons/InstagramLogo.svg"
import { Collapse } from "antd";
import FooterCollapse from "./FooterCollapse"

export default function ContactFooter() {
    return(
        <Container>
        <div className="bg-[#F0F4F8] md:flex md:flex-row gap-[2rem] flex flex-col md:items-center md:justify-between">
            <div className="flex flex-col gap-[1rem] md:gap-[2rem] w-[270px]">
                <span className="">
                    <h1 className="text-[37px] leading-[40px] text-[#0000DE]">8 800 2700 700</h1>
                    <p className="text-[12px] leading-[13px] text-[#6E9BB8]">support@nur.finance</p>
                </span>

                <span>
                    <h3 className="text-[18px] leading-[19px] text-[#0000DE]">Казань, ул. Мавлютова, дом 31</h3>
                    <p className="text-[12px] leading-[13px] text-[#6E9BB8]">Мы работаем с 08:00 до 20:00</p>
                </span>

                <span className="flex items-center justify-between">
                    <button className="w-[43px] bg-white flex items-center justify-center p-[5px] h-[43px] rounded-[6px]"><img src={facebook} alt="" /></button>
                    <button className="w-[43px] bg-white flex items-center justify-center p-[5px] h-[43px] rounded-[6px]"><img src={whatsup} alt="" /></button>
                    <button className="w-[43px] bg-white flex items-center justify-center p-[5px] h-[43px] rounded-[6px]"><img src={telegram} alt="" /></button>
                    <button className="w-[43px] bg-white flex items-center justify-center p-[5px] h-[43px] rounded-[6px]"><img src={youtube} alt="" /></button>
                    <button className="w-[43px] bg-white flex items-center justify-center p-[5px] h-[43px] rounded-[6px]"><img src={instagram} alt="" /></button>
                </span>
            </div>



            <div className="w-[60%] hidden md:flex gap-[2rem] items-center justify-between ">
                <div className="flex flex-col gap-[2rem]">
                    <h1 className="text-[20px] leading-[22px] text-[#0000DE]">Инвестиции</h1>
                    <div className="text-[14px] leading-[15px] text-black flex flex-col gap-[1rem]">
                        <a href="#">Вклад Накопительный</a>
                        <a href="#">Вклад Активный</a>
                        <a href="#">Вклад Комфорт</a>
                        <a href="#">Калькулятор</a>
                        <a href="#">Отзывы по инвестициям</a>
                    </div>
                </div>

                <div className="flex flex-col gap-[2rem]">
                    <h1 className="text-[20px] leading-[22px] text-[#0000DE]">Рассрочка</h1>
                    <div className="text-[14px] leading-[15px] text-black flex flex-col gap-[1rem]">
                        <a href="#">АвтоРассрочка</a>
                        <a href="#">Долевое финансирование</a>
                        <a href="#">Долговое финансирование</a>
                        <a href="#">Калькулятор</a>
                        <a href="#">Отзывы по займам</a>
                    </div>
                </div>

                <div className="flex flex-col gap-[2rem]">
                    <h1 className="text-[20px] leading-[22px] text-[#0000DE]">Компания</h1>
                    <div className="text-[14px] leading-[15px] text-black flex flex-col gap-[1rem]">
                        <a href="#">О компании</a>
                        <a href="#">Новости</a>
                        <a href="#">Отчетность</a>
                        <a href="#">Сотрудничество</a>
                        <a href="#">Реквизиты</a>
                    </div>
                </div>

                <div className="flex flex-col gap-[2rem]">
                    <h1 className="text-[20px] leading-[22px] text-[#0000DE]">Информация</h1>
                    <div className="text-[14px] leading-[15px] text-black flex flex-col gap-[1rem]">
                        <a href="#">Халяль подробно</a>
                        <a href="#">Наши партнеры</a>
                        <a href="#">Частые вопросы</a>
                        <a href="#">Личный кабинет</a>
                        <a href="#">Контакты</a>
                    </div>
                </div>
            </div>

            <div className="md:hidden flex w-[100%]">
            <FooterCollapse />
            </div>
        </div>
        </Container>
    )
}