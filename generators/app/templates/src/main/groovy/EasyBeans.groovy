logger.info "[${extension.id}] registering Spring beans for ..."

println "Registering core beans for ${extension.id}"

easyCoreBeans {
    helloWorldService(<%= packageName %>.service.HelloWorldService)
    helloWorldController(<%= packageName %>.controller.HelloWorldController)
}

logger.info "[${extension.id}] beans registered ..."