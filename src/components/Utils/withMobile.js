import React, { PureComponent } from 'react';
//This detect mobiles via screenWidth 
//bypasses needing to check user agent
//for responsiveness
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
            this.setState({
                isMobile: window.innerWidth <= 550,
                currentWidth: window.innerWidth
            });
        };
        render() {
            const {isMobile, currentWidth} = this.state;
            return <WrappedComponent {...this.props} currentWidth={currentWidth} isMobile={isMobile} />
        }
    }

    return wrapper;

}

export default withMobile;