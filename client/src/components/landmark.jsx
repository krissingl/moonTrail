import React, { useState } from 'react';
import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';

const Landmark = ({ changePage, landmark, changeLandmark }) => {
  const { landmarkList } = data;
  const nextLandmark = landmarkList[landmark][0].next;
  const [showAlert, toggleAlert] = useState(false);
  const [alertMsg, changeAlertMsg] = useState('');

  console.log(nextLandmark);

  let alertPopUp;
  if (showAlert) {
    alertPopUp = (
      <AlertWindow message={alertMsg} toggleAlert={toggleAlert} />
    );
  }
  return (
    <div>
      <h3>
        {`YOU HAVE ARRIVED AT ${landmark}`}
      </h3>
      {alertPopUp}
      <button type="button">LOOK AROUND</button>
      <button type="button">ATTEMPT CONTACT WITH GROUND CONTROL</button>
      <button type="button" onClick={() => { changeAlertMsg('Cannot debug CACAL right now'); toggleAlert(true); }}>ATTEMPT CACAL DEBUG</button>
      <button type="button" onClick={(e) => { changeLandmark(e, nextLandmark); changePage('traveling'); }}>CONTINUE MISSION</button>
    </div>
  );
};

export default Landmark;
