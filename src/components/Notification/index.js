import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationDiv = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  transition: opacity 0.5s linear;
  opacity: ${props => props.visible ? 1 : 0};
  position: fixed;
  right: 0%;
  min-width: 400px;
  max-width: 800px;
  z-index: 99;
  top: 100px;
  
  > div {
    color: white;
    background-color: ${props => props.level === 'success' ? 'yellowgreen' : 'darkred'};
    padding: 1em 10px;
    position: relative;
    right: 10%;
    box-shadow: 0px 0px 18px #BBB;
  }
  
`;

const Notification = props => {
  return (
    <NotificationDiv visible={(props.visible)} level={props.level}>
      <div><i className={`fas ${props.level === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}/> {props.message}</div>
    </NotificationDiv>
  );
};

Notification.propTypes = {
  level: PropTypes.string,
  message: PropTypes.string,
};

export default Notification;