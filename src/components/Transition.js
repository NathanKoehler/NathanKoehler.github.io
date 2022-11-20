export const pageVariants = {
    homeInit : {
        opacity: 0,
        x: 0,
    },
    initial: {
        opacity: 0,
        x: 0,
        width: 0,
    },
    in: {
        opacity: 1,
        x: 0,
        width: "100%",
    },
    out: {
        opacity: 0,
        x: 100,
        //transition: { duration: 0.5 },
    }
};

export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1
};

export default pageVariants;