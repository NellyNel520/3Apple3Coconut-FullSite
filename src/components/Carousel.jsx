import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


const Carousel = () => {
	const slides = [
		{
			customerPhoto:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeRallp1z7XTgI7wS7Kez1AlOoqruX9bKVA&usqp=CAU',
			review:
				'3 Apple 3 Coconut is a Jamaican culinary gem! The jerk chicken and patties are bursting with authentic flavors that transport you to the lively streets of Jamaica. The warm staff and vibrant atmosphere make every visit a celebration of delicious food and rich culture. A must-try for anyone seeking an authentic taste of Jamaica!',
			customerName: 'Briana M.',
			customerTitle: '',
		},
		{
			customerPhoto: 'https://randomuser.me/api/portraits/women/30.jpg',
			review:
				'Discovering 3 Apple 3 Coconut was a taste bud revelation! Each bite is a direct ticket to Jamaica, with flavors so authentic you can practically feel the Caribbean breeze. Highly recommended!',
			customerName: 'Amanda. T.',
			customerTitle: '',
		},
		{
			customerPhoto: 'https://randomuser.me/api/portraits/men/54.jpg',
			review:
				"Jamaican food enthusiasts, rejoice! 3 Apple 3 Coconut serves up a culinary journey that's as flavorful as it is memorable. The jerk spices are spot-on, and the friendly vibe makes it a go-to for me.",
			customerName: 'Johnathan T.',
			customerTitle: '',
		},
		{
			customerPhoto: 'https://randomuser.me/api/portraits/women/0.jpg',
			review:
				"3 Apple 3 Coconut brings the soul of Jamaica to the streets! From the first savory bite, you're immersed in the island's culinary magic. A true gem for anyone seeking a taste of the Caribbean.",
			customerName: 'Ashley R.',
			customerTitle: '',
		},
		{
			customerPhoto: 'https://randomuser.me/api/portraits/women/68.jpg',
			review:
				'Kudos to 3 Apple 3 Coconut for delivering Jamaican authenticity on wheels! The jerk chicken is a flavor explosion, and the overall experience is like a mini vacation to Jamaica. Delightful!',
			customerName: 'Brittney J.',
			customerTitle: '',
		},
		{
			customerPhoto: 'https://randomuser.me/api/portraits/men/65.jpg',
			review:
				'As a Jamaican food aficionado, I can confidently say that [Food Truck Name] nails it! The patties are perfection, and the staff radiates the warmth of the Caribbean. A delicious escape from the ordinary.',
			customerName: 'Sanji B.',
			customerTitle: '',
		},
		{
			customerPhoto: 'https://randomuser.me/api/portraits/men/28.jpg',
			review:
				'[Food Truck Name] is a culinary treasure trove for Jamaican cuisine lovers! The flavors are bold, the atmosphere is inviting, and each visit feels like a flavorful escape to the heart of Jamaica. Simply fantastic!',
			customerName: 'Jason W.',
			customerTitle: '',
		},
		{
			customerPhoto: 'https://randomuser.me/api/portraits/women/70.jpg',
			review:
				'For an instant Jamaican flavor fix, [Food Truck Name] is the go-to! The jerk spices are on point, and the overall experience is a delightful fusion of authenticity and convenience. A culinary gem on wheels!',
			customerName: 'Crystal C.',
			customerTitle: '',
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}
	return (
		<div className=" justify-center items-center ">
			<h1 className="text-center font-prata text text-green-800 text-4xl">Testimonials</h1>
			<div className="wrapper relative m-8 justify-between mx-10 items-center flex ">
				<ArrowBackIosIcon className="left-0" onClick={prevSlide} />
				<div className="flex flex-col items-center justify-center translate-x-0 transition ease-in-out duration-700 ">
					<img className='border-none rounded-[50%] w-[8%] mb-4' src={slides[currentIndex].customerPhoto} alt="customer-photo" />
					<img
						src="https://img.icons8.com/sf-black-filled/355E3B/54/quote-left.png"
						alt="quote-left"
            className='mb-8'
					/>
					<p className='w-[80%] text-center mb-9 font-play text-lg'>{slides[currentIndex].review}</p>
					<span>~{slides[currentIndex].customerName}</span>
				</div>

				<ArrowForwardIosIcon className="right-0 " onClick={nextSlide} />
			</div>
			<div className="flex top-4 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className="text-2xl cursor-pointer"
					>
						{slideIndex === currentIndex ? (
							<img src="https://img.icons8.com/ios-filled/FFD700/28/filled-circle.png" alt="filled-circle"/>
						) : (
							<img
								src="https://img.icons8.com/ios-filled/355E3B/28/circled.png"
								alt="circled"
							/>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Carousel
