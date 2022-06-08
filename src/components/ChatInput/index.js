import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
// import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";
import data from '@emoji-mart/data'
import {SendOutlined, SmileOutlined, CameraOutlined, AudioOutlined} from '@ant-design/icons';

import { UploadFiles } from "../../components";

import "./ChatInput.scss";
import classNames from "classnames";

const { TextArea } = Input;
function ChatInput() {
    const [value, setValue] = React.useState('');
    const [emojiVisible, setEmojiVisible] = React.useState(false);

      const ref = React.useRef()
      new Picker({ ref })    

  return (
    <div className="chat-input">
        <div className="chat-input__smile-btn">
          <div  ref={ref} className={classNames('emoji', {'emoji--visible': emojiVisible})}></div>        
        <SmileOutlined onClick={()=>setEmojiVisible(!emojiVisible)}  />
        </div>
         
    <TextArea onChange={(e)=> setValue(e.target.value)} rows={2} placeholder="Введите текст" maxLength={2} />


        <div className="chat-input__actions">
        
        <UploadFiles />
        {value? <SendOutlined />: <AudioOutlined />}
        
        </div>
     
      
    </div>
  )
}

export default ChatInput