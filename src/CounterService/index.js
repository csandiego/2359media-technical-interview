export default (state, setState, interval = 1000) => {
    return setTimeout(
        () => {
            console.log(state);
            if (state.started) {
                setState({
                    ...state,
                    counter: state.counter + 1
                });    
            }
        },
        interval
    );
};

