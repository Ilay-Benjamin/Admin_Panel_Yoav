import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import DepartmentView from './DepartmentView';
import Item from '../../models/components/ContactEditor/Item';
import Department from '../../models/components/ContactEditor/Department';
import { contactEditorConfig } from '../../config/app/UI/ContactEditor/ContactEditor.config';

import saveIcon from '../../assets/images/icons/save.png';
import deleteIcon from '../../assets/images/icons/delete.png';
import editIcon from '../../assets/images/icons/edit.png';
import cancleIcon from '../../assets/images/icons/cancel.png';
import addDepartmentIcon from '../../assets/images/icons/add_department.png';
import addContactIcon from '../../assets/images/icons/add-contact.png';

import '../../assets/css/components/ContactEditor/DataView.css';



function getDataViewClassNames() {
     return classNames(
          'editor-dataview',
     );
}


function DataView(props) {
     var isEditorDisabled = props.isEditorDisabled;
     var focusedEditor = props.focusedEditor;
     var setFocusedEditor = props.setFocusedEditor;
     var toggleEditor = props.toggleEditor;

     var departments = (contactEditorConfig.departmentsObject);
     departments.map((department) => Department.fromObject(department));

     return (
          <div className={getDataViewClassNames()}>
               <div className='dataview-header'>
                    <p className="dataview-header-text">
                         <strong>מחלקות</strong>
                    </p>
               </div>
               <div className='dataview-content'>

                    {departments.map((department, index) => (
                         <DepartmentView key={index}
                              department={department}
                              departmentIndex={index}
                              isEditorDisabled={isEditorDisabled}
                              focusedEditor={focusedEditor}
                              setFocusedEditor={setFocusedEditor}
                              toggleEditor={toggleEditor}
                              isDepartmentItemOnFocus={focusedEditor !== null && focusedEditor !== -1 && focusedEditor.departmentName === department.name}
                         />
                    ))}


               </div>
          </div>
     );
}

export default DataView;
