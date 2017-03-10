import React, {
	PropTypes,
	Component
} from 'react';
import {
	hashHistory
} from 'react-router';
import IndexStyle from './searchfundList.less';
import AppStyle from '../../resources/less/app.less';
class searchFundList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempFundList: this.props.searchFundListData
		};

	};

	componentWillReceiveProps(nextProps) {

		if (nextProps.searchFundListData != null && nextProps.searchFundListData.length > 0) {

			this.setState({
				tempFundList: nextProps.searchFundListData
			});
		} else {
			this.setState({
				tempFundList: ''
			});
		}
	};

	movePageTo(res) {

		const nextLocation = hashHistory.createLocation({
			pathname: '/FundDiagnosis',
			query: {
				id: res.FCODE
			}
		});
		hashHistory.push(nextLocation);
		// hashHistory.push('/FundDiagnosis');
		return false;
	};
	// handleOpen(res) {
	// 	//改成你想要的
	// 	console.log(res);
	// }

	render() {
		const _this = this;
		const fundlist = this.state.tempFundList && this.state.tempFundList.map(function(fund, i) {
			return (
				<li className={IndexStyle.search_result_wrapper} key={i} onClick={(FCODE)=>_this.props.clickList(fund)} >
					<div>
						<span className={IndexStyle.fName}>{fund.SHORTNAME}</span>
						<span className={IndexStyle.fCode}>{fund.FCODE}</span>
						<span className={IndexStyle.fType}>{fund.FTYPE}</span>
					</div>
				</li>
			)

		});



		return (this.state.tempFundList != null && this.state.tempFundList.length > 0) ? <ul className={IndexStyle.fund_list}>
					{fundlist}
				</ul> : null
	}
}
export default searchFundList;