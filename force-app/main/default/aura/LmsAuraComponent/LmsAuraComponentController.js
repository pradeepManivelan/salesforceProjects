({
    handleMessage : function(component, message) {
        if(message != null && message.getParam("messageToSend") != null){
            component.set("v.messageReceived", message.getParam("messageToSend"))
        }
    },
    inputHandler:function(component, event){
        console.log(event.target.value);
        component.set("v.messageValue", event.target.value);
    },
    publishMessage:function(component){
        const msg = component.get("v.messageValue");
        let message = {
            messageToSend:msg
        }
        component.find("SampleMessageChannel").publish(message);
    }
})
