import PropTypes, { element } from 'prop-types';
import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import { Time, IconReaded } from '../';

import './Message.scss';

function Message({avatar, text, date, user, isme, isReaded, attachments, isTyping}) {
  return (
    <div className={classNames('message', {'message--isme': isme, 'message--is-typing': isTyping, 'message--image': attachments && attachments.length==1})}>
      <div className='message__avatar'>
        <img className='avatar' alt={`User ${user.fullname}`} src={avatar}/>
      </div>
      <div className='message__content'>
        {<IconReaded isMe={isme} isReaded={isReaded}></IconReaded>}
        <div className='message__info'>
        {(text || isTyping) && <div className='message__bubble'>
          {text && <p className='message__text'>{text}</p>}
          {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
          {date && <span className='message__date'>{<Time date></Time>}</span>}
        </div>}
        <div className='message__attachments'>
            {attachments && attachments.map((item) =>(
              <div className='message__attachments-item'><img src={item.url} alt={item.fileName}></img></div>
            ))}          
        </div>
        </div>

      </div>
    </div>
  )
}

Message.defaultProps = {
  user: {fullname: 'anonim'},
}

Message.propsType = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
  attachments: PropTypes.array,
  idTyping: PropTypes.bool,
};

export default Message