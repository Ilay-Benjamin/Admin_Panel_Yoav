import React from 'react';

function ContactEditorPage() {
  return (
    <div className="page" style={{margin: '0', padding: '0', backgroundColor: 'lightblue'}}>
      <h1 className='page-title'>ContactEditor Page</h1>
      <h3 style={{textDecoration: 'underline'}}>
        /editors
      </h3>
      <br></br>
      <p className='page-description' style={{padding: 15, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black'}}>
        Keep your contacts up to date and add new ones here.
      </p>
    </div>
  );
}

export default ContactEditorPage;
