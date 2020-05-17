import React, { Component } from "react";
import "./categoryBox.css"

class CategoryBox extends Component {
        container = React.createRef();
        state = {
          open: false,
        };
        componentDidMount() {
          document.addEventListener("mousedown", this.handleClickOutside);
        }
        componentWillUnmount() {
          document.removeEventListener("mousedown", this.handleClickOutside);
        }
        handleClickOutside = event => {
          if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
              open: false,
            });
          }
        };
        handleButtonClick = () => {
          this.setState(state => {
            return {
              open: !state.open,
            };
          });
        };
        render() {
          return (
                <div className="drop-down">
                <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Chinese cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
                 <div className="dropdown">
                 <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 French cuisine
                 </button>
                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                 </div>
                 <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Italian cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
                <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Indian cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
                <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Japanese cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
                <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ukrainian cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
                <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Spanish cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
                <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Thai cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
                <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle category_style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        American cuisine
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Soups</a>
                                <a className="dropdown-item" href="#">Snacks</a>
                                <a className="dropdown-item" href="#">Salads</a>
                                <a className="dropdown-item" href="#">Roasts</a>
                                <a className="dropdown-item" href="#">Stews</a>
                                <a className="dropdown-item" href="#">Meats</a>
                                <a className="dropdown-item" href="#">Deserts</a>
                                <a className="dropdown-item" href="#">Vegetables sides</a>
                                <a className="dropdown-item" href="#">Pies</a>
                                <a className="dropdown-item" href="#">Breakfasts</a>
                        </div>
                </div>
         </div>
         </div>
          );
        }
      }

      export default CategoryBox;
