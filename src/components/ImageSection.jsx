import React from 'react'
import { Link } from 'react-router-dom'

const ImageSection = () => {
	return (
		<section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative ">
			<div className="container xl:mx-[9%] lg:mx-[6%] mx-[12%] ">
				{/* <h2 className="text-3xl font-light   text-black sm:text-4xl lg:text-5xl">
					it's{' '}
					<span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">
						Services
					</span>{' '}
					in one single line.
				</h2>
				<p className="mb-20 text-lg text-gray-900">
					Comes directly from the desk of engineers, creators and managers at
					Skcript.
				</p> */}

				<div className="grid grid-cols-1 gap-10   lg:grid-cols-4">


					<Link className=" shadow-2xl relative w-[75%] lg:w-[90%]">
						<div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
							<div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
								<div className="w-full h-full   p-5   relative">
									<div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
										<h2 className="text-2xl font-bold  text-white mb-0 pb-1">
                    {/* dish name */}
											Standard Color
										</h2>
                    {/* dish description */}
										<p className="text-lg font-light text-white">
											Lorem ipsum dolor sit amet, #brands.
										</p>
									</div>
								</div>
							</div>
							<img src="https://www.butterbeready.com/wp-content/uploads/2022/09/DK6A5754-680x1020.jpg" alt="" className="w-full z-0  h-full  rounded-lg  object-fill example "/>
						</div>
					</Link>

          <Link className=" shadow-2xl relative w-[75%] lg:w-[90%]">
						<div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
							<div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
								<div className="w-full h-full   p-5   relative">
									<div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
										<h2 className="text-2xl font-bold  text-white mb-0 pb-1">
                    {/* dish name */}
											Standard Color
										</h2>
                    {/* dish description */}
										<p className="text-lg font-light text-white">
											Lorem ipsum dolor sit amet, #brands.
										</p>
									</div>
								</div>
							</div>
							<img src="https://www.butterbeready.com/wp-content/uploads/2022/09/DK6A5754-680x1020.jpg" alt="" className="w-full z-0  h-full  rounded-lg  object-fill example "/>
						</div>
					</Link>

          <Link className=" shadow-2xl relative w-[75%] lg:w-[90%]">
						<div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
							<div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
								<div className="w-full h-full   p-5   relative">
									<div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
										<h2 className="text-2xl font-bold  text-white mb-0 pb-1">
                    {/* dish name */}
											Standard Color
										</h2>
                    {/* dish description */}
										<p className="text-lg font-light text-white">
											Lorem ipsum dolor sit amet, #brands.
										</p>
									</div>
								</div>
							</div>
							<img src="https://www.butterbeready.com/wp-content/uploads/2022/09/DK6A5754-680x1020.jpg" alt="" className="w-full z-0  h-full  rounded-lg  object-fill example "/>
						</div>
					</Link>

          <Link className=" shadow-2xl relative w-[75%] lg:w-[90%]">
						<div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group rounded-lg">
							<div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
								<div className="w-full h-full   p-5   relative">
									<div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
										<h2 className="text-2xl font-bold  text-white mb-0 pb-1">
                    {/* dish name */}
											Standard Color
										</h2>
                    {/* dish description */}
										<p className="text-lg font-light text-white">
											Lorem ipsum dolor sit amet, #brands.
										</p>
									</div>
								</div>
							</div>
							<img src="https://www.butterbeready.com/wp-content/uploads/2022/09/DK6A5754-680x1020.jpg" alt="" className="w-full z-0  h-full  rounded-lg  object-fill example "/>
						</div>
					</Link>


        





				</div>
			</div>
		</section>
	)
}

export default ImageSection
