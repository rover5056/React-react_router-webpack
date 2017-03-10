import React from 'react';
import FundDiagnosisStyle from './fundDiagnosis.less';
import {
	hashHistory
} from 'react-router';
import NavBar from '../../components/navBar/input_navbar';
import FundDetailHead from '../../components/fundDetailHead/fundDetailHead';
import FundDiagnosisChart from '../../components/fundDiagnosisChart/fundDiagnosisChart';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FundDiagnosisFoot from '../../components/fundDiagnosisFoot/fundDiagnosisFoot';
import LoadingMask from '../../components/loadingMask/loadingMask';
import ResultMask from '../../components/resultMask/resultMask';
import AppStyle from '../../resources/less/app.less';
import fetchJsonp from 'fetch-jsonp';
import TopBannerAdvertisement from '../../components/topBannerAdvertisment/topBannerAdvertisement';

export default React.createClass({
	getInitialState() {
		const _this = this;

		this.props.resData(_this.props.location.query.id);

		return {
			FCODE: _this.props.location.query.id,
			loadingMask: true,
			fundData: this.props.fundDetail,
			resuleMask: '',
			chartData: [],
			majority: 0
		};


	},
	componentDidMount() {
		const _this = this;
		let FCODE = _this.state.FCODE;
		// console.log('state2', )
		// var a = _this.requestJsonp();
		// fetchJsonp("http://fundexh5.eastmoney.com/FundSpecialApi/FundDiagnose.ashx?FCODE=" + FCODE).then(function(response) {
		// 	return response.json();
		// }, function() {
		// 	console.log("error!")
		// }).then(function(result) {

		// 	_this.setState({
		// 		loadingMask: false,
		// 		fundData: result.Datas
		// 	});
		// });
		return false;
	},
	componentWillReceiveProps(nextProps) {

		if (nextProps) {
			this.setState({
				fundData: nextProps.fundDetail.Datas,
				loadingMask: false
			})
		}
	},
	handleVote(type) {
		const _this = this;
		let FCODE = _this.state.FCODE;
		let url = "http://fundexh5.eastmoney.com/FundSpecialApi/FundLikeCount.ashx?FCODE=" + FCODE + "&TYPE=" + type;
		fetchJsonp(url).then(function(response) {
			return response.json();
		}, function() {
			console.log("error!")
		}).then(function(result) {

			let a = result.Datas.DOWN;
			if (type == 1) {
				if (result.Datas.UP <= result.Datas.DOWN) {
					a = a * -1;
				}
			} else {
				if (result.Datas.UP >= result.Datas.DOWN) {
					a = a * -1;
				}
			};


			_this.setState({
				resuleMask: true,
				majority: a
			})

		});



	},

	closeResultMask() {
		this.setState({
			resuleMask: false
		});
	},

	render() {
		const _this = this;
		let lowWidth = Math.abs(_this.state.majority);
		let highWidth = 100 - Math.abs(_this.state.majority);
		// console.log('render', _this.state.fundData)
		return this.state.fundData ? <div data-pid="root/3" id="diagnosisDetailView" className={FundDiagnosisStyle.diagnosisDetailView}>
		 
					<LoadingMask isShow={_this.state.loadingMask} />

                  	<NavBar/>

                  	<TopBannerAdvertisement/>
					
					<div className={FundDiagnosisStyle.iscroll_box}>
	
						<FundDetailHead fundData={_this.state.fundData}/>

						<FundDiagnosisChart fundData={_this.state.fundData} />
									
						<FundDiagnosisFoot  onfootclick={(type)=>this.handleVote(type)} hasvoted={this.state.resuleMask} voteResult={lowWidth} />
		{
			this.state.resuleMask ? <ResultMask majority={this.state.majority} closeMask={()=>_this.closeResultMask()}/> : null
		}
						<p className={FundDiagnosisStyle.footer_announce}>上述数据仅供参考，不构成投资建议。投资者据此操作，风险自担。市场有风险，投资需谨慎。</p>

					</div>  </div> : null
	}
})