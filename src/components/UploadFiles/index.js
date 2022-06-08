import { CameraOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },

};

const UploadFiles = () => (
  <Upload {...props}>
    <Button icon={<CameraOutlined />}></Button>
  </Upload>
);

export default UploadFiles;