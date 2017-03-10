import React, {
	PropTypes,
	Component
} from 'react';
import {
	hashHistory
} from 'react-router';
import IndexStyle from './hotDiagnosisFundList.less';
import AppStyle from '../../resources/less/app.less';


class HotDiagnosisFundList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tempFundList: this.props.FundListData
		};

	};

	componentWillReceiveProps(nextProps) {
		console.log('nextProps', nextProps)
		if (nextProps.FundListData.length > 0) {

			this.setState({
				tempFundList: nextProps.FundListData
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
				<li className={IndexStyle.funt_item} key={i} onClick={(FCODE)=>_this.props.clickList(fund)} >
					<i className={IndexStyle.rank_index}>{i+1}</i>
					<div className={IndexStyle.fundInfo}>
						<div className={IndexStyle.fName}>{fund.SHORTNAME}</div>
						<div className={IndexStyle.fCode}>{fund.FCODE}</div>
					</div>
					<span className={AppStyle.iconfont}>&#xe60a;</span>
				</li>
			)

		});



		return this.state.tempFundList.length > 0 ? <ul className={IndexStyle.fund_list}>
					{fundlist}
				</ul> : null
	}
}

export default HotDiagnosisFundList;