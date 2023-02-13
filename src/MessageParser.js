import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowercase=message.toLowerCase();
    if (lowercase.includes('hey')||lowercase.includes('hi')||lowercase.includes('hello')) {
        actions.handleHello();
      }
    else if(lowercase.includes('budget')||lowercase.includes('price')||lowercase.includes('cost')) {
      actions.handleService();
    } else{
      actions.handleOther()
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;