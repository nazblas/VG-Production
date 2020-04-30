import React from 'react';
import './Searchbar.css';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

class Searchbar extends React.Component {

	state = {
		searchResult: [{id:1,dish:"dishName1"},{id:2,dish:"dishName2"},{id:3,dish:"dishName3"}]
	}

	render() {
	const { t } = this.props;

	const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const options = [];
    for(let i in "ingridientOption"){ // later we`ll need to connect it to the api ALSO if u need to remake loop do it this way but instead of in use of!
        options.push(<option className="option_style">{t("ingridientOption")} {i}</option>);
    }

    
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
            <form action="#" className="form-inline mx-auto">
                <select className="selectpicker searchbar " multiple data-live-search="true" data-style="btn-outline-warning" data-size="5"  >
                    {options}
                </select>
                <button className="btn my-2 my-sm-0 ml-2 btn-outline-warning" type="submit" onClick={() => this.props.onResponse(this.state.searchResult)}>{t("searchButn")}</button>
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
