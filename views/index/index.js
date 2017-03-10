/**
 * Created by Administrator on 2017/1/2 0002.
 */
import React from 'react';
import {
	hashHistory
} from 'react-router';
import IndexStyle from './index.less';
import NavBar from '../../components/navBar/input_navbar';
import LoadingMask from '../../components/loadingMask/loadingMask';
import fetchJsonp from 'fetch-jsonp';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TopBannerAdvertisement from '../../components/topBannerAdvertisment/topBannerAdvertisement';
import HotDiagnosisFundList from '../../components/hotDiagnosisFundList/hotDiagnosisFundList';


export default React.createClass({
	getInitialState() {
		return {
			loadingMask: this.props.loadingMask,
			tempFundList: this.props.indexList
		};
	},
	closeView: function() {
		alert("首页不能返回！");
	},
	openSearchView: function(event) {
		hashHistory.push('/search');
		return false;
	},

	componentDidMount() {
		const _this = this;
		// _this.props.indexList();
		// var a = _this.requestJsonp();
		// fetchJsonp("https://fundexh5.eastmoney.com/FundSpecialApi/FundDiagnoseCount.ashx").then(function(response) {
		// 	return response.json();
		// }, function() {
		// 	console.log("error!")
		// }).then(function(result) {
		// 	_this.setState({
		// 		loadingMask: false,
		// 		tempFundList: result.Datas
		// 	});
		// });

		return false;
	},

	render() {
		const _this = this;

		return <div data-pid="root/1" id="indexView">
		
			<LoadingMask isShow={_this.state.loadingMask} />
		 
		    
			<NavBar closeView={this.state.closeView} />
			<div className={IndexStyle.iscroll_box}>

				<TopBannerAdvertisement />

				<div className={IndexStyle.content}>

					<div className={IndexStyle.page_head}>
						<div className={IndexStyle.search} onClick={_this.openSearchView}></div>
					</div>

					<div className={IndexStyle.hot_fund_list}>

						<div className={IndexStyle.title} > 热门诊断</div>

						<HotDiagnosisFundList FundListData={this.state.tempFundList}  clickList={this.props.clickList}/>

						<div className={IndexStyle.tail}>© 2007-2017 天天基金网 版权所有</div>

					</div>

				</div>

			</div>
			 
		</div>
	}
})