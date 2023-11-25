package <%= packageName %>.controller

import com.sap.cx.boosters.easyrest.controller.EasyRestServiceController
import <%= packageName %>.service.HelloWorldService

import javax.annotation.Resource

class HelloWorldController implements EasyRestServiceController {

    @Resource
    HelloWorldService helloWorldService

    @Override
    Map execute(Map ctx) {
        def response = [:]
        response.'responseCode' = 200
        response.'body' = groovy.json.JsonOutput.toJson([message:helloWorldService.sayHello(ctx.parameters.firstname)])
        return response
    }

}
