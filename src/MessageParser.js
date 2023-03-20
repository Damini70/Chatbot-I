import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowercase=message.toLowerCase();
    if(lowercase.trim()==""){
      actions.handleEmpty();
    
    }
    if (lowercase.includes('@gmail.com')) {
        actions.handleHello();
      }else{
        
      }
    if(lowercase.includes('budget')||lowercase.includes('price')||lowercase.includes('cost')) {
      actions.handleService();
    } 
    if(lowercase.includes('hi')||lowercase.includes('hey')||lowercase.includes('hello')){
      actions.handleOther()
    }
    if(lowercase.includes('services'||lowercase.includes('service'))){
      actions.handleHello();
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