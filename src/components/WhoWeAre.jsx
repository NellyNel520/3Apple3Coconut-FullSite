import React from 'react'
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
	return (
		<div className="flex flex-wrap items-center justify-between mx-[8%] my-10">
			<div className="w-[40rem] mb-4">
				<h1 className="text-4xl font-bold font-play tracking-tight text-red-500 sm:text-6xl">
					Who We Are
				</h1>
				<p className="mt-4 text-xl text-gray-500 ">
					This year, our new summer collection will shelter you from the harsh
					elements of a world that doesn't care if you live or die.
				</p>

				<Link to='/about'>
					<button className="border-2 rounded text-white p-3 mt-7 hover:bg-white hover:text-green-700 uppercase ">
						Learn More
					</button>
				</Link>
			</div>

			<img
				src="https://sightbuilder.s3.us-east-1.amazonaws.com/uploads/107/1701539837667_IMG_3226.jpeg"
				alt="truck"
				className="w-[25rem] rounded-lg"
			/>
		</div>
	)
}

export default WhoWeAre
