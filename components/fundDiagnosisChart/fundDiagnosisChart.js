import React, {
	PropTypes,
	Component
} from 'react';
import fundDiagnosisChartStyle from './fundDiagnosisChart.less';
import ReactDOM from 'react-dom';
import AppStyle from '../../resources/less/app.less';

import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
HighchartsMore(ReactHighcharts.Highcharts);



class FundDiagnosisChart extends Component {

	constructor(props) {
		super(props);

		let chartData = [this.props.fundData.SCS1, this.props.fundData.SE1, this.props.fundData.SRT1, this.props.fundData.SSTD1, this.props.fundData.SCT1];
		let reArray = this.reformeNum(chartData);

		this.state = {
			chartData: reArray,
			FGLD: this.props.fundData.FGOLD,
			compare: this.props.fundData.PROWIN
		};
	};
	reformeNum(arr) {
		let reArray = [];
		arr.forEach(function(item, i) {
			reArray[i] = Number(item);
		}, this);
		return reArray;
	};

	componentWillReceiveProps(nextProps) {

		if (nextProps) {
			let chartData = [nextProps.fundData.SCS1, nextProps.fundData.SE1, nextProps.fundData.SRT1, nextProps.fundData.SSTD1, nextProps.fundData.SCT1];
			let reArray = this.reformeNum(chartData);



			this.setState({
				chartData: reArray,
				FGLD: nextProps.fundData.FGOLD,
				compare: nextProps.fundData.PROWIN

			});

		};
		/*选证能力(SCS1), 收益率(SE1),抗风险(SRT1),稳定性(SSTD1),择时能力(SCT1)*/

	};

	componentDidMount() {
		const _this = this;
		_this.renderChart(_this.state.chartData, _this.state.FGLD);
	};
	componentDidUpdate() {
		const _this = this;
		_this.renderChart(_this.state.chartData, _this.state.FGLD);
	};

	renderChart(datas, FGLD) {
		var myChart = this.refs.mychart;


		var config = {
			chart: {
				polar: true,
				spacing: [15, 0, 5, 0],
				height: 330,
				type: 'area'
			},
			credits: {
				enabled: false
			},
			title: {
				floating: true,
				useHTML: true,
				verticalAlign: 'middle',
				text: '<div style="margin-top:-25px"><p>综合评分</p><p>' + FGLD + '</p></div>'
			},
			pane: {
				size: '80%'
			},
			legend: {
				enabled: false
			},
			xAxis: {
				categories: ['选证能力', '收益率', '抗风险', '稳定性', '择时能力'],
				tickmarkPlacement: 'on',
				gridLineColor: '#e2e2e2',
				labels: {
					style: {
						fontSize: '15px'
					}
				},
				lineWidth: 0
			},
			yAxis: {
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				gridLineColor: '#e2e2e2',
				labels: {
					enabled: false
				},
				tickAmount: 5,
				min: 0,
				max: 10
			},
			tooltip: {
				shared: true,
				useHTML: true,

				formatter: function() {
					var tempToolTip = '<div><p style="font-weight:bold">' + this.x + ':' + this.y + '</p>';

					switch (this.x) {
						case '选证能力':
							tempToolTip = tempToolTip + '<p style="color:#666">反映基金挑选证券而实现,风险调整后获得超额收益的能力</p></div>';
							break;
						case '收益率':
							tempToolTip = tempToolTip + '<p style="color:#666">根据阶段收益评分，反映基金的盈利能力</p></div>';
							break;
						case '抗风险':
							tempToolTip = tempToolTip + '<p style="color:#666">反映基金投资收益的回撤情况</p></div>';
							break;
						case '稳定性':
							tempToolTip = tempToolTip + '<p style="color:#666">反映基金投资收益的波动性</p></div>';
							break;
						case '择时能力':
							tempToolTip = tempToolTip + '<p style="color:#666">反映基金根据对市场走势的判断，通过调整</br>仓位及配置而跑赢基金业绩基准的能力</p></div>';
							break;
					}

					return tempToolTip;
				}
			},
			plotOptions: {
				series: {
					fillColor: 'rgba(255,139,130,0.75)',
					marker: {
						radius: 4
					},
					lineWidth: 2,
					states: {
						hover: {
							lineWidth: 2
						}
					},
					threshold: null
				}
			},
			series: [{
				data: datas,
				color: "#ff6559",
				pointPlacement: 'on'
			}]
		};

		if (!isNaN(datas[0]) && datas[0] > 0) {
			ReactDOM.render(React.createElement(ReactHighcharts, {
				config: config
			}), myChart);
		}

	};



	render() {
		//this.renderChart(this.state);
		return <div className = {fundDiagnosisChartStyle.fundDiagnosisChart}>
		<div className = {fundDiagnosisChartStyle.toptip} >综合评分打败了{this.state.compare}%的同类基金 <label className={AppStyle.iconfont}>&#xe639;</label> </div>
				<div ref="mychart"  >
				</div>
			   </div>


	}
};

export default FundDiagnosisChart;