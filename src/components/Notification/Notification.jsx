import { PropTypes } from 'prop-types';
import React from 'react';
import { TextMessage } from "./Notification.styled";

const Notification = ({ message }) => {
  return <TextMessage>{message}</TextMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;