import React from 'react';
import Card from '../Card/Card'
import './gallery.css'

const Resturants = () => {
	const data = [
		{
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vyP8YKJMWsM1JZORp1fW4QHaHa%26pid%3DApi&f=1',
			title: 'Key Chain',
		},
		{
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Iuy48ib43D_J4rCcHfYxmAHaHa%26pid%3DApi&f=1',
			title: 'Wall Hanging',
		},
		{
			image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DFfBLG13_4i2xBMoScwmVgHaHa%26pid%3DApi&f=1',
			title: 'Car hanging',
		},
	]

return (
	<div>
		<div className="allcards">
        	{data.map((item) => {
          	return <Card image={item.image} title={item.title}/>
        	})}
      	</div>
	</div>
);
};

export default Resturants;