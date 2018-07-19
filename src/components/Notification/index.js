import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationDiv = styled.div`
  color: red;
  margin: 1em 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const Notification = props => {
  return (
    <NotificationDiv>
      {props.message}
    </NotificationDiv>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;