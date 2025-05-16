import { notifications } from "@mantine/notifications";
import { IconAlertCircle, IconCheck } from "@tabler/icons-react";

export class NotificationsService {

  success(message: string): void {
    notifications.show({
      title: 'Success!',
      message: message,
      color: 'green',
      icon: <IconCheck size={16}/>
    });
  }

  error(message: string): void {
    notifications.show({
      title: 'Error!',
      message: message,
      color: 'red',
      icon: <IconAlertCircle size={16}/>
    });
  }

}