import React from 'react';
import ReactDOM from 'react-dom'; 
import Dish from './dish.jsx';

export function showResults()
{
	
	//clear list of dishes

	ReactDOM.unmountComponentAtNode(document.getElementById("dishList"));
	
	//display resulted dishes
	
	var main=[];
	var random = Math.floor((Math.random() * 3) + 1);

	for (let i = 0; i < random; i++)main.push(<Dish/>);
	
	ReactDOM.render(main,document.getElementById("dishList"));
}
