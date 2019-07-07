

export const getName = (str) => {
    const words = str.split(" ");
    let initials = '';
    for ( var i = 0; i < words.length && i < 2; i++) {
        initials += words[i].substring(0,1);
    }

    return initials.toUpperCase();
}