import React from 'react';
import classes from './ChatBox.module.css';
import { Image, List } from 'semantic-ui-react';
import chatIcon from '../../ikonit/chätti.svg';

const ChatBox = () => {
  return (
    <div className={classes.chatBox}>
      <List selection verticalAlign='middle'>
        <List.Item className={classes.listItem}>
          <Image src={chatIcon} className={classes.icon} />
          <List.Content className={classes.contentItem}>
            <List.Header className={classes.headerText}>
              Avaa chätti
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
};

export default ChatBox;
