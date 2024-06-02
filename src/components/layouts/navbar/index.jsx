import { Link } from "react-router-dom";
import Container from "../../Container";
import logo from "../../../assets/images/Frame.png"
import bars from "../../../assets/icons/List.svg"

function Navbar() {
	return (
			<nav className='flex  items-center  md:justify-between justify-around text-[#0000DE] border-b-[0.3px] md:px-[3rem] md:py-[2rem] py-[1rem] bg-[#F0F4F8]'>

			<img className="md:hidden flex" src={bars} alt="" />
				
			<Link to='/'>
					<img className="w-[158px] md:w-[227px]  " src={logo} alt="" />
				</Link>
				
				<ul className='md:flex hidden items-center gap-8 h-full links'>
				
					<li>
						<a href='#'>Инвестиции</a>
					</li>

					<li>
						<a href='#'>Рассрочка</a>
					</li>

					<li>
						<a href='#'>Калькулятор</a>
					</li>

					
				</ul>

				<div className="flex gap-[1rem]">
					<button className='md:text-[14px] text-[12px]  md:leading-[15px] leading-[13px] text-white bg-[#0000DE] md:rounded-tl-[20px] rounded-tl-[16px] md:rounded-br-[20px] rounded-br-[16px] md:w-[174px] w-[127px] md:h-[48px] h-[31px]'>
					Личный Кабинет
					</button>
					
					<button	className='md:flex items-center justify-center hidden text-[12px] md:text-[14px] md:leading-[15px] leading-[13px] text-[#0000de] bg-white rounded-tl-[20px] rounded-br-[20px] w-[160px] h-[48px]'>
						Онлайн-заявка
					</button>
					</div>
			</nav>
	);
}

export default Navbar;
