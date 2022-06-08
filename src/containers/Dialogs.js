import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import { dialogsActions } from '../redux/actions';
import {Dialogs as BaseDialogs} from '../components/';

function Dialogs({fetchDialogs, items, userId, currentDialog, setCurrentDialog}) {
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

      

      useEffect(()=>{
        if(!items.length){
          fetchDialogs()
        }else{
          setFiltredItems(items)
        }       

      }, [items])

  return (
    <BaseDialogs userId={userId} items={filtred} onSearch={onChangeInput}  inputValue={inputValue} onSelectDialog={setCurrentDialog} currentDialog={currentDialog}></BaseDialogs>
  )
}

export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions,
)(Dialogs);