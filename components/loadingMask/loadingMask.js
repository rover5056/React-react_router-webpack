import React, {
    PropTypes,
    Component
} from 'react';
import LoadingMaskStyle from './loadingMask.less';

class LoadingMask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShow: this.props.isShow
        };

    };

    componentDidMount() {

    };
    componentWillReceiveProps(nextProps) {
        if (!nextProps.isShow) {
            this.setState({
                isShow: nextProps.isShow
            });
        }
    };

    openAdvertisement() {
        let {
            advertisementUrl
        } = this.props;
        location.href = advertisementUrl;
        return false;
    };

    render() {
        return this.state.isShow ?
            <div className = { LoadingMaskStyle.LoadingMask } > 
                <div className = { LoadingMaskStyle.inner} >
                    <div className={LoadingMaskStyle.loadInner}>
                        <div className={LoadingMaskStyle.loadIcon}><span></span><img src="data:image/gif;base64,R0lGODlhZABkAIABAP///////yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NTlBQTMxNjQ0RjAxMUU2Qjg2Q0NBN0NGNEFEMzk1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTlBQTMxNTQ0RjAxMUU2Qjg2Q0NBN0NGNEFEMzk1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUNFNzU5QzlERTg2MTFFNUFGMzhENDI5Qjk0RjY0REQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUNFNzU5Q0FERTg2MTFFNUFGMzhENDI5Qjk0RjY0REQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAABACwAAAAAZABkAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5kkCB6Ci7sWu8UtLbBvc9e7ohp/jCXPAW2s2pBllOmDyZMRFf8hnakpdEnHWUBT5zXK7nS84vB2TM+YzFrvGtIvotDoOmWvn4iq+p0dn1nf3hxAIx0douIAIZ6cFyXjomKgIWWhVOcjEiRm3qdfZNurHExpIKUqYaYJaWepJ6vIaqrqK2apRy3t7mQvCK1zl6Bu5MSxsPMtqCpNcu8ycq2sDjSo9jSt3bZvtSV390L2ZgB3rZEEO+w2eyrb+jr4t/xwP3lxfr35fN6+/jV+/dOHo7asw0Jmyf84mDGQwrJ24Bv0gLmQ40SI5iu8RMWZs1I1jR4+7oAFKZg5RyYsgTUps6DDaSZceP7ZkN5NmPn/2VI6Ll7LYyoAaN74kKJBnzpBHbRZFKnJdUKHIoC69psDbkIdNnXq5l7VckopTqQoBW9bsKaBpfW6V2vbgDrhdrSrBGvbcE7xx3Y5FmfdVF8B9/e7tFVgwGcSF1f7VW1fpYbGJFa/R2tixJs0FOU8mWhP05l+VZf4hXRoyHnxPTRt6dFX1apg3XU9COPI2bsa6k8rubc0ycN84h+/GbJzC7+TBPTP/6fw5dNHSm0+rTvwY9p6wt2f3zqE7+J7jy3gtjz69+vXs268vAAA7" /></div>
                        <div className={LoadingMaskStyle.loadContent}><span>加载中...</span></div>
                    </div> 
                </div>
            </div> : null;
    }

}

LoadingMask.propTypes = {
    isShow: PropTypes.bool
};

LoadingMask.defaultProps = {
    isShow: true
};

export default LoadingMask;