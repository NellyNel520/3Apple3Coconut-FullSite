import React from 'react'
import Logo from '../assets/logos/fullLogo-foodTruck-white.png'

const Hero = () => {
	return (
		<div className="heroSection">
			{/*logo*/}
			<div className="items-center justify-center flex flex-col">
				<img src={Logo} alt="" className="w-[33%]" />

        {/* can add a short statement here 
        option: A taste of the island made with love
        *******option: need to see what wording is on the truck too *********
         */}
				<div className="flex items-center justify-center mt-[5rem]">
					<button className="border-2 rounded text-white p-6 hover:bg-green-700 hover:text-yellow-500 uppercase mx-10">
						View Menu
					</button>
          <button className="border-2 rounded text-white p-5 hover:bg-green-700 hover:text-yellow-500 uppercase mx-10">
						Catering
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
