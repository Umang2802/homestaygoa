import React from 'react';
import Card from '../Card/Card'
import './gallery.css'
import { Link } from 'react-router-dom';

const Gallery = () => {
	const data = [
		{
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vyP8YKJMWsM1JZORp1fW4QHaHa%26pid%3DApi&f=1',
			title: 'Beaches',
			url: '/beaches',
		},
		{
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Iuy48ib43D_J4rCcHfYxmAHaHa%26pid%3DApi&f=1',
			title: 'Waterfalls',
			url: '/waterfalls',
		},
		{
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DFfBLG13_4i2xBMoScwmVgHaHa%26pid%3DApi&f=1',
			title: 'Resturants',
			url: '/resturants',
		},
		{
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DFfBLG13_4i2xBMoScwmVgHaHa%26pid%3DApi&f=1',
			title: 'Markets',
			url: '/markets'
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