import PropTypes, { element } from 'prop-types';
import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';

import readedSvg from '../../assets/img/readed.svg';
import noreadedSvg from '../../assets/img/noreaded.svg';
import './Message.scss';

function Message({avatar, text, date, user, isme, isReaded, attachments}) {
  return (
    <div className={classNames('message', {'message--isme': isme})}>
      <div className='message__avatar'>
        <img className='avatar' alt={`User ${user.fullname}`} src={avatar}/>
      </div>
      <div className='message__content'>
        {isme && (isReaded ? <img className='message__icon-readed' src={readedSvg} alt='readed icon'></img> : <img className='message__icon-readed message__icon-readed--no' src={noreadedSvg} alt='noreaded icon'></img>)}
        <div className='message__info'>
        <div className='message__bubble'>
          <p className='message__text'>{text}</p>
          <span className='message__date'>{formatDistanceToNow(new Date(date), {includeSeconds: true,addSuffix: true, locale: ruLocale})}</span>
        </div>
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
};

export default Message