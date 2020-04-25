import React from 'react';

export function getIngridient()
{
	return(sessionStorage.getItem('ingridient'));
}

export function getDish()
{
	return(sessionStorage.getItem('dish'));
}
