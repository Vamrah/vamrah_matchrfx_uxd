import React, { useState } from 'react';

const ListPages = ({ pages, onSelectPage, selectedPageIndex, onReorderPages }) => {
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);

    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (index) => {
        if (draggedItemIndex === null) return;

        const reorderedPages = [...pages];
        const [removed] = reorderedPages.splice(draggedItemIndex, 1);
        reorderedPages.splice(index, 0, removed);

        onReorderPages(reorderedPages);
        setDraggedItemIndex(index);
    };

    const handleDrop = () => {
        setDraggedItemIndex(null);
    };

    return (
        <div className="rfp-layout-navbar-items">
            {pages.map((page, index) => (
                <div
                    key={index}
                    className={`rfp-layout-navbar-item-wrapper ${selectedPageIndex === index ? 'selected' : ''}`}
                    onClick={() => onSelectPage(index)}
                    onDragOver={(e) => {
                        e.preventDefault();
                        handleDragOver(index);
                    }}
                    onDrop={handleDrop}
                >
                    <div
                        className={`build-page-navbar-item ${selectedPageIndex === index ? 'selected' : ''}`}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                    >
                        <span className="build-page-title">{page.title}</span>
                        <button className="p-drag-handle"></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListPages;
