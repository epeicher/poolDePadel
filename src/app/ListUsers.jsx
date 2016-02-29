import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';

const ListExampleChat = () => (
  <div>
    <List subheader="Recent chats">
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="http://placecage.com/g/128/128" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="http://placecage.com/g/128/128" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="http://placecage.com/g/128/128" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="http://placecage.com/g/128/128" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="http://placecage.com/c/128/128" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <Divider />
    <List subheader="Previous chats">
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar src="http://placecage.com/c/128/128" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftAvatar={<Avatar src="http://placecage.com/c/128/128" />}
      />
    </List>
  </div>
);

export default ListExampleChat;