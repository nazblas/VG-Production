import React,{Component} from 'react';
import { withNamespaces } from 'react-i18next';
import {NavLink} from 'react-router-dom';

export function moreBtnClick(id){
    window.scrollTo({
        top: 0,
        behavior: "smooth"});
    sessionStorage.setItem("selectedDishId", id);
};
class Dish extends Component {
        render() {
	const { t } = this.props;
	let pathToPicture = require(`../images/${this.props.name}.png`);
	return(
                <li className="list-group-item" >
                <div className="card mb-1 mt-1 recipeCard" href='/dishinfo'  onClick={() => moreBtnClick(this.props.id)}>
                <NavLink to='/dishinfo' className= "text">{
                <div className="row no-gutters">
                    <div className="col-md-3 ">
                        <img src={pathToPicture} height="200" img-fluid className="card-img" alt={t("imgAlt")}/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title" >
                                {this.props.name}
                            </h5>
                            <div className="mb-5">
                                <p className="card-text">{this.props.desc}</p>
                            </div>

                        </div>
                    </div>
                </div>}
                </NavLink>
                </div>
            </li>
        );
        }
}

export default withNamespaces()(Dish)
