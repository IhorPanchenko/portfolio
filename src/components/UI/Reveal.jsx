import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Reveal = ({ children, duration = 0.5, delay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref); //const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export default Reveal;
