import React from 'react';



function HoursEditorPage() {
  return (
    <div className="page" style={{margin: '0', padding: '0', backgroundColor: 'lightblue'}}>
      <h1 className='page-title'>HoursEditor Page</h1>
      <h3 style={{textDecoration: 'underline'}}>
        /editors
      </h3>
      <br></br>
      <p  className='page-description' style={{padding: 15, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black'}}>
       Time is money, so keep your hours up to date here.
      </p>
    </div>
  );
}
export default HoursEditorPage;
