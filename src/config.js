import { createChatBotMessage } from 'react-chatbot-kit';
import MyAvatar from './MyAvatar';
import Form from "./Form.js";
import Service from './Service';
import Budget from "./Budget.js";

const company="Iotas";


function form(){

}


const config = {
  initialMessages: [createChatBotMessage(`Hi there! Welcome to the ${company} chatbot , your bot assistant. I can help you to navigate through the website / explain our new offers via chat. To start, please type "Hi" and To stay connected with us please type your name, number and email. we’ll be happy to assist you right away!`,{
   widget:"userDetails",
  }),],
 widgets:[{
  widgetName: "userDetails",
  widgetFunc: (props) => <Form {...props} />,
 },
 {
  widgetName:"services",
  widgetFunc:(props)=> <Service {...props}/>,
 },{
  widgetName:"budget",
  widgetFunc:(props)=><Budget {...props}/>
 }
],

  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: 'lightblue', padding: "1rem", borderRadius: "3px" }}><div style={{fontSize:"1rem",fontWeight:"bold"}}>Iotas Solutions Pvt. Ltd.</div></div>,
   // Replaces the default bot avatar
   botAvatar: (props) => <MyAvatar  />,
//    // Replaces the default bot chat message container
//    botChatMessage: (props) => <MyCustomChatMessage {...props} />,
//    // Replaces the default user icon
//    userAvatar: (props) => <MyCustomAvatar {...props} />,
//    // Replaces the default user chat message
//    userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },
};

export default config;