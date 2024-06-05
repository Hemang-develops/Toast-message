import { useState } from "react";
import ToastMessage from "../components/toast/ToastMessage";
import '../components/toast/styles.css';

const useNotification = () => {
  const [position, setPosition] = useState('top-right');
  const [notification, setNotification] = useState(null);
    let timer;

    const triggerNotification = (notificationProps) => {
        clearTimeout(timer);
        setNotification(notificationProps);
        setPosition(notificationProps.position);
        timer = setTimeout(() => {
            setNotification(null);
        }, notificationProps.duration);
    }

    const NotificationComponent = notification ? (
        <div className={`${position}`}>
            <ToastMessage {...notification} />
        </div>
    ) : null

    return {NotificationComponent, triggerNotification};
}

export default useNotification;