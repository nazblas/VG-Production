import React from 'react';
import './Main.css';
import Dish from '../../components/dish.jsx'
import RecommendedDish from '../../components/recommendedDish.jsx'
import CategoryBox from '../../components/categoryBox.jsx'
import Searchbar from '../Searchbar/Searchbar.jsx'
import DishInfo from '../Dish_info/Dish_info.jsx'
import {Route} from 'react-router-dom'
import '../../components/categoryBox.css'

class Main extends React.Component {

	state = {
		categoryList: [],
		dishList: [],
		recommendedList: [],
  	}

	componentDidMount(){
   		this.setState({
			categoryList: [{category_id:1}, {category_id:2}],
			dishList: JSON.parse(sessionStorage.getItem('dish')),
				recommendedList: JSON.parse(sessionStorage.getItem('dish'))
		});
	}

	showResult = resultList => {
   	 this.setState({ dishList: resultList });
 	 };


	render() {

		let dishList = JSON.parse(sessionStorage.getItem('dish'));

        return(
			<React.Fragment>
			<Searchbar onResponse={this.showResult}/>
		    	<div className="container-fluid" id="main">
		        	<div className="row ">
		             	<div className="col-md-2 categories">
				        	<CategoryBox/>
		                </div>
			            <div className="col-md-7 mt-3">
			            	<ul className="list-group dishes" id="dishList">
									<div className = "shadow">
								{this.state.dishList.map(item =>
									(<Route exact path = "/" render ={() =>
										(<Dish name={item.dish_name} desc={item.dish_description}  id={item.id}/>)}/>))
								}
									</div>
								<Route path='/dishinfo' render={(props) =>
									<DishInfo name={dishList[sessionStorage.getItem('selectedDishId')].dish_name}
									 					desc={dishList[sessionStorage.getItem('selectedDishId')].dish_description}
									 					recipe = {dishList[sessionStorage.getItem('selectedDishId')].recipe} />}/>
							</ul>
		                </div>

		                <div className="col-md-3 mt-3	">
		                	<ul className="list-group float-right recommended">
														<div className = "shadow">
								<RecommendedDish name = {dishList[2].dish_name} desc = {dishList[2].dish_description} id = {dishList[2].id}/>
								<RecommendedDish name = {dishList[3].dish_name} desc = {dishList[3].dish_description} id = {dishList[3].id}/>
								<RecommendedDish name = {dishList[6].dish_name} desc = {dishList[6].dish_description} id = {dishList[6].id}/>
								</div>
							</ul>
		                </div>
		            </div>
		        </div>
			</React.Fragment>
        );
	}
}

export default Main;
