import React, { useEffect } from 'react';

const treeData = [
    {
        name: "RFP Documents",
        type: "folder",
        children: [
            {
                name: "2023",
                type: "folder",
                children: [
                    {
                        name: "January",
                        type: "folder",
                        children: [
                            {
                                name: "Life Insurance Policies.pdf",
                                type: "file"
                            },
                            {
                                name: "Annuity Plans.pdf",
                                type: "file"
                            }
                        ]
                    },
                    {
                        name: "February",
                        type: "folder",
                        children: [
                            {
                                name: "Health Insurance Policies.pdf",
                                type: "file"
                            }
                        ]
                    }
                ]
            },
            {
                name: "2022",
                type: "folder",
                children: [
                    {
                        name: "December",
                        type: "folder",
                        children: [
                            {
                                name: "Sales Report.pdf",
                                type: "file"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const ContentLibrary = () => {
    useEffect(() => {
        const createTree = (data, parent) => {
            data.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item.name;

                if (item.type === "folder") {
                    li.classList.add("folder");
                    const ul = document.createElement("ul");
                    ul.style.display = "none";
                    li.appendChild(ul);
                    createTree(item.children, ul);
                } else if (item.type === "file") {
                    li.classList.add("file");
                    li.addEventListener("click", () => {
                        document.getElementById(
                            "pdf-viewer"
                        ).src = `https://assets.codepen.io/1690529/${item.name}`;
                        // Fill metadata fields based on file name or other logic
                        document.getElementById(
                            "metadata-textarea"
                        ).value = `Description for ${item.name}`;
                        document.getElementById("metadata-dropdown1").value =
                            "Policy";
                        document.getElementById("metadata-date").value =
                            "2024-01-01";
                        document.getElementById("metadata-dropdown2").value =
                            "Draft";
                    });
                }

                parent.appendChild(li);
                li.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (li.classList.contains("folder")) {
                        const childUl = li.querySelector("ul");
                        if (childUl) {
                            childUl.style.display =
                                childUl.style.display === "none" ? "block" : "none";
                        }
                    }
                });
            });
        };

        const treeElement = document.getElementById("tree");
        treeElement.innerHTML = ""; // Clear the tree before creating the structure

        createTree(treeData, treeElement);

        // Sub-tabs functionality
        const subTabButtons = document.querySelectorAll(".sub-tab-button");
        const subTabContents = document.querySelectorAll(".sub-tab-content");

        subTabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                // Remove active class from all buttons and contents
                subTabButtons.forEach((btn) => btn.classList.remove("active"));
                subTabContents.forEach((content) =>
                    content.classList.remove("active")
                );

                // Add active class to the clicked button and corresponding content
                button.classList.add("active");
                document.getElementById(button.dataset.tab).classList.add("active");
            });
        });

        // Default to the first tab being active if any subTabButtons are present
        if (subTabButtons.length > 0 && subTabContents.length > 0) {
            subTabButtons[0].classList.add("active");
            subTabContents[0].classList.add("active");
        }
    }, []);

    return (
        <div className="library-container">
            <div className="tree-container">
                <ul className="tree" id="tree">
                    {/* Tree structure will be dynamically generated here */}
                </ul>
            </div>

            <div className="inner-tabs">
                <div className="inner-tab-area">
                    <div className="sub-tab-buttons">
                        <button className="sub-tab-button" data-tab="sub-content">Page Content</button>
                        <button className="sub-tab-button" data-tab="sub-metadata">Metadata</button>
                        <button className="sub-tab-button" data-tab="sub-search">Search</button>
                    </div>
                    <div className="sub-tab-content" id="sub-content">
                        <embed id="pdf-viewer" src="https://assets.codepen.io/1690529/life-insurance-brochure.pdf" width="100%" height="600px" type="application/pdf" />
                    </div>
                    <div className="sub-tab-content" id="sub-metadata">
                        <form>
                            <label htmlFor="metadata-textarea">Description:</label>
                            <textarea id="metadata-textarea"></textarea>

                            <label htmlFor="metadata-dropdown1">Category:</label>
                            <select id="metadata-dropdown1">
                                <option value="Policy">Policy</option>
                                <option value="Report">Report</option>
                            </select>

                            <label htmlFor="metadata-date">Date:</label>
                            <input type="date" id="metadata-date" />

                            <label htmlFor="metadata-dropdown2">Status:</label>
                            <select id="metadata-dropdown2">
                                <option value="Draft">Draft</option>
                                <option value="Final">Final</option>
                            </select>
                        </form>
                    </div>
                    <div className="sub-tab-content" id="sub-search">
                        <form>
                            <label htmlFor="search-textarea1">Search Term 1:</label>
                            <textarea id="search-textarea1"></textarea>

                            <label htmlFor="search-textarea2">Search Term 2:</label>
                            <textarea id="search-textarea2"></textarea>

                            <label htmlFor="search-date1">Start Date:</label>
                            <input type="date" id="search-date1" />

                            <label htmlFor="search-date2">End Date:</label>
                            <input type="date" id="search-date2" />

                            <label htmlFor="search-dropdown1">Category:</label>
                            <select id="search-dropdown1">
                                <option value="Policy">Policy</option>
                                <option value="Report">Report</option>
                            </select>

                            <label htmlFor="search-dropdown2">Status:</label>
                            <select id="search-dropdown2">
                                <option value="Draft">Draft</option>
                                <option value="Final">Final</option>
                            </select>

                            <label htmlFor="search-dropdown3">Type:</label>
                            <select id="search-dropdown3">
                                <option value="Life Insurance">Life Insurance</option>
                                <option value="Health Insurance">Health Insurance</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentLibrary;
