import React from 'react';
import classNames from 'classnames';

import './Status.scss';

function Status({online}) {
  return (
    <div>
        <span className={classNames("status",{'status--online': online} )}>{online? 'online' : 'offline'}</span>
    </div>
  )
}

export default Status