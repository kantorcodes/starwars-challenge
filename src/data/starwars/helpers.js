

export const pushPage = (state, payload) => {
    const {total,results} = payload.result
    const page = payload.page;

    let currentState = { ...state };
    currentState.results = currentState.results.concat(results);
    currentState.error = payload.error;
    currentState.nextPage = page + 1;
    currentState.count = total;

    return currentState
}