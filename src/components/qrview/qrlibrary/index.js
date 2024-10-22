import React, { useState } from 'react';
import CaretClose from './../../../assets/icons/caret-close.svg';
import CaretOpen from './../../../assets/icons/caret-open.svg';

const TreeNode = ({ node, level = 0, onCheck }) => {
  const [collapsed, setCollapsed] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  const handleCheckboxChange = (event) => {
    console.log('Checkbox changed for node:', node.qr_id, 'to', event.target.checked);
    onCheck(node, event.target.checked);
  };

  const handleCaretClick = (event) => {
    event.stopPropagation();
    setCollapsed(!collapsed);
  };

  const handleNameClick = (event) => {
    event.stopPropagation();
    setCollapsed(!collapsed);
  };

  let marginLeft;
  if (level === 0) {
    marginLeft = '0px';
  } else if (level === 1 && hasChildren) {
    marginLeft = '22px';
  } else {
    marginLeft = '37px';
  }

  return (
    <div style={{ marginLeft }}>
      <div className="qr-library-node">
        {hasChildren && (
          <span
            className="icon-position"
            onClick={handleCaretClick}
          >
            <img
              src={collapsed ? CaretClose : CaretOpen}
              alt="caret icon"
              className={collapsed ? 'caret-closed' : 'caret-open'}
            />
          </span>
        )}
        <div className="v-cbx-wrapper">
          <input
            type="checkbox"
            checked={node.checked || false}
            onChange={handleCheckboxChange}
            style={{ margin: '5px' }}
          />
          <label className="name" onClick={handleNameClick}>
            <span>
              {node.qr_text || node.qr_level_1_group || node.qr_level_2_group}
            </span>
          </label>
        </div>
      </div>
      {!collapsed && hasChildren && (
        <div>
          {node.children.map((childNode) => (
            <TreeNode key={childNode.qr_id} node={childNode} level={level + 1} onCheck={onCheck} />
          ))}
        </div>
      )}
    </div>
  );
};

const QrLibrary = ({ data, onCheck }) => {
  return (
    <div style={{ maxHeight: '600px', overflowY: 'scroll' }}>
      <div className="qr-library-search"><input type="search" placeholder="Search" /></div>
      {data.map((node) => (
        <TreeNode key={node.qr_id} node={node} onCheck={onCheck} />
      ))}
    </div>
  );
};

export default QrLibrary;
