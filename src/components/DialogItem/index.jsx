import React from 'react';
import classNames from 'classnames';
import { format,isToday } from 'date-fns';

import IconReaded from '../IconReaded';
import {Avatar} from '../../components'



const getMessageTime = createdAt => {
  let date = new Date(createdAt)
    if (isToday(date)) {
      return format(date, 'HH:mm');
    } else {
      return format(date, 'dd.MM.yyyy');
    }
  };


function DialogItem({_id, user, message, unReaded, isMe, onSelect, currentDialog}) {
  return (
    <div className={classNames('dialogs__item', {
      'dialogs__item--online': user.isOnline,
      'dialogs__item--selected': currentDialog === _id
    })}
    onClick = {onSelect.bind(this, _id)}
    
    >
        <div className='dialogs__item-avatar'>
        <Avatar user={user}></Avatar>           
        </div>
        <div className='dialogs__item-info'>
            <div className='dialogs__item-info-top'>
                <b>{user.fullname}</b>
                <span>{getMessageTime(message.created_at)}</span>
                
            </div>       
            <div className='dialogs__item-info-bottom'>        
                <p>{message.text}</p> 
                <IconReaded IconReaded isMe={isMe} isReaded={message.isReaded}></IconReaded> 
                {unReaded>0 && <div className='dialogs__item-info-bottom-count'>{unReaded}</div>}               
             </div>
        </div>


    </div>
  )
}

export default DialogItem