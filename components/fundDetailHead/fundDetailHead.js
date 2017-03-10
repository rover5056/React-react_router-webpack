import React, {
	PropTypes,
	Component
} from 'react';

import fundDetailHeadStyle from './fundDetailHead.less';
import AppStyle from '../../resources/less/app.less';

class FundDetailHead extends Component {



	constructor(props) {
		super(props);

		this.state = {
			fundDatas: this.props.fundData
		};

	};
	toFiexed(val, num) {
		return ((Math.round((+val) * 1000000) / 1000000).toFixed(num))
	};

	componentDidMount() {

	};
	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.setState({
				fundDatas: nextProps.fundData
			});
		}

	};


	render() {

		return this.state.fundDatas ? <div className={ this.state.fundDatas.RZDF>= 0 ? fundDetailHeadStyle.red+' '+fundDetailHeadStyle.diagnosisHead:fundDetailHeadStyle.green+' '+fundDetailHeadStyle.diagnosisHead }>

					<div className={fundDetailHeadStyle.f_info}>
						<h3> {this.state.fundDatas.SHORTNAME}</h3>
						<span className={fundDetailHeadStyle.f_code}>{this.state.fundDatas.FCODE}</span>
						<div className={AppStyle.iconfont+' '+fundDetailHeadStyle.f_search}>&#xe69d;</div>
					</div>
		
					<div className={fundDetailHeadStyle.f_dynamic}>
						<div className={fundDetailHeadStyle.f_value}> 
							<div className={fundDetailHeadStyle.fd_des}>最新净值</div>
							<div className={fundDetailHeadStyle.f_nav}>{this.toFiexed(this.state.fundDatas.DWJZ,4)}</div>
						</div>
						<div className={fundDetailHeadStyle.f_rose}> 
							<div className={fundDetailHeadStyle.fd_des}>日涨幅</div>
							<div className={fundDetailHeadStyle.f_nav}>{this.toFiexed(this.state.fundDatas.RZDF,2)}%</div>
						</div>
						<i className={AppStyle.iconfont+' '+fundDetailHeadStyle.arrow}>&#xe60a;</i>


					</div> 
		
					<div className={fundDetailHeadStyle.f_monthrise}>
						<div>近一个月: {this.toFiexed(this.state.fundDatas.SYL_Y,2)}%</div>
						<div>近三个月: {this.toFiexed(this.state.fundDatas.SYL_3Y,2)}%</div>
					</div>
					
				</div> : null

	}
};

export default FundDetailHead;