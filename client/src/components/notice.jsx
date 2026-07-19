import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const Notice = ({ changePage, dispatch, notifications }) => {
  const onContinue = () => {
    dispatch({ type: 'dismissNotifications' });
    changePage('traveling');
  };

  return (
    <div className={classes.noticePage}>
      {notifications.map((message) => (
        <h4 className={classes.title} key={message}>{message}</h4>
      ))}
      <button type="button" onClick={onContinue}>CONTINUE</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ notifications: state.notifications });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notice);
