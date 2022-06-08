import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import { messagesActions, dialogsActions } from '../redux/actions';
import {Messages as BaseMessages} from '../components/';

function Dialogs({currentDialog, fetchMessages, items, isLoading}) {
    // console.log(currentDialog)
      useEffect(()=>{        
        if (currentDialog) {
            fetchMessages(currentDialog);
          }
      }, [currentDialog])

  return (
    <BaseMessages items={items} isLoading={isLoading}></BaseMessages>
  )
}

export default connect(
  ({ dialogs, messages }) => ({
      currentDialog: dialogs.currentDialog,
      items: messages.items,
      isLoading: messages.isLoading
    }),
  messagesActions,
)(Dialogs);