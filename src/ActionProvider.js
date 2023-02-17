import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // console.log(isOpen);
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you. These are our services. please click on anyone to select and to move forward, Please type budget.',{widget:"services"
    },
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleService=()=>{
    const botMessage = createChatBotMessage('Thanks for the selection. These are our Budget. Click on anyone to select.',{widget:"budget"
    },
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOther=()=>{
    const botMessage = createChatBotMessage(`To start conversation, please type "hi".`
  );

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello,handleService,handleOther},
        });
      })}
    </div>
  );
};

export default ActionProvider;