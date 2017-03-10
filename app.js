import React, {
	PropTypes,
	Component
} from 'react';
import {
	render
} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import fetchJsonp from 'fetch-jsonp';
import './resources/less/animation.less'
import './resources/css/reset.css';
import './resources/less/app.less';
import {
	hashHistory
} from 'react-router';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nextPage: this.props.location.pathname,
			indexRes: false,
			currentPage: '',
			tempFundList: '',
			searchHistory: [],
			diagnosisHis: [],
			indexPage: '',
			searchPage: '',
			detailPage: [],
			loadingMask: true
		};

		this.requestFundDetail = this.requestFundDetail.bind(this);
		this.clickList = this.clickList.bind(this);

	};
	componentWillMount() {
		let temp = this.props.children;

		this.jugePage(temp);
	};

	componentWillReceiveProps(nextProps) {
		let temp = nextProps.children;
		this.jugePage(temp);
		// if (nextProps) {
		// 	this.setState({
		// 		hasvoted: true,
		// 		voteResult: nextProps.voteResult
		// 	})
		// }
	};


	indexPage(temp) {
		const _this = this;
		if (this.state.indexPage !== '') {
			console.log('temp', temp)
			let indexList = this.state.indexPage;
			let index = React.cloneElement(temp, {
				key: temp.props.location.pathname,
				indexList: indexList,
				loadingMask: false,
				clickList: _this.clickList
			});

			_this.setState({
				currentPage: index
			});
			return index;
		} else {

			console.log('temp', temp)
			fetchJsonp("./test.json").then(function(response) {
				return response.json();
			}, function() {
				console.log("error!")
			}).then(function(result) {

				let index = React.cloneElement(temp, {
					indexList: result.Datas,
					key: temp.props.location.pathname,
					loadingMask: false,
					clickList: _this.clickList
				});

				_this.setState({
					indexPage: result.Datas,
					currentPage: index
				});
				return index;
			});
		}

	};


	detailPage(temp) {
		const _this = this;

		let detail = React.cloneElement(temp, {
			resData: _this.requestFundDetail,
			// key: temp.location.pathname,
			fundDetail: ''
		});

		_this.setState({
			currentPage: detail
		});
		return detail;
	};

	searchPage(temp) {
		const _this = this;

		let search = React.cloneElement(temp, {
			clickList: _this.clickList,
			key: temp.props.location.pathname,
			searchHistory: _this.state.searchHistory
		});
		_this.setState({
			currentPage: search

		});
		return search;
	};


	jugePage(temp) {
		const _this = this;
		switch (temp.props.location.pathname) {
			case ('/'):
				let a = this.indexPage(temp);
				return a;
				break;
			case ('/search'):
				let b = this.searchPage(temp);

				return b;
				break;
			case ('/fundDiagnosis'):
				let c = this.detailPage(temp);
				return c;
				break;

		}
	};
	requestFundDetail(FCODE) {
		// console.log('requestFundDetail');
		const _this = this;
		let searchList = this.state.searchHistory;


		fetchJsonp("./test2.json").then(function(response) {
			return response.json();
		}, function() {
			console.log("error!")
		}).then(function(result) {

			searchList.push({
				'Datas': result.Datas
			});
			let detail = React.cloneElement(_this.state.currentPage, {
				fundDetail: result
			});

			_this.setState({
				currentPage: detail,
				searchHistory: searchList
			});

			return result;
		});
	};

	clickList(res) {


		const nextLocation = hashHistory.createLocation({
			pathname: '/fundDiagnosis',
			query: {
				id: res.FCODE
			}
		});
		hashHistory.push(nextLocation);
		return false;
	};


	render() {
		
		return <div>
			<ReactCSSTransitionGroup component="div" transitionName="carousel"	transitionEnterTimeout={500} transitionLeaveTimeout={500}>
			{this.state.currentPage}
			</ReactCSSTransitionGroup>
		</div>
	}
};

export default App;