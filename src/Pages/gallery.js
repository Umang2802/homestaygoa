import React from 'react';
import Card from '../Card/Card'
import './gallery.css'
import { Link } from 'react-router-dom';
import waterfall from '../Images/waterfall.jpg';
import beach from '../Images/Beach.jpg';
import temple from '../Images/temple.jpg';
import resturant from '../Images/resturant.jpg';
import fort from '../Images/fort.jpg';
import church from '../Images/church.jpg';

const Gallery = () => {
	const data = [
		{
			image: beach,
			title: 'Beaches',
			url: '/beaches',
		},
		{
			image: waterfall,
			title: 'Waterfalls',
			url: '/waterfalls',
		},
		{
			image: resturant,
			title: 'Resturants',
			url: '/resturants',
		},
		{
			image: fort,
			title: 'Forts',
			url: '/forts'
		},
		{
			image: temple,
			title: 'Temples',
			url: '/temples',
		},
		{
			image: church,
			title: 'Churches',
			url: '/churches',
		},
	]

return (
	<div>
		<div className="allcards">
        	{data.map((item) => {
          	return <Link to={item.url}><Card image={item.image} title={item.title}/></Link>
        	})}
      	</div>
	</div>
);
};

export default Gallery;