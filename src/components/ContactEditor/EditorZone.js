import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import Item from '../../models/components/ContactEditor/Item';
import Department from '../../models/components/ContactEditor/Department';
import saveIcon from '../../assets/images/icons/save.png';
import deleteIcon from '../../assets/images/icons/delete.png';
import editIcon from '../../assets/images/icons/edit.png';
import cancleIcon from '../../assets/images/icons/cancel.png';
import addDepartmentIcon from '../../assets/images/icons/add_department.png';
import addContactIcon from '../../assets/images/icons/add-contact.png';

import '../../assets/css/components/ContactEditor/EditorZone.css';



function getEditorZoneClassNames() {
     return classNames(
          'editor-editzone',
     );
}


function EditorZone(props) {
     var isEditorDisabled = props.isEditorDisabled;
     var focusedEditor = props.focusedEditor;
     var setFocusedEditor = props.focuseOnItem;
     var toggleEditor = props.toggleEditor;
     var changes = props.changes;
     var setChanges = props.setChanges;


     var onChangeItem = (target, datafield, newValue) => {
          target.preventDefault();
          var changedItem = Item.clone(changes);
          switch (datafield) {
               case 'departmentName':
                    changedItem.setDepartmentName(newValue);
                    break;
               case 'name':
                    changedItem.setName(newValue);
                    break;
               case 'rule':
                    changedItem.setRule(newValue);
                    break;
               case 'phone':
                    changedItem.setPhone(newValue);
                    break;
               default:
                    // Do nothing
                    break;
          }
          setChanges(target, changedItem);
     }

     var title = 'פרטי איש קשר';
     title += focusedEditor == null ? '' : (focusedEditor === -1 ? ' (חדש)' : ' (' + focusedEditor.index + ')');

     return (
          <div className={getEditorZoneClassNames()}>
               <div className='editzone-title'>
                    <p className='editzone-title-text'>{title}</p>
               </div>
               <div className='editzone-content'>

                    <div className='editorzone-datafields-row'>

                         <div className='editzone-datafield'>
                              <label
                                   for='rule-input'
                                   className='datafield-label'>
                                   תפקיד
                              </label>
                              <input
                                   name='rule-input'
                                   className="datafield-input"
                                   type='text'
                                   placeholder='תפקיד'
                              />
                         </div>

                         <div className='editzone-datafield'>
                              <label
                                   for='departmentName-input'
                                   className='datafield-label'>
                                   מחלקה
                              </label>
                              <input
                                   name='departmentName-input'
                                   className="datafield-input"
                                   type='text'
                                   value=''
                                   placeholder='מחלקה'
                                   disabled='true'
                              />
                         </div>

                    </div>

                    <div className='editorzone-datafields-row'>

                         <div className='editzone-datafield'>
                              <label
                                   for='name-input'
                                   className='datafield-label'>
                                   שם מלא
                              </label>
                              <input
                                   name='name-input'
                                   className="datafield-input"
                                   type='text'
                                   placeholder='שם'
                              />
                         </div>
                         <div className='editzone-datafield'>
                              <label
                                   for='phone-input'
                                   className='datafield-label'>
                                   מס' טלפון
                              </label>
                              <input
                                   name='phone-input'
                                   className="datafield-input"
                                   type='phone'
                                   placeholder='טלפון'
                              />
                         </div>

                    </div>

               </div>
          </div>
     );
}

export default EditorZone;
