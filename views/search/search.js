/**
 * Created by Administrator on 2017/1/25 0025.
 */
import React from 'react';
import IndexStyle from './search.less';
import AppStyle from '../../resources/less/app.less';
import NavBar from '../../components/navBar/input_navbar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingMask from '../../components/loadingMask/loadingMask';
import TopBannerAdvertisement from '../../components/topBannerAdvertisment/topBannerAdvertisement';
import SearchFundList from '../../components/searchFundList/searchFundList';
import FundDiagnosisHistory from '../../components/fundDiagnosisHistory/fundDiagnosisHistory';
import {
    hashHistory
} from 'react-router';
import fetchJsonp from 'fetch-jsonp';
export default React.createClass({
    getInitialState: function() {
        return {
            value: '',
            tempFundList: '',
            noresult: '',
            historyFlag: true /*是否显示诊断历史*/ ,
            searchHistory: this.props.searchHistory
        };
    },

    handleChange: function(event) {
        this.setState({
            value: event.target.value
        });
    },
    clearSearchBar: function(event) {
        this.refs.clearx.value = '';
        this.setState({
            tempFundList: '',
            noresult: ''
        });
    },
    render() {
        var value = this.state.value;
        const _this = this;
        var noResultFlag = this.state.noResultFlag;
        console.log(this.props.searchHistory)
        return <div data-pid="root/2" id="searchView">
                    <NavBar />

                    <div className={IndexStyle.iscroll_box}>

                        <TopBannerAdvertisement/>

                        <div className={IndexStyle.content}>

                            <div className={IndexStyle.search_wrapper}>
                                <div className={IndexStyle.search_inner}>
                                    <input type="search" ref="clearx" placeholder="请输入基金代码/名称/简拼" autoFocus />
                                    
                                    <div className={IndexStyle.close_button_wrapper} onClick={this.clearSearchBar}>
                                        <i className={AppStyle.iconfont}>&#xe654;</i>
                                    </div>
                                </div>
                            </div>
                                {_this.state.noResultFlag!=''?<p className={IndexStyle.noResultFlag}>{noResultFlag}</p>:null}
                                {_this.state.historyFlag?<div className={IndexStyle.diagnosisframe}>
                                <p className={IndexStyle.diagnosishistory}>诊断历史</p>
                                <div className={IndexStyle.diagnosishistoryBlock}>
                                    <FundDiagnosisHistory fundDiagnosisHistoryData={this.props.searchHistory} clickList={this.props.clickList}/>
                                </div>
                                </div>:null}
                          
                              <div className={IndexStyle.search_result_wrapper}>
                                    <SearchFundList searchFundListData={this.state.tempFundList} clickList={this.props.clickList}/>
                              </div>
                        </div>

                    </div>

        </div>
    }
})