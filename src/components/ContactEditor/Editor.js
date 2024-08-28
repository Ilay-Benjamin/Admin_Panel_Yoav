import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import DataView from './DataView';
import Board from './Board';
import EditorZone from './EditorZone';
import Item from '../../models/components/ContactEditor/Item';
import Department from '../../models/components/ContactEditor/Department';
import saveIcon from '../../assets/images/icons/save.png';
import deleteIcon from '../../assets/images/icons/delete.png';
import editIcon from '../../assets/images/icons/edit.png';
import cancleIcon from '../../assets/images/icons/cancel.png';
import addContactIcon from '../../assets/images/icons/add-contact.png';

import addDepartmentIcon from '../../assets/images/icons/add_department.png';

import '../../assets/css/components/ContactEditor/Editor.css';



function getContactEditorClassNames(isEditorDisabled, isEditorFocused) {
     return classNames(
          'editor',
          (isEditorDisabled ? 'disabled-edior' : 'enabled-editor'),
          (isEditorFocused ? 'focoused-editor' : 'not-focused-editor')
     );
}


function Editor(props) {
     var [isEditorDisabled, setIsEditorDisabled] = useState(true);
     var [focusedEditor, setFocusedEditor] = useState(null);
     var [changes, setChanges] = useState((
          isEditorDisabled ? null : 
               (focusedEditor === -1 ? 
                    Item.getEmptyItem() :
                    Item.clone(focusedEditor)
               )
     ));

     var onToggleEditor = (target) => {
          target.preventDefault();
          if (!isEditorDisabled) {
               if (changes.equals(focusedEditor) || changes.equals(Item.getEmptyItem())) {
                    setFocusedEditor(null);
                    setChanges(null); 
                    setIsEditorDisabled(!isEditorDisabled);
                    alert('Editor is disabled.\nFocused item is set to null');
               } else {
                    alert('Cannot disable editor when changes are not saved');                    
               }
          } else {
               setChanges(
                    (focusedEditor === -1 ? 
                         Item.getEmptyItem() :
                         Item.clone(focusedEditor)
                    )
               )
               alert('Editor is enabled');
          }
     }

     var onFocuseOnItem = (target, item) => {
          target.preventDefault();
          if (!isEditorDisabled) {
               alert('Cannot focus on item when editor is enabled');
          } else {
               if (focusedEditor === item) {
                    setFocusedEditor(null);
                    alert('Focused item is set to null');
               } else {
                    setFocusedEditor(item);
                    alert('Focused item is set to ' + item);
               }
          }
     }

     var onChangeItem = (target, changedItem) => {
          target.preventDefault();
          setChanges(Item.clone(changedItem));
     }

     return (
          <div className={getContactEditorClassNames(isEditorDisabled, focusedEditor)}>
               <div className='editor-header'>
                    <div className={classNames('editor-button', 'editor-header-button')}>
                         <img src={addDepartmentIcon} className={classNames('editor-button-image', 'header-button-image')} alt=""></img>
                    </div>
               </div>

               <div className='editor-content'>
                    <Board 
                         toggleEditor={onToggleEditor}
                         setFocusedEditor={onFocuseOnItem}
                         isEditorDisabled={isEditorDisabled} 
                         focusedEditor={focusedEditor}
                         changes={changes}
                         setChanges={onChangeItem} 
                    />
                    <div className='editor-data'>
                         <DataView
                              toggleEditor={onToggleEditor}
                              setFocusedEditor={onFocuseOnItem}
                              isEditorDisabled={isEditorDisabled} 
                              focusedEditor={focusedEditor}
                         /> 
                    </div>
               </div>

          </div>
     );
}

export default Editor;
