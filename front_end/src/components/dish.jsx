import React,{Component} from 'react';
import { withNamespaces } from 'react-i18next';

class Dish extends Component {
        render() {

const { t } = this.props;
       
	return(
                <li className="list-group-item">
                <div className="card mb-3 recipeCard">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src='...' className="card-img" alt={t("imgAlt")}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{t("dishTitle")}</h5>
                            <p className="card-text">{t("dishDesc")}</p>
                            <button type="submit" className="btn btn-light float-right my-2 btn-outline-warning">{t("moreBtn")}</button>
                        </div>
                    </div>
                </div>
                </div>
            </li>
        );
        }
}
export default withNamespaces()(Dish)
