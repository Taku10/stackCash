import { motion } from 'framer-motion';
import React from 'react';


export const AnimatePage = ({children}) => {
    const animations ={
        initial: {opacity: 0, x : 100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: -100}
    }
    return (
        <motion.div
        variants={animations}
        initial = "initial"
        animate = "animate"
        exit = "exit"
        transition={{duration: 1}}
        >
            {children}
        </motion.div>
    )
}


export const AnimateHome = ({children}) => {
    const animations ={
        initial: {opacity: 0, y : 40},
        animate: {opacity: 1, y: 0},
    
    }
    return (
        <motion.div
        variants={animations}
        initial = "initial"
        animate = "animate"
        transition={{duration: 2}}
        >
            {children}
        </motion.div>
    )
}

export const Left = ({children}) => {
    const animations ={
        initial: {opacity: 0, y : 40},
        animate: {opacity: 1, y: 0},
    
    }
    return (
        <motion.div
        variants={animations}
        initial = "initial"
        animate = "animate"
        transition={{duration: 2}}
        >
            {children}
        </motion.div>
    )
}


export const Right = ({children}) => {
    const animations ={
        initial: {opacity: 0, x: -40},
        animate: {opacity: 1, x: 0},
    
    }
    return (
        <motion.div
        variants={animations}
        initial = "initial"
        animate = "animate"
        transition={{duration: 2}}
        >
            {children}
        </motion.div>
    )
}
