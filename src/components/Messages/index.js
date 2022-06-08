import React from 'react';

import { Empty, Spin } from 'antd';

import Message from '../Message';

function Messages({ isLoading, items}) {
  return (
    (isLoading && !items) ? 
      (<div className="example">
      <Spin size="large" />
      </div>)
      :
      (<div>
        {items? 
        (<div>
          {items.map(item=>(
            <Message {...item} ></Message>
          ))}
 
        </div>)
        : 
        <Empty description={'Нет сообщений'} />}
      </div>)
    
  )
}

export default Messages