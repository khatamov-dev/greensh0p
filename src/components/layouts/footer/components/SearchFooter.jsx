import Container from "../../../Container";
import logo from "../../../../assets/images/Frame.png";
import search from "../../../../assets/icons/MagnifyingGlass.svg";

export default function SearchFooter() {
    return(
        <Container>
            <div className="flex items-center md:justify-between justify-center">
                <img className="md:flex hidden w-[156px]" src={logo} alt="" />
                <label className="md:w-[60%] w-full flex border px-[1rem] bg-white" htmlFor="">
                    <img src={search} alt="" />
                    <input className="w-full h-[48px] border-none outline-none md:text-[14px] md:leading-[15px] text-[#79A6C3]" type="text" placeholder="Поиск по услугам" />
                </label>
            </div>
        </Container>
    )
}