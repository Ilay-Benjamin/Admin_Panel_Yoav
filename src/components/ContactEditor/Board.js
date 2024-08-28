import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';

import saveIcon from '../../assets/images/icons/save.png';
import deleteIcon from '../../assets/images/icons/delete.png';
import editIcon from '../../assets/images/icons/edit.png';
import cancleIcon from '../../assets/images/icons/cancel.png';
import addDepartmentIcon from '../../assets/images/icons/add_department.png';
import addContactIcon from '../../assets/images/icons/add-contact.png';

import '../../assets/css/components/ContactEditor/Board.css';
import Editor from './Editor';
import EditorZone from './EditorZone';



function getBoardClassNames() {
   return classNames(
      'editor-editzone',
   );
}


function Board(props) {
   var isEditorDisabled = props.isEditorDisabled;
   var focusedEditor = props.focusedEditor;
   var setFocusedEditor = props.focuseOnItem;
   var toggleEditor = props.toggleEditor;

   return (
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
            <EditorZone setFocusedEditor={setFocusedEditor} toggleEditor={toggleEditor} isEditorDisabled={isEditorDisabled} focusedEditor={focusedEditor} /> 
         </div>
      </div>
   );
}

export default Board;
