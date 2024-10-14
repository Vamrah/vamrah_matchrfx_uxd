// TeamProject.js
import React from 'react';

const TeamProject = ({ team }) => {
    return (
        <div className="team-project">
            <h2>Project Team</h2>
            <div className="search-container">
                <input type="text" placeholder="Search team members..." />
                <button type="button">Add User</button>
            </div>
            <div className="tableContainer">
                <table className="table-outline-border">
                    <thead>
                        <tr className="table-outline-row">
                            <th width="10%">&nbsp;</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((member, index) => (
                            <tr key={index} className="table-outline-row">
                                <td>
                                    <div className="cbx-wrapper">
                                        <input type="checkbox" id={member.id} value={member.id} style={{ cursor: 'pointer' }} />
                                        <label htmlFor={member.id}></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="team-name">{member.name}</div>
                                    <div className="team-email">{member.email}</div>
                                </td>
                                <td>{member.role}</td>
                                <td>{member.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamProject;
