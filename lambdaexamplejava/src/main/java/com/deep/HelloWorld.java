package com.deep;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;

public class HelloWorld {

    public void myHandler(SMSPayload payload, Context context) {

        LambdaLogger logger = context.getLogger();
        logger.log("received: " + payload.getMessage() + payload.getPhoneNumber());
    }
}
