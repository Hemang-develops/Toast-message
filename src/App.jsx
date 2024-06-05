import React, { useContext, useEffect, useState } from 'react'
import useNotification from './hooks/use-notification'
import './App.css';

const App = () => {
  const [duration, setDuration] = useState(3000);
  const [position, setPosition] = useState('top-right');
  const { NotificationComponent, triggerNotification } = useNotification(position);

  return (<>
    <label htmlFor="duration">Duration:</label>
    <input type="number" name="duration" id="" value={duration} onChange={(e) => setDuration(e.target.value)} />
    <br/>
    <label htmlFor="position">Position:</label>
    <label>
    <input type="radio" name="position" id="" onChange={(e) => setPosition('top-right')} value='top-right' checked={position === 'top-right'} />top-right
    </label>
    <label>
    <input type="radio" name="position" value='bottom-right' id="" onChange={(e) => setPosition('bottom-right')} checked={position === 'bottom-right'}/>bottom-right
    </label>
    <label>
    <input type="radio" name="position" id="" onChange={(e) => setPosition('top-left')} value='top-left' checked={position === 'top-left'}/>top-left
    </label>
    <label>
    <input type="radio" name="position" id="" onChange={(e) => setPosition('bottom-left')} value='bottom-left' checked={position === 'bottom-left'}/>bottom-left
    </label>

    <div className='btnContainer'>
      <button className='success btn' onClick={() => triggerNotification({
        type: 'success',
        message: 'File Created Successfully',
        duration: duration,
        position: position
      })}>Trigger Success
      </button>
      <button className='error btn' onClick={() => triggerNotification({
        type: 'error',
        message: 'File Not Found',
        duration: duration,
        position: position
      })}>Trigger Error
      </button>
      <button className='info btn' onClick={() => triggerNotification({
        type: 'info',
        message: 'File Deleted',
        duration: duration,
        position: position
      })}>Trigger Info
      </button>
      <button className='warning btn' onClick={() => triggerNotification({
        type: 'warning',
        message: 'File can not restored',
        duration: duration,
        position: position
      })}>Trigger Warning
      </button>
    </div>
    {NotificationComponent}
  </>
  )
}

export default App
