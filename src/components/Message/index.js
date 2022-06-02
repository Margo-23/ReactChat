import PropTypes, { element } from 'prop-types';
import React, {useEffect} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import { Time, IconReaded } from '../';

import './Message.scss';
import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';
import convertCurrentTime from '../../utils/helpers/convertCurrentTime'
import { Avatar } from '../';





function Message({avatar, text, date, user, isme, isReaded, attachments, audio, isTyping}) {

const AudioMessage=({audio})=>{
  const [isPlaing, setIsPlayng] = React.useState(false);  
  const [progressWidth, setProgressWidth] = React.useState(0);
  const [audioTime, setAudioTime] = React.useState(0);

  const audioElem = React.useRef();

  const togglePlay=()=>{    
    if(isPlaing){
      audioElem.current.pause();
    }else{
      audioElem.current.play();
    }    
  }

  useEffect(()=>{
    if(audioElem.current){
      audioElem.current.addEventListener('playing', ()=>{
        setIsPlayng(true);
      })
      audioElem.current.addEventListener('pause', ()=>{
        setIsPlayng(false);
      })
      audioElem.current.addEventListener('ended', ()=>{
        setIsPlayng(false);
        setProgressWidth(0);
        setAudioTime(0)
      })
      audioElem.current.addEventListener('timeupdate', ()=>{
        let audioLength = audioElem.current.duration;
        let time = audioElem.current.currentTime;
        let change = time/audioLength*100;
        setProgressWidth(change);
        setAudioTime(convertCurrentTime(time))
        // console.log(audioProgress)

      })
    }
  },[])

return (
<div className='message__audio'>
  <audio ref={audioElem} src={audio} preload='auto'></audio>
  <div className='message__audio-progress' style={{width: progressWidth + '%'}}></div>
  <div className='message__audio-info'>
    <div className='message__audio-btn'>
      <button onClick={togglePlay}>
        {!isPlaing? <img src={playSvg}/> : <img src={pauseSvg}/>}                           
      </button>
      </div>
    <div className='message__audio-wave'><img src={waveSvg} alt='wave svg'></img></div>
    <span className='message__audio-duration'>{audioTime? audioTime: '00:00'}</span>
  </div>            
 </div>
)
}
  return (
    <div className={classNames('message', 
    {
    'message--isme': isme, 
    'message--is-typing': isTyping, 
    'message--image': attachments && attachments.length==1,
    'message--is-audio': audio,
    })}>
      <div className='message__avatar'>
        <img className='avatar' alt={`User ${user.fullname}`} src={avatar}/>
        {/* <Avatar user={user}></Avatar> */}
      </div>
      <div className='message__content'>
        {<IconReaded isMe={isme} isReaded={isReaded}></IconReaded>}
        <div className='message__info'>
        {(audio || text || isTyping) && <div className='message__bubble'>
          {text && <p className='message__text'>{text}</p>}
          {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
          {date && <span className='message__date'>{<Time date></Time>}</span>}
          {audio && <AudioMessage audio={audio}/>}
        </div>}
        <div className='message__attachments'>
            {
            attachments && 
            <div className='message__attachments-item'>
            {attachments.map((item) =>(<img src={item.url} alt={item.fileName}></img>))}
            </div>
            }          
        </div>
        </div>

      </div>
    </div>
  )
}

Message.defaultProps = {
  user: {fullname: 'anonim'},
}

Message.propsType = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
  attachments: PropTypes.array,
  idTyping: PropTypes.bool,
};

export default Message