import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
};

const modalVariants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-gray-800"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={backdropVariants}
                    ></motion.div>
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={modalVariants}
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <p className="mb-4">Are you sure you want to leave this site?</p>
                            <div className="flex justify-center">
                                <button className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded" onClick={onCancel}>
                                    Cancel
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={onConfirm}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConfirmationModal;