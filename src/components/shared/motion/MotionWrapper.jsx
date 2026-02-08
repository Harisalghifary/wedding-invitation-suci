import { motion } from 'framer-motion';
import { viewportConfig, variants } from './variants';

/**
 * AnimateOnScroll - Wraps any element with whileInView animation
 * @param {string} variant - Name of variant from variants.js (e.g., 'fadeUp', 'fadeIn')
 * @param {number} delay - Additional delay in seconds
 * @param {string} as - HTML element type (default: 'div')
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles
 */
export function AnimateOnScroll({
    children,
    variant = 'fadeUp',
    delay = 0,
    as = 'div',
    className = '',
    style = {},
    ...props
}) {
    const MotionComponent = motion[as] || motion.div;
    const selectedVariant = variants[variant] || variants.fadeUp;

    // Add delay to the transition if specified
    const variantWithDelay = delay > 0 ? {
        hidden: selectedVariant.hidden,
        visible: {
            ...selectedVariant.visible,
            transition: {
                ...selectedVariant.visible.transition,
                delay,
            },
        },
    } : selectedVariant;

    return (
        <MotionComponent
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={variantWithDelay}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}

/**
 * StaggerOnScroll - Container that staggers children animations
 * @param {boolean} grid - Use faster grid stagger timing
 * @param {string} as - HTML element type (default: 'div')
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles
 */
export function StaggerOnScroll({
    children,
    grid = false,
    as = 'div',
    className = '',
    style = {},
    ...props
}) {
    const MotionComponent = motion[as] || motion.div;
    const containerVariant = grid ? variants.staggerGrid : variants.staggerContainer;

    return (
        <MotionComponent
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={containerVariant}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}

/**
 * MotionChild - Child element for use inside StaggerOnScroll
 * Inherits animation trigger from parent
 * @param {string} variant - Name of variant from variants.js
 * @param {string} as - HTML element type (default: 'div')
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles
 */
export function MotionChild({
    children,
    variant = 'fadeUp',
    as = 'div',
    className = '',
    style = {},
    ...props
}) {
    const MotionComponent = motion[as] || motion.div;
    const selectedVariant = variants[variant] || variants.fadeUp;

    return (
        <MotionComponent
            variants={selectedVariant}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}
