import React, { useState, useEffect, useRef } from 'react';

const BtnGroup = ({ text, iconClass, dropdownItems }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="action-btns-group" ref={dropdownRef}>
            <button className={`v-btn ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <span>{text}</span>
                <span className='btn-end'>{iconClass && <i className={`${iconClass}`}></i>}</span>
            </button>
            {isDropdownOpen && (
                <ul className="dropdown-menu">
                    {dropdownItems.map((item, index) => (
                        <li key={index} onClick={item.onClick}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BtnGroup;
