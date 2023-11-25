# GENERATOR-EASY

This project is a Yeoman generator.
Yeoman is a scaffolding tool that will help you kickstart new Easy extension projects. It is a Node.js module, and you can install it from npm.

# Getting started

## Preparation
- Install NodeJS
- Install Yeoman
```
npm install -g yo
```
- Install [Gradle](https://gradle.org/install/)
- Create your global gradle configuration properties file:
  - Unix/MacOS - `~/.gradle/gradle.properties`
  - Windows - `<WINDOWS_DRIVE>:\Users\<USER_NAME>\.gradle\gradle.properties`
- Configure you gradle environment for `easy-gradle-plugin` by adding the following properties to global `gradle.properties`
  ```properties
  # Path to the hybris home directory on your computer to add SAP Commerce Cloud libraries to your extension
  commercePlatformHome=<SAP COMMERCE HOME>
  
  # The base url of the easy rest for your SAP Commerce Cloud. Below if for a local SAP Commerce Cloud Server
  sap.commerce.easy.rest.base.url = https://localhost:9002/easyrest

  # The base url of the easy api for your SAP Commerce Cloud. Below if for a local SAP Commerce Cloud Server
  sap.commerce.easy.api.base.url = https://localhost:9002/easyrest/easyapi

  # Value of easy.apiKey property configured in SAP Commerce Cloud (by default, this is 123456)
  sap.commerce.easy.api.key = 123456
  ```

## Generate an Easy Extension


Create a new folder for your new extension (ex: `myextension`)
```
mkdir myextension
cd myextension
```

Now, you can run Yeoman to generate the extension
```
yo easy
```

Now you can execute unit tests to validate your extension
```
gradle test
```