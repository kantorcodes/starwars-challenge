
import screenSuffix from "./screenSuffix";

export default () => {
    let caret = null;
    
    const suffix = screenSuffix();

    if (window.location.pathname !== '/') {
        caret = require(`../assets/images/disclosure_caret${suffix}.png`);
    }

    return caret;
}