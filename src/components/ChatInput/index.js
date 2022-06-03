import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
// import { UploadField } from "@navjobs/upload";
// import { Picker } from "emoji-mart";
import {SendOutlined, SmileOutlined, CameraOutlined, AudioOutlined} from '@ant-design/icons';

// import { UploadFiles } from "components";

import "./ChatInput.scss";

const { TextArea } = Input;
function ChatInput() {
    const [value, setValue] = React.useState('');
  return (
    <div className="chat-input">
        <div className="chat-input__smile-btn">
        <SmileOutlined />
        </div>
         
    <TextArea onChange={(e)=> setValue(e.target.value)} rows={2} placeholder="Введите текст" maxLength={2} />


        <div className="chat-input__actions">
        
        <CameraOutlined />
        {value? <SendOutlined />: <AudioOutlined />}
        
        </div>
     
      
    </div>
  )
}

export default ChatInput