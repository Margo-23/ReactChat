import React from 'react';
import {TeamOutlined,EditOutlined, EllipsisOutlined,SendOutlined,SmileOutlined} from '@ant-design/icons';


import './Home.scss';
import {Messages,  Status, ChatInput} from '../../components';
import {Dialogs} from '../../containers';



function Home() {
  return (
    <div className='home'>

      <div className="chat">
        <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
          <TeamOutlined />
        <span>Список диалогов</span>        
          </div>
          <EditOutlined />
        </div>

        <div className="chat__sidebar-dialogs">
        <Dialogs
      userId = {1}
      items={[
        {
          "_id": "6299c3d39e637a5ddf04c4e3",
          "text": "Do in duis est exercitation. Officia elit proident proident amet. Aliqua cupidatat exercitation cillum sint enim do.",
          "created_at": new Date(),
          "isReaded": true,
          "unReaded": 1,
          "user": {
            "_id": "6299c3d388794cb9d2d1efd7",
            "fullname": "Kristin",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d39373dd8f6708586f",
          "text": "Qui esse ipsum nisi dolore pariatur qui minim aliqua. Sunt ea ut qui mollit officia nisi voluptate voluptate sunt commodo veniam in minim. Nisi culpa dolore veniam labore eu enim deserunt minim consectetur culpa mollit velit.",
          "created_at": new Date(),
          "isReaded": false,
          "unReaded": 4,
          "user": {
            "_id": "6299c3d32ec91dfbf5f3e5c2",
            "fullname": "Eaton",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d32e61047f50c445c1",
          "text": "Aliqua labore labore mollit excepteur officia anim eiusmod dolor. Dolor ex culpa sint commodo Lorem velit minim velit voluptate mollit consectetur ullamco. Exercitation quis nostrud in incididunt irure exercitation.",
          "created_at": new Date(),
          "isReaded": false,
          "unReaded": 3,
          "user": {
            "_id": "6299c3d3aac8667bcaede62c",
            "fullname": "Janna",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d36c24c19b2bcfc9dd",
          "text": "Sunt velit id enim dolor et aliqua magna et cupidatat id sit. Nostrud esse culpa occaecat sint elit nostrud est est magna do reprehenderit officia eiusmod ut. Adipisicing voluptate aute pariatur laboris aliquip proident do.",
          "created_at": new Date(),
          "isReaded": false,
          "unReaded": 2,
          "user": {
            "_id": "6299c3d31787c654da4dc231",
            "fullname": "Maggie",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d32f170b39728d9f37",
          "text": "Eu esse officia do nostrud nostrud sint pariatur incididunt minim labore laboris. Excepteur dolore labore officia labore quis adipisicing nulla irure ea cupidatat fugiat ut nisi. Voluptate excepteur dolore ad dolore officia culpa dolor Lorem laboris commodo.",
          "created_at": new Date(),
          "isReaded": false,
          "unReaded": 5,
          "user": {
            "_id": "6299c3d3b80be5fad7f4e1b4",
            "fullname": "Gregory",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d3b73e7e94a9fa546a",
          "text": "Cupidatat commodo ut qui culpa qui voluptate sint nulla. Reprehenderit sunt sunt in dolore pariatur Lorem reprehenderit. Magna ipsum irure tempor cupidatat sunt est velit irure laboris laboris non voluptate.",
          "created_at": new Date(),
          "isReaded": false,
          "unReaded": 0,
          "user": {
            "_id": "6299c3d30dd4aee396310e4a",
            "fullname": "Virginia",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d35e4f9502b154f836",
          "text": "Eu adipisicing laboris ea proident anim Lorem dolore officia excepteur. Consequat excepteur veniam duis in consectetur nisi non. Dolore mollit reprehenderit sunt enim culpa fugiat pariatur exercitation.",
          "created_at": new Date(),
          "isReaded": true,
          "unReaded": 6,
          "user": {
            "_id": "6299c3d37500bf3175a16d6d",
            "fullname": "Berger",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d356a8a340f41c01ab",
          "text": "Et esse anim ea ipsum occaecat culpa eu. Adipisicing mollit officia voluptate dolore nisi mollit mollit incididunt. Lorem qui ullamco Lorem nisi ipsum id deserunt proident.",
          "created_at": new Date(),
          "isReaded": true,
          "unReaded": 2,
          "user": {
            "_id": "6299c3d35191852689c8ecb6",
            "fullname": "Marcy",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d394240ed6b8616b6b",
          "text": "Aliquip ea ut cillum aute elit tempor cillum. Dolore pariatur duis qui consequat culpa officia. Laborum laborum non ea culpa sunt eu.",
          "created_at": new Date(),
          "isReaded": false,
          "unReaded": 4,
          "user": {
            "_id": "6299c3d3173c99d127b091f6",
            "fullname": "Thompson",
            "avatar": null
          }
        },
        {
          "_id": "6299c3d3a1dff0eeb70f9236",
          "text": "Occaecat enim anim incididunt qui dolor labore eiusmod dolore. Culpa reprehenderit ipsum pariatur minim proident ex. Et in cillum et sit ut deserunt Lorem officia incididunt voluptate.",
          "created_at": new Date(),
          "isReaded": true,
          "unReaded": 2,
          "user": {
            "_id": "6299c3d309c3201e36864dd1",
            "fullname": "Sykes",
            "avatar": null
          }
        }
      ]} />
        </div>
        </div>

        <div className="chat__dialog">

          <div className="chat__dialog-header">
            <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
          <div className="chat__dialog-header-status status">
            <Status online></Status>
          </div>
            </div>
            <EllipsisOutlined />
          </div>
            <div className="chat__dialog-messages messages">
           <Messages></Messages>
            </div>
            <div className='chat__dialog-input'>
            <ChatInput></ChatInput>
            </div>

          
        </div>
      </div>

      
      
      
    </div>
  )
}

export default Home;