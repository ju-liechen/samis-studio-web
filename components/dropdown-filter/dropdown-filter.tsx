import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import styles from './dropdown-filter.module.scss';

type DropdownFilterProps = {
  options: string[];
  onFilterChange: (filter: string) => void;
};

export const DropdownFilter = ({ options, onFilterChange }: DropdownFilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState(options[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  const optionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectFilter = (option: string) => {
    setSelectedFilter(option);
    setIsDropdownOpen(false);
    onFilterChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.selectedFilterContainer} onClick={toggleDropdown}>
        <p className={styles.selectedFilterText}>Sort: {selectedFilter}</p>
      </div>
      {isDropdownOpen &&
        <motion.div
          key="options"
          variants={optionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className={styles.options}>
          {options.filter(option => option !== selectedFilter).map((option, index) => (
            <div key={index} onClick={() => selectFilter(option)}>
              <p>{option}</p>
            </div>
          ))}
      </motion.div>
      }
    </div>
  );
};