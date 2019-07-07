import { useSelector } from 'react-redux'

export default () => {

    const browser = useSelector(state => {
        return state.browser;
    })

    const { isMobile, currentWidth } = browser;

    let suffix = '@3x';
    
    if (isMobile && currentWidth > 600) {
        suffix = '@2x';
    }
    else {
        suffix = '';
    }
    return suffix;
}

