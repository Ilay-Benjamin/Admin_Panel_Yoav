 import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import saveIcon from '../../../assets/images/icons/save.png';
import deleteIcon from '../../../assets/images/icons/delete.png';
import editIcon from '../../../assets/images/icons/edit.png';
import cancleIcon from '../../../assets/images/icons/cancel.png';
import addDepartmentIcon from '../../../assets/images/icons/add_department.png';
import addContactIcon from '../../../assets/images/icons/add-contact.png';

import './style.ContactEditor.css';



function ContactEditor() {
  var [isEditorDisabled, setIsEditorDisabled] = useState(true);
  var [focusedEditor, setFocusedEditor] = useState(null);
  return (
    <div className="page" style={{ margin: '0', padding: '0' }}>
      <div className='page-title'>
        <p className='page-title-text'>
          ContactEditor Page
        </p>
      </div>
      <div className='page-content'>

        <div className={classNames('editor', 'disabled-editor', 'foucsed-editor')}>

          <div className='editor-header'>
            <div className={classNames('editor-button', 'editor-header-button')}>
              <img src={addDepartmentIcon} className={classNames('editor-button-image', 'header-button-image')} alt=""></img>
            </div>
          </div>

          <div className='editor-board'>
            <div className='editor-board-header'>
              <div className={classNames('board-header-button', 'save-button')}>
                <img src={saveIcon} className={classNames('board-button-image')} alt=""></img>
              </div>
              <div className={classNames('board-header-button', 'edit-button')}>
                <img src={editIcon} className={classNames('board-button-image')} alt=""></img>
              </div>
              <div className={classNames('board-header-button', 'cancel-button')}>
                <img src={cancleIcon} className={classNames('board-button-image')} alt=""></img>
              </div>
            </div>
            <div className='editor-board-content'>
                <div className='editor-content-section'>
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactEditor;
