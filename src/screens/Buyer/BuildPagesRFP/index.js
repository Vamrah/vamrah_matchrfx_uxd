import React, { useState, useEffect } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import PageDetail from '../../../components/details/pagedetail';
import ContentLibrary from '../../../components/contentlibrary';
import Messages from '../../../components/messages';
import History from '../../../components/history';
import ListPages from '../../../components/lists/listpages';
import { pages as initialPages } from '../../../dataPages';

const BuildPagesRFP = () => {
    const [pages, setPages] = useState(initialPages);
    const [selectedPageIndex, setSelectedPageIndex] = useState(0);

    useEffect(() => {
        if (pages.length > 0 && selectedPageIndex === null) {
            setSelectedPageIndex(0);
        }
    }, [pages, selectedPageIndex]);

    const handleSelectPage = (index) => {
        console.log('Selecting page index:', index);
        setSelectedPageIndex(index);
    };

    const handleAddMessage = (newMessage) => {
        if (selectedPageIndex !== null) {
            console.log('Adding message to page index:', selectedPageIndex);
            const updatedPages = [...pages];
            updatedPages[selectedPageIndex].messages.push(newMessage);
            console.log('Updated messages:', updatedPages[selectedPageIndex].messages);
            setPages(updatedPages);
        } else {
            console.log('No page selected when trying to add message');
        }
    };

    const handleReorderPages = (reorderedPages) => {
        setPages(reorderedPages);
    };

    const handleUpdatePage = (updatedPage) => {
        const updatedPages = [...pages];
        updatedPages[selectedPageIndex] = updatedPage;
        setPages(updatedPages);
    };

    const dropdownItems = [
        { label: 'New', onClick: () => console.log('Action 1 clicked') },
        { label: 'Open', onClick: () => console.log('Action 2 clicked') },
        { label: 'Save', onClick: () => console.log('Action 3 clicked') },
        { label: 'Extract', onClick: () => console.log('Action 4 clicked') },
        { label: 'Census', onClick: () => console.log('Action 5 clicked') },
        { label: 'Setup', onClick: () => console.log('Action 6 clicked') },
        { label: 'Archive', onClick: () => console.log('Action 7 clicked') }
    ];

    const panel2Tabs = ["Page Detail", "Content Library", "Messages", "History"];

    return (
        <div className="page-container">
            <div className='top-toolbar'>
                <div className='toolbar-1'>
                    <h1>Build Pages</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" dropdownItems={dropdownItems} />
                </div>
            </div>
            <div className="rfx-wrapper">
                <Panel initialActiveTab="tab1" id="panel-1">
                    <ListPages
                        pages={pages}
                        onSelectPage={handleSelectPage}
                        selectedPageIndex={selectedPageIndex}
                        onReorderPages={handleReorderPages}
                    />
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Page Detail" id="panel-2">
                    {selectedPageIndex !== null ? (
                        <PageDetail 
                            page={pages[selectedPageIndex]} 
                            onUpdatePage={handleUpdatePage} 
                        />
                    ) : (
                        <div>Select a page to view details</div>
                    )}
                    <ContentLibrary />
                    {selectedPageIndex !== null ? (
                        <Messages
                            messages={pages[selectedPageIndex].messages}
                            onAddMessage={handleAddMessage}
                        />
                    ) : (
                        <Messages messages={[]} />
                    )}
                    {selectedPageIndex !== null ? (
                        <History history={pages[selectedPageIndex].history} />
                    ) : (
                        <div>Select a page to view details</div>
                    )}
                </Panel>
            </div>
        </div>
    );
};

export default BuildPagesRFP;
