import React from 'react'
import Logo from '../assets/logos/fullLogo-foodTruck-white.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="w-full rounded shadow bg-black bottom-0 left-0  ">
			<div className="md:py-8 mx-5">
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="w-[9rem]">
						<img src={Logo} alt="logo" />
					</div>

					<ul className='text-gray-400 flex flex-wrap items-center mb-6 text-md lg:mt-[5rem]  font-medium sm:mb-0'>
						<Link to='/contact'>
							<li className=" hover:text-red-500 me-4 md:me-6">Contact Us</li>
						</Link>
            <Link to='/about'>
							<li className=" hover:text-red-500 me-4 md:me-6">Our Story</li>
						</Link>
            <Link to='/reviews'>
							<li className="  hover:text-red-500 me-4 md:me-6">Reviews</li>
						</Link>
            <Link to='/catering'>
							<li className="  hover:text-red-500 me-4 md:me-6">Catering</li>
						</Link>
            <Link to='/menu'>
							<li className="  hover:text-red-500 me-4 md:me-6">Menu</li>
						</Link>
					</ul>


				</div>

        {/* social links and icons */}
        <div className='mb-2'>
        <h1 className="mb-2 text-center text-lg font-monster text-gray-200 mt-3 ">Follow Us!</h1>
        <div className='flex flex-row items-center justify-center'>
        <Link to="https://www.instagram.com/3apples3coconuts">
							<img
								src="https://img.icons8.com/fluency/28/instagram-new.png"
								alt="instagram"
								className="hover:top-[-20px] relative"
							/>
						</Link>
						<Link to="https://m.facebook.com/3apple3coconutsrestaurant">
							<img
								src="https://img.icons8.com/color/28/facebook-new.png"
								alt="facebook"
								className="hover:top-[-20px] relative"
							/>
						</Link>
						<img
							src="https://img.icons8.com/fluency/28/twitter.png"
							alt="twitter"
							className="hover:top-[-20px] relative"
						/>
        </div>
        </div>
       

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <span className="block flex-wrap text-sm text-gray-500 text-center  dark:text-gray-400">© 2023 <a href="https://3apple3coconut.com" className="hover:text-red-500">3 Apple 3 Coconut™</a>. All Rights Reserved.</span>
			</div>
		</div>
	)
}

export default Footer
