// Top Side Menu Motion Constants

export const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: {
            duration: 0.75,
            delay: 0.35,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
};

export const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    }
};

// Left Side Menu Motions Constants
// MENUSLIDE
export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
        x: "calc(100% + 100px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};
// SLIDE
export const slide = {
    initial: { x: 80 },
    enter: (i: number) => ({
        x: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    exit: (i: number) => ({
        x: 80,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
};

// SCALE
export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
};

// CURVE
let initialPath = "";
let targetPath = "";

if (typeof window !== "undefined") {
    initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
        } Q-100 ${window.innerHeight / 2} 100 0`;
    targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
        } Q100 ${window.innerHeight / 2} 100 0`;
}

export const curve = {
    initial: {
        d: initialPath,
    },
    enter: {
        d: targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        d: initialPath,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};
