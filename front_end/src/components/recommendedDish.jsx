import React,{Component} from 'react';
import { withNamespaces } from 'react-i18next';

class RecommendedDish extends Component {
        render() {

const { t } = this.props;
       
	return(
                  <li class="list-group-item">
                <div className="card recommended--recipe">
                    <img src="..." className="card-img-top recommended--recipe_image" alt={t("imgAlt")}></img>
                    <div className="card-body">
                        <h5 className="card-title">{t("recDishTitle")}</h5>
                        <p className="card-text">{t("recDishDesc")}</p>
                        <button className="btn btn-warning">{t("moreBtn")}</button>
                    </div>
                </div>
            </li>
);
        }
}
export default withNamespaces()(RecommendedDish)
