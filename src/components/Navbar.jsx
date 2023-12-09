import React, { useState } from 'react'
import Logo2 from '../assets/logos/fullLogo-foodTruck-white.png'
import { Link } from 'react-router-dom'
// Icons
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import '../index.css'

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isNavOpen, setIsNavOpen] = useState(false)

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true)
		return () => (window.onscroll = null)
	}
	return (
		<div className="bg-transparent w-full">
			<div className="flex items-center justify-between p-6">
				<div className="w-[8rem] mr-2">
					<img src={Logo2} alt="logo" />
				</div>

				<div>
					{/* add bg color or make transparent for mobile menu */}
					<section className="MOBILE-MENU flex lg:hidden">
						<div
							className="space-y-2"
							onClick={() => setIsNavOpen((prev) => !prev)}
						>
							{/* <MenuIcon className='text-red-500'/> */}
							<img
								src="https://img.icons8.com/ios-filled/ff0000/35/menu--v6.png"
								alt="menu"
							/>
						</div>

						<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
							<div
								className="absolute top-6 right-0 px-8 py-8"
								onClick={() => setIsNavOpen(false)}
							>
								{/* <CloseIcon /> */}
                <img src='https://img.icons8.com/ios-glyphs/ff0000/30/delete-sign.png' alt='close' />
							</div>

							<ul className="flex flex-col items-center justify-between min-h-[250px]">
								<Link to='/'>
									<li className=" text-red-500 hover:text-yellow-400  border-gray-400 my-8 uppercase">
										Home
									</li>
								</Link>
								<Link to='menu'>
									<li className=" text-red-500  hover:text-yellow-400 border-gray-400 my-8 uppercase">
										Menu
									</li>
								</Link>
								<Link to='about'>
									<li className=" text-red-500  hover:text-yellow-400 border-gray-400 my-8 uppercase">
										Our Story
									</li>
								</Link>
								<Link to='schedule'>
									<li className=" text-red-500  hover:text-yellow-400  border-gray-400 my-8 uppercase">
										Find Us
									</li>
								</Link>
								<Link to='catering'>
									<li className=" text-red-500  hover:text-yellow-400 border-gray-400 my-8 uppercase">
										Catering
									</li>
								</Link>
								<Link to='gallery'>
									<li className=" text-red-500  hover:text-yellow-400 border-gray-400 my-8 uppercase">
										Gallery
									</li>
								</Link>
								<Link to='contact'>
									<li className=" text-red-500  hover:text-yellow-400 border-gray-400 my-8 uppercase">
										Contact Us
									</li>
								</Link>
							</ul>
						</div>
					</section>

					<ul className="DESKTOP-MENU hidden space-x-8 lg:flex mt-12">
						<Link to='/'>
							<li className=" text-red-500 my-8 uppercase  hover:text-yellow-400">Home</li>
						</Link>
						<Link to='/menu'>
							<li className=" text-red-500 my-8 uppercase  hover:text-yellow-400">Menu</li>
						</Link>
						<Link to='/about'>
							<li className=" text-red-500  my-8 uppercase  hover:text-yellow-400">Our Story</li>
						</Link>
						<Link to='/schedule'>
							<li className=" text-red-500   my-8 uppercase  hover:text-yellow-400">Find Us</li>
						</Link>
						<Link to='/catering'>
							<li className=" text-red-500  my-8 uppercase  hover:text-yellow-400">Catering</li>
						</Link>
						<Link to='gallery'>
							<li className=" text-red-500  my-8 uppercase  hover:text-yellow-400">Gallery</li>
						</Link>
						<Link to='/contact'>
							<li className=" text-red-500   my-8 uppercase  hover:text-yellow-400">Contact Us</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
