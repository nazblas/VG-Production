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

                <div >
                <a href="http://ai.lviv.ua/"><img
                src="data:image/png;base64,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"
                title="AI " img-fluid className="card-img ml-2.8 mt-4"  border="0"/></a>
                  <div className=" mt-4" >
                    <a href="https://lpnu.ua/"><img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/de/Nulp_logo_ukr.jpg"
                    title="Our university " img-fluid className="card-img ml-2 mt-4"  border="0"/></a>
                  </div>
                </div>

          );
        }
      }

      export default CategoryBox;
