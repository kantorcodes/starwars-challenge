import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateIsMobile, updateCurrentWidth } from '~/data/starwars/actions/actions';
//This detect mobiles via screenWidth 
//bypasses needing to check user agent
//for responsiveness

const withMobile = (WrappedComponent) => {

    const wrapper = class extends PureComponent {
        componentDidMount() {
            window.addEventListener("resize", this.resize);
            this.props.updateIsMobile(window.innerWidth <= 550)
            this.props.updateCurrentWidth(window.innerWidth);
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.resize);
        }
        resize = e => {
            this.props.updateIsMobile(window.innerWidth <= 550)
            this.props.updateCurrentWidth(window.innerWidth);
        };
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return wrapper;
}

const mapStateToProps = (state, props) => {
    return { ...state.browser };
};

const mapDispatchToProps = {
    updateIsMobile: updateIsMobile,
    updateCurrentWidth: updateCurrentWidth
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps), 
    withMobile);