import React from 'react';

import {Dialogs as BaseDialogs} from '../components/';

function Dialogs({items, userId}) {
    const [inputValue, setValue] = React.useState('');
    const [filtred, setFiltredItems] = React.useState(Array.from(items));

    const onChangeInput = (value = '') => {
        setFiltredItems(
          items.filter(
            dialog =>
              dialog.user.fullname.toLowerCase().includes(value.toLowerCase())
          ),
        );
        setValue(value);
      };
  return (
    <BaseDialogs userId={userId} items={filtred} onSearch={onChangeInput}  inputValue={inputValue}></BaseDialogs>
  )
}

export default Dialogs