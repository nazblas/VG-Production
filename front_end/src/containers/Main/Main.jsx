import React from 'react';
import './Main.css';
import Dish from '../../components/dish.jsx'
import RecommendedDish from '../../components/recommendedDish.jsx'
import CategoryBox from '../../components/categoryBox.jsx'
import Searchbar from '../Searchbar/Searchbar.jsx'


class Main extends React.Component {

	state = {
		categoryList: [],
		dishList: [],
		recommendedList: [],
		dish_info: []
  	}

	componentDidMount(){
   		this.setState({
			categoryList: [{category_id:1},
				       {category_id:2}],
			dishList: [{dish_name:"dishName1",dish_description:"dishDesc1"},
				   {dish_name:"dishName2",dish_description:"dishDesc2"},
				   {dish_name:"dishName3",dish_description:"dishDesc3"}],
			recommendedList: [{dish_name:"recDishName1",dish_description:"recDishDesc1"},
					  {dish_name:"recDishName2",dish_description:"recDishDesc2"}]
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
	     		  		{this.state.categoryList.map(item => (<CategoryBox/>))}
                    </div>
                    <div className="col-md-7">
                        <ul className="list-group dishes" id="dishList">
	     		  			{this.state.dishList.map(item => (<Dish/>))}
						</ul>
                    </div>
                    <div className="col-md-3">
                    	<ul className="list-group float-right recommended">
	     		  			{this.state.recommendedList.map(item => (<RecommendedDish/>))}
						</ul>
                    </div>
                </div>
            </div>
	</React.Fragment>
        );
	}
}

export default Main;
