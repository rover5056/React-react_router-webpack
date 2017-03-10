import React, {
    PropTypes,
    Component
} from 'react';
import DiagnosisFootStyle from './fundDiagnosisFoot.less';

class DiagnosisFoot extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showadd_up: false,
            showadd_down: false,
            hasvoted: false,
            voteResult: 1
        };
    };

    componentDidMount() {

    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.hasvoted === false) {
            this.setState({
                hasvoted: true,
                voteResult: nextProps.voteResult
            })
        }
    };

    handleClick_down() {
        this.setState({
            showadd_down: true
        })
    };

    handleClick_up() {
        this.setState({
            showadd_up: true
        })

    };


    render() {
        let lowWidth = this.state.voteResult;
        let highWidth = 100 - lowWidth;
        return !this.state.hasvoted ?
            <div className={DiagnosisFootStyle.praise_operate_zone}>
          
                <div className={DiagnosisFootStyle.praise_button} onClick={(event) => { this.handleClick_down(); this.props.onfootclick(2);}}>看跌   
                {this.state.showadd_down ? <div className={DiagnosisFootStyle.addOne}> +1 </div> : null}  
                </div>
                <i className={DiagnosisFootStyle.operate_symbol}>VS</i>
                <div className={DiagnosisFootStyle.critical_button} onClick={(event) => { this.handleClick_up(); this.props.onfootclick(1);}}>看涨 
                   {this.state.showadd_up ? <div className={DiagnosisFootStyle.addOne}> +1 </div> : null}
                </div>  
                </div> : <div className={DiagnosisFootStyle.praise_operate_zone}>
                <div className={DiagnosisFootStyle.percentage}><p>{lowWidth + '%  '}</p><p>{ highWidth+ '%  '}</p></div>
                <div className={DiagnosisFootStyle.linear}><div style={{width:lowWidth + "%"}}></div></div>
                <div className={DiagnosisFootStyle.voidbtn} >看跌  </div>
                <i className={DiagnosisFootStyle.operate_symbol}>VS</i>
                <div className={DiagnosisFootStyle.voidbtn} >看涨 </div>
                  </div>
    }

}



export default DiagnosisFoot;