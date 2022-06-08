import React from 'react';
import DialogItem from '../DialogItem';
import orderBy from "lodash/orderBy";
import '../Dialogs/Dialogs.scss';
import { Input, Empty  } from 'antd';


function Dialogs({currentDialog, items, userId, onSearch, inputValue, onSelectDialog}) {
  return (
    <div className='dialogs'>
      <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
        </div>
      {items.length ?
        orderBy(items, ["created_at"], ["desc"]).map(item=>(
          <DialogItem 
          key={item._id}
          _id={item._id}
          user= {item.user}
          message= {item}
          unReaded={item.unReaded}
          isMe = {item.user._id === userId}
          onSelect={onSelectDialog}
          currentDialog={currentDialog}
          />

        )) :
        <Empty description={'Ничего не найдено('} />
      }

    </div>
  )
}

export default Dialogs;