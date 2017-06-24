export const SOME_ACTION = 'SOME_ACTION';

export const someAction = (action) => {
    return {
        type: SOME_ACTION,
        action,
    };
};
