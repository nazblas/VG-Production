import React from 'react';
import './Main.css';
import Dish from '../../components/dish.jsx'
import RecommendedDish from '../../components/recommendedDish.jsx'
import CategoryBox from '../../components/categoryBox.jsx'
import Searchbar from '../Searchbar/Searchbar.jsx'
import DishInfo from '../Dish_info/Dish_info.jsx'
import {Route} from 'react-router-dom'

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

        return(
			<React.Fragment>
			<Searchbar onResponse={this.showResult}/>
		    	<div className="container-fluid" id="main">
		        	<div className="row">
		             	<div className="col-md-2 categories">
				        	<CategoryBox/>
		                </div>
			            <div className="col-md-7">
			            	<ul className="list-group dishes" id="dishList">
								{this.state.dishList.map(item =>
									(<Route exact path = "/" render ={() =>
										(<Dish name={item.dish_name} desc={item.dish_description}  id={item.id}/>)}/>))
								}
								<Route path='/dishinfo' render={(props) =>
									<DishInfo name={this.state.dishList[0].dish_name} desc={this.state.dishList[0].dish_description} recipe = {this.state.dishList[0].recipe} />}/>
							</ul>
		                </div>
		                <div className="col-md-3">
		                	<ul className="list-group float-right recommended">
			     		    	{this.state.recommendedList.map(item =>
									(<RecommendedDish name = {item.dish_name} desc = {item.dish_description} id = {item.id}/>))
								}
							</ul>
		                </div>
		            </div>
		        </div>
			</React.Fragment>
        );
	}
}

export default Main;
