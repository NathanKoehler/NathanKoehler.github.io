export const pageVariants = {
    initial: {
        opacity: 0,
        x: 0,
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: -100
    }
};

export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1
};

export default pageVariants;