import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { updateIsMobile, updateCurrentWidth } from '~/data/starwars/actions/actions';
//This detect mobiles via screenWidth 
//bypasses needing to check user agent
//for responsiveness

const mapStateToProps = (state, props) => {
    return { ...state.browser };
};

const mapDispatchToProps = {
    updateIsMobile: updateIsMobile,
    updateCurrentWidth: updateCurrentWidth
};

const withMobile = (WrappedComponent) => {

    const wrapper = class extends PureComponent {
        state = {
            isMobile: window.innerWidth <= 550
        };
        componentDidMount() {
            window.addEventListener("resize", this.resize);
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.resize);
        }
        resize = e => {
            this.props.updateIsMobile(window.innerWidth <= 550)
            this.props.updateCurrentWidth(window.innerWidth);
        };
        render() {
            const { isMobile, currentWidth } = this.state;
            return <WrappedComponent {...this.props} currentWidth={currentWidth} isMobile={isMobile} />
        }
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(wrapper);

}

export default withMobile;