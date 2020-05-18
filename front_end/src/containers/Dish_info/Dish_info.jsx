import React from 'react';
import { withNamespaces } from 'react-i18next'
import {NavLink} from 'react-router-dom';
import './Dish_info.css'

class DishInfo extends React.Component{

    render(){

  const {t} = this.props;

  let dishList = JSON.parse(sessionStorage.getItem('dish'));
  let ingridientList = JSON.parse(sessionStorage.getItem('ingridient'));
  let id = Number(sessionStorage.getItem('selectedDishId')) - 1;

	var pathToPicture = require(`../../images/${dishList[id].dish_name}.png`);

        return(
            <div className="card mb-3 mt-1 recipeCard shadow">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={pathToPicture} className="card-img rounded-right mb-3 mr-3" alt={t("imgAlt")}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="dish-name card-title bg-warning rounded text-center pt-1 pb-1">{dishList[id].dish_name}</h5>
                            <p className="card-text mb-3 dish-desc">{dishList[id].dish_description}</p>
                            <h6 className="dish-name card-title bg-warning rounded text-center pt-1 pb-1">Ingridients:</h6>
                            <div>
                                {dishList[id].ingredient_id.map(item => (
                                     <span className="card-text badge badge-light mb-2">
                                        {ingridientList[item-1].ingredient_name}
                                    </span>)
                                 )}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p className="m-4 dish-text">{dishList[id].recipe}</p>
                        </div>
                        <div className="col-md-12">
                          <NavLink className="btn btn-warning btn-lg btn-block" to='/'>{t("backBtn")}
                              <svg class="bi bi-box-arrow-in-left" width="1.4rem" height="1.4rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.854 11.354a.5.5 0 000-.708L5.207 8l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z" clip-rule="evenodd"/>
                              <path fill-rule="evenodd" d="M15 8a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9A.5.5 0 0015 8z" clip-rule="evenodd"/>
                              <path fill-rule="evenodd" d="M2.5 14.5A1.5 1.5 0 011 13V3a1.5 1.5 0 011.5-1.5h8A1.5 1.5 0 0112 3v1.5a.5.5 0 01-1 0V3a.5.5 0 00-.5-.5h-8A.5.5 0 002 3v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0V13a1.5 1.5 0 01-1.5 1.5h-8z" clip-rule="evenodd"/>
                              </svg>
                          </NavLink>
                     </div>
                    </div>

                    <div className="col-md-12">
                        <p className="mb-3 ml-3 mr-3 shadow dish-text">{dishList[id].recipe}</p>
                    </div>
                    <div className="col-md-12">
                      <NavLink className="mb-2 ml-3 button button1" to='/'>{t("backBtn")}
                          <svg class="bi bi-box-arrow-in-left" width="1.4rem" height="1.4rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M7.854 11.354a.5.5 0 000-.708L5.207 8l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z" clip-rule="evenodd"/>
                          <path fill-rule="evenodd" d="M15 8a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9A.5.5 0 0015 8z" clip-rule="evenodd"/>
                          <path fill-rule="evenodd" d="M2.5 14.5A1.5 1.5 0 011 13V3a1.5 1.5 0 011.5-1.5h8A1.5 1.5 0 0112 3v1.5a.5.5 0 01-1 0V3a.5.5 0 00-.5-.5h-8A.5.5 0 002 3v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0V13a1.5 1.5 0 01-1.5 1.5h-8z" clip-rule="evenodd"/>
                          </svg>
                      </NavLink>
                 </div>
                </div>
            </li>    
        );
    }
}
export default withNamespaces()(DishInfo)
