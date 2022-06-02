import React, { Fragment } from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

const Time = ({ date }) => (
  <Fragment>
    {formatDistanceToNow(new Date(date), {includeSeconds: true,addSuffix: true, locale: ruLocale})}
  </Fragment>
);

Time.propTypes = {
  date: PropTypes.string
};

export default Time;