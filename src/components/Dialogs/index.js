import React from 'react';
import DialogItem from '../DialogItem';
import orderBy from "lodash/orderBy";
import '../Dialogs/Dialogs.scss';
import { Input, Empty } from 'antd';


function Dialogs({items, userId, onSearch, inputValue}) {
  return (
    <div className='dialogs'>
              <div className="chat__sidebar-search">
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
          user= {item.user}
          message= {item}
          unReaded={item.unReaded}
          isMe = {item.user._id === userId}
          />

        )) :
        <Empty description={'Ничего не найдено('} />
      }

    </div>
  )
}

export default Dialogs;