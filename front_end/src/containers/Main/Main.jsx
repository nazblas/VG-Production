import React from 'react';
import './Main.css';
//import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

function Main({t})
{
        const lside = [];
        const main = [];
        const rside = [];
        for (let i = 0; i < 15; i++){
            lside.push(<div className="form-check mb-3 offset-2">
                            <input className="form-check-input" type="checkbox"/>
                            <label className="form-check-label" for="defaultCheck1">{t("category")}</label>
                       </div>);
        }

        for (let i = 0; i < 5; i++){
            main.push(<li className="list-group-item">
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
            </li>);
        }

        for (let i = 0; i < 4; i++){
            rside.push(<li class="list-group-item">
                <div className="card recommended--recipe">
                    <img src="..." className="card-img-top recommended--recipe_image" alt={t("imgAlt")}></img>
                    <div className="card-body">
                        <h5 className="card-title">{t("recDishTitle")}</h5>
                        <p className="card-text">{t("recDishDesc")}</p>
                        <button className="btn btn-warning">{t("moreBtn")}</button>
                    </div>
                </div>
            </li>);
        }

        return(
            <div className="container-fluid" id="main">
                <div className="row">
                    <div className="col-md-2 categories">
                        {lside}
                    </div>
                    <div className="col-md-7">
                        <ul className="list-group dishes" id="dishList">
                            {main}
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <ul className="list-group float-right recommended">
                        {rside}
                    </ul>
                    </div>
                </div>
            </div>
        );
};
export default withNamespaces()(Main);
