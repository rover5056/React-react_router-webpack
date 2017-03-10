/**
 * Created by Administrator on 2017/1/4 0004.
 */
import React, {
    PropTypes,
    Component
} from 'react';
import Style from './input_navbar.less';
import AppStyle from '../../resources/less/app.less';


class Input_NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    };


    render() {
        const {closeView,isShow} = this.props;
        return  this.state.isShow && isShow ? <header className={Style.navbar}>
                    <div className={Style.nav_bar_left}>
                        <div className={Style.button_inner} onClick={(e)=>closeView(e)}>
                            <i className={AppStyle.iconfont}>&#xe609;</i>
                        </div>
                    </div>

                    <h1>天天基金网</h1>

                    <div className={Style.nav_bar_right}>
                        <div className={Style.button_inner}></div>
                    </div>

                </header> : null
    }
}


    Input_NavBar.propTypes = {
        closeView:  PropTypes.func,
        isShow:     PropTypes.bool
    };

    Input_NavBar.defaultProps = {
            closeView:  ()=>history.back(),
            isShow:     true
    };


export default Input_NavBar;