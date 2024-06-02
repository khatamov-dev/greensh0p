import { RangeSlider } from "flowbite-react";

export default function Range3() {
    return (
        <div className="flex flex-col gap-2 w-[90%]">
            <p className="flex justify-between items-center font-normal text-[15px] leading-[16px]">
                <span>Пополнение вклада</span>
                <span className="text-[#000] font-[700] ">30 000 ₽ /в месяц</span>
            </p>
            <RangeSlider max={200} min={5} step={2} />
            
        </div>
    )
}