import React, { PropTypes, Component } from 'react';
import AdvertisementCls from './topBannerAdvertisement.less';

class TopBannerAdvertisement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    };

    componentDidMount() {

    };

    openAdvertisement() {
        const { advertisementUrl } = this.props;
        location.href = advertisementUrl;
        return false;
    };

    render() {
        const { isShow } = this.props;

        return this.state.isShow && isShow ? <div className = { AdvertisementCls.advertisement } onClick = {() => this.openAdvertisement()} > <img alt = "广告图片" src = "https://img.1234567.com.cn/trade/2016110716510715.png" /> <div className = { AdvertisementCls.close }></div></div>:null;
    }

}

TopBannerAdvertisement.propTypes = {
    isShow: PropTypes.bool,
    advertisementUrl: PropTypes.string
};

TopBannerAdvertisement.defaultProps = {
    isShow: true,
    advertisementUrl: "http://js1.eastmoney.com/tg.aspx?ID=3747"
};

export default TopBannerAdvertisement;