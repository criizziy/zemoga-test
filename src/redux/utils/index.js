import _ from 'lodash';
export const  comparisonFn = (action, actionQueue) => {
    if (typeof action === 'object') {
        return actionQueue.find(queued => _.isEqual(queued, action));
    }
    if (typeof action === 'function') {
        return actionQueue.find(
            queued =>
                action.meta.name === queued.meta.name &&
                action.meta.args.id === queued.meta.args.id,
        );
    }
    return undefined;
};
