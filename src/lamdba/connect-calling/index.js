exports.handler = async (event) => {

    const aws = require('aws-sdk');
    const connect = new aws.Connect({region:'us-east-1'});
    
    // Set Params
    const instanceId = process.env.INSTANCEID ;
    const contactFlowId = process.env.CONTACTFLOWID ;
    const destinationPhoneNumber = process.env.CUSTOMERPHONENUMBER ;
    // Set Param List
    const params = {
            ContactFlowId: contactFlowId,
            DestinationPhoneNumber: destinationPhoneNumber,
            InstanceId: instanceId
        };

    console.log(params)

    // Connect Calling
    async function call(){
        const result = await connect.startOutboundVoiceContact(params).promise();
        console.log(JSON.stringify(result));
    }
    call();
    /** 
    var call = connect.startOutboundVoiceContact(params, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    return call;
    */
};