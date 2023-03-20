import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // console.log(isOpen);
  const handleHello = () => {
    const botMessage = createChatBotMessage(' These are our services. please click on anyone to select and to move forward, Please type budget.',{widget:"services"
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
    const botMessage1 = createChatBotMessage(`Hi ${sessionStorage.full_name}. How may i assist you today!!!!. please type your valid email, address and phone number also. So that we can track you.`,{widget:"nameform"}
  );
  const botMessage2= createChatBotMessage(` To proceed further please type services. `)

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage1,botMessage2],
  }))
  };
  const handleEmpty=(e)=>{
    const a=document.querySelector("react-chatbot-kit-chat-btn-send");
    console.log(a);
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello,handleService,handleOther,handleEmpty},
        });
      })}
    </div>
  );
};

export default ActionProvider;