import React from 'react';

import './Home.scss';
import {Message, Dialogs} from '../../components';

function Home() {
  return (
    <div className='home'>
      <Dialogs
      userId = {1}
      items={[
        {
          _id: Math.random(),
          user : {
          _id: 1,
          fullname: 'Jacob Kovalsky',
          avatar: 'https://image.shutterstock.com/image-vector/beautiful-girl-hairstyle-600w-374850607.jpg',
          isOnline: true ,
        },
          text: 'Some interesting text1',
          isReaded: false,
          created_at: new Date(26,3,17),

        unReaded : 0,
      },
      {
        _id: Math.random(),
        user : {
        _id: 2,
        fullname: 'Jacob Kovalsky',
        avatar: 'https://javascript-conference.com/wp-content/uploads/2018/11/1542626234-Sebastian-Springer-500x330.jpg',
        isOnline: true ,
      },
        text: 'Some interesting text1',
        isReaded: false,
        created_at: new Date(),

      unReaded : 3,
    },


      ]}
      
      
      />
      
      <Message 
      avatar='https://image.shutterstock.com/image-vector/beautiful-girl-hairstyle-600w-374850607.jpg' 
      text='Hello brut!'
      date='Thu May 25 2022 09:57:45'
      attachments={[
        {
          fileName: 'image.jpg',
          url: 'https://images.pexels.com/photos/6749092/pexels-photo-6749092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },

        {
          fileName: 'image.jpg',
          url: 'https://images.pexels.com/photos/5326951/pexels-photo-5326951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          fileName: 'image.jpg',
          url: 'https://images.pexels.com/photos/5326951/pexels-photo-5326951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }

      ]}
      />
            <Message 
      avatar='https://image.shutterstock.com/image-vector/beautiful-girl-hairstyle-600w-374850607.jpg' 
      attachments={[
        {
          fileName: 'image.jpg',
          url: 'https://images.pexels.com/photos/6749092/pexels-photo-6749092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      ]}
      />
      <Message 
      avatar='https://image.shutterstock.com/image-vector/beautiful-girl-hairstyle-600w-374850607.jpg' 
      isTyping
      />

      <Message 
      avatar='https://image.shutterstock.com/image-vector/face-happy-girl-avatar-laughing-600w-1459862774.jpg' 
      text='Совбез ООН проведёт заседание по КНДР, — СМИ'
      date='Thu May 26 2022 09:57:45'
      isme={true}
      isReaded= {false}
      />
      
    </div>
  )
}

export default Home;