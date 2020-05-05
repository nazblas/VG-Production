import React,{Component} from 'react';
import { withNamespaces } from 'react-i18next';

class CategoryBox extends Component {
        render() {

const { t } = this.props;
       
	return(
     <div className="form-check mb-3 offset-2">
                            <input className="form-check-input" type="checkbox"/>
                            <label className="form-check-label" for="defaultCheck1">{t("category")}</label>
                       </div>
);
        }
}
export default withNamespaces()(CategoryBox)
