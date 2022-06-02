import React from 'react';
import DialogItem from '../DialogItem';
import orderBy from "lodash/orderBy";
import '../Dialogs/Dialogs.scss'


function Dialogs({items, userId}) {
  return (
    <div className='dialogs'>
      {
        orderBy(items, ["created_at"], ["desc"]).map(item=>(
          <DialogItem 
          key={item._id}
          user= {item.user}
          message= {item}
          unReaded={item.unReaded}
          isMe = {item.user._id === userId}
          />

        ))
      }

    </div>
  )
}

export default Dialogs;