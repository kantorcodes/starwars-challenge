import { useSelector } from 'react-redux'

export default () => {

    const browser = useSelector(state => {
        return state.browser;
    })

    const { isMobile, currentWidth } = browser;

    let suffix = '';

    if (isMobile && currentWidth > 600) {
        suffix = '@2x';
    }
    else if(!isMobile) {
        suffix = '@3x';
    }
    return suffix;
}

