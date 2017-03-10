import React, {
    PropTypes,
    Component
} from 'react';
import ResultMaskStyle from './resultMask.less';
import AppStyle from '../../resources/less/app.less';

class ResultMask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            majority: this.props.majority
        };

    };

    componentDidMount() {

    };
    componentWillReceiveProps(nextProps) {
        // if (!nextProps.isShow) {
        //     this.setState({
        //         isShow: nextProps.isShow
        //     });
        // }
    };


    render() {
        const _this = this;
        let lowWidth = Math.abs(_this.state.majority);
        let highWidth = 100 - Math.abs(_this.state.majority);
        return <div className={ResultMaskStyle.mask}>{ _this.state.majority >=0 ?<div className={ResultMaskStyle.content}>英雄所见略同<p>83%的基民和你一样都在看涨此基,<br/>你这么有眼光,八成是个选基牛人!</p><div className={ResultMaskStyle.percentage}><p>{lowWidth + '%  '}看跌</p><p>{ highWidth+ '%  '}看涨</p></div><div className={ResultMaskStyle.linear}><div style={{width:lowWidth + "%"}}></div></div></div>:<div  className={ResultMaskStyle.content}>眼光独有一套<p>可以随心所欲，但绝不随波逐流. <br/> 你这么有魄力，八成是个民间高手!</p><div className={ResultMaskStyle.percentage}><p>{lowWidth + '%  '}看跌</p><p>{ highWidth+ '%  '}看涨</p></div><div className={ResultMaskStyle.linear}><div style={{width:lowWidth + "%"}}></div></div></div>} <div onClick={()=>_this.props.closeMask()} className={AppStyle.iconfont +' '+ResultMaskStyle.close}>&#xe654;</div></div>;
    }

}


export default ResultMask;