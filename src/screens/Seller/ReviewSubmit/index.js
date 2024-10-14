import React, { useState } from 'react';
import Panel from '../../../components/panel';
import BtnGroup from '../../../components/btngroup';
import Messages from '../../../components/messages';
import DownloadIcon from '../../../assets/icons/downloadPDF.svg';

const data = {
    pdf: {
        link: "/acme-sample-rfp.pdf"
    },
    messages: [
        { user: "JD", text: "Is this the final version?", timestamp: "2024-07-05T14:48:00Z" },
        { user: "AP", text: "Yes, I have reviewed it.", timestamp: "2024-07-06T09:23:00Z" }
    ],
    sendSubmit: {
        documentName: "RFP1468381.pdf",
        updated: "Mar 19, 2024, 10:25 AM",
        approver: {
            name: "Alison Parker",
            role: "(You)",
            initials: "AP",
            color: "rgba(38, 106, 115, 0.5)"
        },
        sendStatus: {
            sentOn: "Feb 5, 2024, 7:04 PM"
        }
    }
};

const ReviewSubmit = () => {
    const panel2Tabs = ["Send/Submit", "Messages"];
    const [messages, setMessages] = useState(data.messages);

    const handleAddMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="page-container">
            <div className='top-toolbar'>
                <div className='toolbar-1'>
                    <h1>ReviewSubmit</h1>
                    <BtnGroup text="ACTIONS" iconClass="caret arrow-down" onClick={() => console.log('Button clicked!')} />
                </div>
            </div>
            <div className="rfx-wrapper">
                <Panel initialActiveTab="PDF View" id="panel-1">
                    <div>
                        <object data={data.pdf.link} type="application/pdf" width="100%" height="700px">
                            <p>Unable to display PDF file. <a href={data.pdf.link}>Download</a> instead.</p>
                        </object>
                    </div>
                </Panel>
                <Panel tabs={panel2Tabs} initialActiveTab="Send/Submit" id="panel-2">
                    <div className='review-submit-container'>
                        <div className="pdf-box-info">
                            <div className="pdf-box">
                                <div className="dpoint"><span className="dp-label">Document Name:</span><span>{data.sendSubmit.documentName}</span></div>
                                <div className="dpoint"><span className="dp-label">Updated:</span><span>{data.sendSubmit.updated}</span></div>
                            </div>
                            <div className="pdf-box">
                                <div className="download-pdf">
                                    <img src={DownloadIcon} alt="Download PDF" style={{ cursor: 'pointer' }} />
                                </div>
                            </div>
                        </div>
                        <div className="pdf-box-info-approval">
                            <div className="approver-entity">
                                <div className="mb-img" style={{ backgroundColor: data.sendSubmit.approver.color }}>
                                    <span data-initials={data.sendSubmit.approver.initials}>AP</span>
                                </div>
                                <div className="mb-container">
                                    <div className="mb-namedatetime">
                                        <div className="mb-name">{data.sendSubmit.approver.name} {data.sendSubmit.approver.role}</div>
                                    </div>
                                    <div className="approval-row">
                                        <div className="cbx-wrapper">
                                            <input type="checkbox" id="approve" />
                                            <label htmlFor="approve" style={{ cursor: 'pointer' }}>Review Completed</label>
                                        </div>
                                        <div className="mb-datetime"><span>Feb 5, 2024, 7:07 PM</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="send-info">
                            <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', width: '300px' }}>
                                <div className="cbx-wrapper">
                                    <input type="checkbox" id="sendtobuyer" />
                                    <label htmlFor="sendtobuyer" style={{ display: 'flex', marginTop: '15px' }}></label>
                                </div>
                                <div className="hro-input-wrapper-v2">
                                    <div className="label going-in">Buyer Email</div>
                                    <input className="hro-input-v2" disabled type="text" placeholder="" value="" />
                                </div>
                            </div>
                            <div className="scd-actions" style={{ margin: '10px 10px 10px 90px' }}>
                                <button className="send orange-button-wrapper1"><i className="send-icon"></i>Submit</button>
                                <span style={{ display: 'block', marginTop: '10px', fontSize: '0.8rem' }}>Sent on {data.sendSubmit.sendStatus.sentOn}</span>
                            </div>
                        </div>
                    </div>
                    <Messages messages={messages} onAddMessage={handleAddMessage} />
                </Panel>
            </div>
        </div>
    );
};

export default ReviewSubmit;
