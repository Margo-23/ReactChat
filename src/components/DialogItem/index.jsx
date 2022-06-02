import React from 'react';
import classNames from 'classnames';
import { format,isToday } from 'date-fns';

import IconReaded from '../IconReaded';



const getMessageTime = createdAt => {
    if (isToday(createdAt)) {
      return format(createdAt, 'HH:mm');
    } else {
      return format(createdAt, 'dd.MM.yyyy');
    }
  };


function getAvatar(avatar){
    if(avatar){
        return <img src={avatar} alt={"Avatar"} />  ;
    }else{
        //Make avatar
    }
}

function DialogItem({user, message, unReaded, isMe}) {
  return (
    <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
        <div className='dialogs__item-avatar'>
        {getAvatar(user.avatar)}           
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