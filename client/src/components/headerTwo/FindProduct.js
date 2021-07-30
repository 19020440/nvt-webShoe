import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation} from "react-router-dom";
import axios from 'axios';
import {connect} from 'react-redux'
import { withRouter } from "react-router";



class FindProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            productList: [],
        }
    }
    searchProduct = () => {
        if(this.state.search != '')
        this.props.history.push(`/search?product=${this.state.search}`)
               this.props.addDataStore({
                    searchText: this.state.search,
                    searchList: [],
               })
    }

    

    render () {
        
        return (
            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2 search-button">
                <input type="text" className="form-control" id="inputPassword2" placeholder="Tìm kiếm sản phẩm" onChange={(e) => {this.setState({search : e.target.value})}}></input>
                <button className="btn btn-primary mb-2 btn-findproduct" onClick={this.searchProduct}><img src="https://img.icons8.com/dusk/25/000000/find-and-replace.png"/></button>
                </div>
            </div>
        );
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//         search: state.search
//     }
// }
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (searchrs) => {
            dispatch({type: "SEARCHRS", searchrs})
        },

        addDataStores: (searchrs) => {
            dispatch({type: "SEARCHRS", searchrs})
        }
    }
}

const ShowTheLocationWithRouter = withRouter(FindProduct);
export default connect(null,mapDispatchToProps)(ShowTheLocationWithRouter);
// export default FindProduct;