import React from 'react'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import ImageSlider from '../components/ImageSection'
import Carousel from '../components/Carousel'

const Home = () => {
	return (
		<div className="h-">
			<Hero />
			<WhoWeAre />
			<ImageSlider />
			<Carousel />
		</div>
	)
}

export default Home
