import React, { useState } from 'react'
import Logo2 from '../assets/logos/fullLogo-foodTruck-white.png'
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
			<div className="flex items-center justify-between p-5">
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
							<MenuIcon />
						</div>

						<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
							<div
								className="absolute top-6 right-0 px-8 py-8"
								onClick={() => setIsNavOpen(false)}
							>
								<CloseIcon />
							</div>

							<ul className="flex flex-col items-center justify-between min-h-[250px]">
								<li className="border-b text-red-500  border-gray-400 my-8 uppercase">
									Home
								</li>
								<li className="border-b text-red-500  border-gray-400 my-8 uppercase">
									Menu
								</li>
								<li className="border-b text-red-500  border-gray-400 my-8 uppercase">
									Our Story
								</li>
								<li className="border-b text-red-500  border-gray-400 my-8 uppercase">
									Find Us
								</li>
								<li className="border-b text-red-500  border-gray-400 my-8 uppercase">
									Catering
								</li>
								<li className="border-b text-red-500  border-gray-400 my-8 uppercase">
									Gallery
								</li>
								<li className="border-b text-red-500  border-gray-400 my-8 uppercase">
									Contact Us
								</li>
							</ul>
						</div>
					</section>

					<ul className="DESKTOP-MENU hidden space-x-8 lg:flex mt-12">
						<li className=" text-red-500 my-8 uppercase">Home</li>
						<li className=" text-red-500 my-8 uppercase">Menu</li>
						<li className=" text-red-500  my-8 uppercase">Our Story</li>
						<li className=" text-red-500   my-8 uppercase">Find Us</li>
						<li className=" text-red-500  my-8 uppercase">Catering</li>
						<li className=" text-red-500  my-8 uppercase">Gallery</li>
						<li className=" text-red-500   my-8 uppercase">Contact Us</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
