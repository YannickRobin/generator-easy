var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
    }
   
    async prompting() {
        this.answers = await this.prompt([
          {
            type: "input",
            name: "projectId",
            message: "Your project name",
            default: "helloworld" // Default to current folder name
          },
          {
            type: "input",
            name: "projectGroupId",
            message: "Your project group id",
            default: "com.mycompany.commerce.easy"
          },          
          {
            type: "input",
            name: "projectDescription",
            message: "Your project description"
          },
          {
            type: "author",
            name: "projectAuthor",
            message: "The author of the project"
          }         
        ]);
    }
    
    configuring() {
        const packageName = `${this.answers.projectGroupId}.${this.answers.projectId}`;
        const packageFolder = packageName.replace(/\./g, '/')
    
        // combining user data
        this.answers = {
          ...this.config.getAll(), // getting saved config data
          ...this.answers,
          packageName,
          packageFolder,
        };
    
        // saving to config file
        this.config.set(this.answers);
    }

    writing() {

        const templates = [
            '.gitignore',
            'build.gradle',
            'settings.gradle',
            'gradle.properties',
            'easy.json',
            'easy.properties',
            'src/main/groovy/EasyBeans.groovy',
            'src/main/groovy/easy.gdsl',
            'src/main/groovy/Init.groovy',
            'impex/install/01-easyrest.impex',
            'impex/uninstall/01-easyrest.impex'
          ];
      
        templates.forEach((filePath) => {
            this.fs.copyTpl(
                this.templatePath(filePath),
                this.destinationPath(filePath),
                this.answers
            );
        });

        this.fs.copyTpl(
            this.templatePath('src/main/groovy/com/sap/cx/boosters/easy/helloworld/service/HelloWorldService.groovy'),
            this.destinationPath('src/main/groovy/' + this.answers.packageFolder + '/service/HelloWorldService.groovy'),
            this.answers
        );

        this.fs.copyTpl(
            this.templatePath('src/main/groovy/com/sap/cx/boosters/easy/helloworld/controller/HelloWorldController.groovy'),
            this.destinationPath('src/main/groovy/' + this.answers.packageFolder + '/controller/HelloWorldController.groovy'),
            this.answers
        );    

        this.fs.copyTpl(
            this.templatePath('src/test/groovy/com/sap/cx/boosters/easy/helloworld/junit/HelloWorldControllerTest.groovy'),
            this.destinationPath('src/test/groovy/' + this.answers.packageFolder + '/junit/HelloWorldControllerTest.groovy'),
            this.answers
        );

        this.fs.copyTpl(
            this.templatePath('src/test/groovy/com/sap/cx/boosters/easy/helloworld/junit/HelloWorldServiceTest.groovy'),
            this.destinationPath('src/test/groovy/' + this.answers.packageFolder + '/junit/HelloWorldServiceTest.groovy'),
            this.answers
        );

        this.fs.copyTpl(
            this.templatePath('src/test/groovy/com/sap/cx/boosters/easy/helloworld/spock/HelloWorldControllerTest.groovy'),
            this.destinationPath('src/test/groovy/' + this.answers.packageFolder + '/spock/HelloWorldControllerTest.groovy'),
            this.answers
        );

        this.fs.copyTpl(
            this.templatePath('src/test/groovy/com/sap/cx/boosters/easy/helloworld/spock/HelloWorldServiceTest.groovy'),
            this.destinationPath('src/test/groovy/' + this.answers.packageFolder + '/spock/HelloWorldServiceTest.groovy'),
            this.answers
        );
      }

  };