import React from 'react';
import './Searchbar.css';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';
import {NavLink} from 'react-router-dom';
import {moreBtnClick} from '../../components/dish.jsx';
import '../../components/categoryBox.css';
class Searchbar extends React.Component {



	state = {
		searchResult: []
	}

	handleCatChange(dishChangeEvent) {

		var dishObjects = JSON.parse(sessionStorage.getItem('dish'));

		for(let item in dishObjects){
            		if (dishObjects[item].dish_name === dishChangeEvent.target.value) {

				this.setState({
					searchResult: [dishObjects[item]]
				});

			}
        	}

    	}

    componentDidMount(){
		this.setState({
			searchResult: JSON.parse(sessionStorage.getItem('dish'))
		});
	}

	render() {
	const { t } = this.props;

	const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const options = [];

    for(let i in JSON.parse(sessionStorage.getItem('dish'))){ // later we`ll need to connect it to the api ALSO if u need to remake loop do it this way but instead of in use of!
        options.push(<option className="option_style">{JSON.parse(sessionStorage.getItem('dish'))[i].dish_name}</option>);
    }

/*function refreshPage(searchResult){
	if(searchResult !== "Nothing selected"){
		console.log("erorr");
		window.location.reload(false);
	}else{
		return searchResult;
	}
};*/

let objectLength = Object.keys(JSON.parse(sessionStorage.getItem('dish'))).length;

function getRandomInt(max) {
	let number = Math.floor(Math.random() * Math.floor(max));
	if(number === 0){
		return 1;
	}
  return number;

}

    return(
        <nav className="navbar navbar-light bg-light fixed-top shadow">
					<div >
							<NavLink className="button" to='/dishinfo'
								onClick={() =>   moreBtnClick(getRandomInt(objectLength))}>Cook a random dish</NavLink>
					</div>
            <form action="/" className="form-inline mx-auto" placeholder="DropDown" onChange={ this.handleCatChange.bind(this) }>
                <select className="selectpicker searchbar" multiple data-live-search="true" data-style="btn-outline-warning" data-max-options="1" data-size="5">
                    {options}
                    });
                </select>
								<NavLink  className="button ml-2 searchButton" to="/" type="submit"
								 onClick={() => this.props.onResponse(this.state.searchResult) }>{t("searchButn")}</NavLink>
            </form>
						<div className="btn-group btn-group-toggle" data-toggle="buttons">
						                <label className="btn btn-warning active">{t("byRecipeBtn")}
						                    <input type="radio" name="options" id="byRecipe" checked></input>
						                </label>
						                <label className="btn btn-warning">
						                    <input type="radio" name="options" id="byIngridient"></input>{t("byIngBtn")}
						                </label>
						            </div>
        </nav>
        );
	};
}

export default withNamespaces()(Searchbar);
