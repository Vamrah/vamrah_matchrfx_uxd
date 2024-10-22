import React, { useState, useEffect } from 'react';

const PageDetail = ({ page, onUpdatePage }) => {
    const [viewMode, setViewMode] = useState(page.text_content ? 'text' : 'pdf');
    const [pageData, setPageData] = useState({ ...page });

    useEffect(() => {
        setPageData({ ...page });
    }, [page]);

    const toggleViewMode = () => {
        setViewMode(viewMode === 'text' ? 'pdf' : 'text');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedPage = {
            ...pageData,
            [name]: value
        };
        setPageData(updatedPage);
        onUpdatePage(updatedPage);
    };

    return (
        <div className='rfplc-outer-container'>
            <div className='rfplc-container'>
                <div className="rfplc-inner">
                    <div className="rfplci-s1">
                        <div className="s1-area">
                            <div className="hro-input-wrapper-v2">
                                <div className="label out">Page Title*</div>
                                <textarea
                                    name="title"
                                    className="hro-input-v2 scrollbar-thin"
                                    placeholder=""
                                    maxLength="50"
                                    value={pageData.title}
                                    onChange={handleChange}
                                />
                                <div className="char-count">{pageData.title.length}/50</div>
                            </div>
                            <div className="hro-input-wrapper-v2">
                                <div className="label out">Notes (internal only)</div>
                                <textarea
                                    name="notes"
                                    className="hro-input-v2 scrollbar-thin"
                                    placeholder=""
                                    maxLength="600"
                                    value={pageData.notes}
                                    onChange={handleChange}
                                />
                                <div className="char-count">{pageData.notes.length}/600</div>
                            </div>
                        </div>
                        <div className="library-box">
                            <div className="library-box-info">
                                <div className="lib-box">
                                    <div className="cbx-wrapper disabled"><input type="checkbox" disabled checked={pageData.saved_to_library} /><label>Saved to Library</label></div>
                                </div>
                                <div className="lib-box disabled">
                                    <div className="dpoint"><span className="dp-label">Created:</span><span>{new Date(pageData.created_at).toLocaleString()}</span></div>
                                    <div className="dpoint"><span className="dp-label">Updated:</span><span>{new Date(pageData.updated_at).toLocaleString()}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rfplci-s2" style={{ flexDirection: "column" }}>
                        <div className="s2a-area">
                            <div className={`switch formfile ${viewMode}`} onClick={toggleViewMode}>
                                <span className="label">Enter Text</span>
                                <span className="label">Upload File</span>
                                <div className="slider"></div>
                            </div>
                        </div>
                        <div className="s2b-area">
                            {viewMode === 'text' ? (
                                <textarea
                                    name="text_content"
                                    className="hro-input-v2 scrollbar-thin text-content"
                                    placeholder=""
                                    maxLength="600"
                                    value={pageData.text_content}
                                    onChange={handleChange}
                                />
                            ) : (
                                pageData.pdf_link ? (
                                    <object data={pageData.pdf_link} type="application/pdf" width="100%" height="500px">
                                        <p>Unable to display PDF file. <a href={pageData.pdf_link}>Download</a> instead.</p>
                                    </object>
                                ) : (
                                    <div className="no-content">No file</div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="s4-area">
                        <div className="hro-input-wrapper-v2">
                            <div className="label out">Footer</div>
                            <textarea
                                name="footer"
                                className="hro-input-v2 scrollbar-thin"
                                placeholder=""
                                maxLength="100"
                                value={pageData.footer}
                                onChange={handleChange}
                            />
                            <div className="char-count">{pageData.footer.length}/100</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageDetail;
