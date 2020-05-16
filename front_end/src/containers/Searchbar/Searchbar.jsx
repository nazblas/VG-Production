import React from 'react';
import './Searchbar.css';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';
import {NavLink} from 'react-router-dom';

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
    return(
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-outline-secondary btn-sm active" onClick={() => changeLanguage('en')} >en
                    <input type="radio" name="options" checked></input>
                </label>
                <label className="btn btn-outline-secondary btn-sm" onClick={() => changeLanguage('ua')}>ua
                    <input type="radio" name="options"></input>
                </label>
            </div>
            <form action="/" className="form-inline mx-auto" placeholder="DropDown" onChange={ this.handleCatChange.bind(this) }>
                <select className="selectpicker searchbar" multiple data-live-search="true" data-style="btn-outline-warning" data-max-options="1" data-size="5">
                    {options}
                    });
                </select>
								<NavLink  className="btn my-2 my-sm-0 ml-2 btn-outline-warning" to="/" type="submit"
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
