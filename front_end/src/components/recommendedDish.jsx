import React,{Component} from 'react';
import { withNamespaces } from 'react-i18next';
import {NavLink} from 'react-router-dom';
import {moreBtnClick} from './dish.jsx';

class RecommendedDish extends Component {
        render() {

	const { t } = this.props;


	var pathToPicture = require(`../images/${this.props.name}.png`);

	return(
                  <li class="list-group-item">
                <div className="card recommended--recipe">
                    <img src={pathToPicture} className="card-img-top recommended--recipe_image" alt={t("imgAlt")}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.desc}</p>
                        <NavLink className="btn btn-warning" to='/dishinfo' onClick={() => moreBtnClick(this.props.id)}>{t("moreBtn")}</NavLink>
                    </div>
                </div>
            </li>
);
        }
}
export default withNamespaces()(RecommendedDish)
