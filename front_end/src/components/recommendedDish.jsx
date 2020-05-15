import React,{Component} from 'react';
import { withNamespaces } from 'react-i18next';

class RecommendedDish extends Component {
        render() {

const { t } = this.props;
       
	return(
                  <li class="list-group-item">
                <div className="card recommended--recipe">
                    <img src={require(`../images/${this.props.name}.png`)} className="card-img-top recommended--recipe_image" alt={t("imgAlt")}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.desc}</p>
                        <button className="btn btn-warning">{t("moreBtn")}</button>
                    </div>
                </div>
            </li>
);
        }
}
export default withNamespaces()(RecommendedDish)
