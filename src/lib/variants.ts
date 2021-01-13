export const upDown = {
  visible: {
    y: [0, 20, 0],
    transition: { duration: 2, repeat: Infinity },
  },
};

export const fadeInUp = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 5, transition: { duration: 1 } },
};
