import { RangeSlider } from "flowbite-react";

export default function Range2() {
    return (
        <div className="flex flex-col gap-2 w-[90%]">
            <p className="flex justify-between items-center font-normal text-[15px] leading-[16px]">
                <span>Срок инвестирования</span>
                <span className="text-[#000] font-[700] ">24 месяца</span>
            </p>
            <RangeSlider max={200} min={5} step={9} />
            
        </div>
    )
}