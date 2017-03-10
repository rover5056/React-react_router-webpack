import React, {
	PropTypes,
	Component
} from 'react';
import {
	hashHistory
} from 'react-router';
import IndexStyle from './fundDiagnosisHistory.less';
import AppStyle from '../../resources/less/app.less';
class FundDiagnosisHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempFundList: this.props.fundDiagnosisHistoryData
		};

	};

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.fundDiagnosisHistoryData)
		if (nextProps.fundDiagnosisHistoryData != null && nextProps.fundDiagnosisHistoryData.length > 0) {

			this.setState({
				tempFundList: nextProps.fundDiagnosisHistoryData
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
		console.log(IndexStyle)

		var diagnosisHistory = this.state.tempFundList && this.state.tempFundList.map(function(fund, i) {
			return (
				<span className={IndexStyle.diagnosisHistoryBlock} key={i} onClick={(FCODE)=>_this.props.clickList(fund.Datas)}>{fund.Datas.SHORTNAME}</span>
			)

		});

		return this.state.tempFundList != null ? <div> {diagnosisHistory} </div> : null
	}
}
export default FundDiagnosisHistory;