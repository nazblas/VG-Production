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
                  <NavLink to='/dishinfo' className = "text" onClick={() => moreBtnClick(this.props.id)}>
                <div className="card recommended--recipe ">
                    <img src={pathToPicture}  className="card-img-top recommended--recipe_image" alt={t("imgAlt")}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.desc}</p>
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>
                </NavLink>
            </li>
);
        }
}
export default withNamespaces()(RecommendedDish)
