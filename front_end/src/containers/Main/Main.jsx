import React from 'react';
import './Main.css';
import Dish from '../../components/dish.jsx'
import RSideElement from '../../components/rSideElement.jsx'
import LSideElement from '../../components/lSideElement.jsx'
import Searchbar from '../Searchbar/Searchbar.jsx'

class Main extends React.Component {

	state = {
		items: [{id:1,dish:"dishName1"},{id:2,dish:"dishName2"}],
		rside: [{},{}],
		lside: [{},{}]
  	}
  	
	showResult = resultList => {
   	 this.setState({ items: resultList });
 	 };
	
	render() {

        return(
	<React.Fragment>
	<Searchbar onResponse={this.showResult}/>
            <div className="container-fluid" id="main">
                <div className="row">
                    <div className="col-md-2 categories">
	     		  {this.state.lside.map(item => (<LSideElement/>))}
                    </div>
                    <div className="col-md-7">
                        <ul className="list-group dishes" id="dishList">
	     		  {this.state.items.map(item => (<Dish/>))}
			</ul>
                    </div>
                    <div className="col-md-3">
                    <ul className="list-group float-right recommended">
	     		  {this.state.rside.map(item => (<RSideElement/>))}
			</ul>
                    </div>
                </div>
            </div>
	</React.Fragment>
        );
	}
}

export default Main;
