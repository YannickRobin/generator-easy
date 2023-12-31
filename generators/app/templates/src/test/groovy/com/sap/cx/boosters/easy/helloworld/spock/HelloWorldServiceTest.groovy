package <%= packageName %>.spock

import <%= packageName %>.service.HelloWorldService
import de.hybris.bootstrap.annotations.UnitTest
import de.hybris.platform.servicelayer.config.ConfigurationService
import org.apache.commons.configuration.Configuration
import org.junit.Test
import spock.lang.Specification

@UnitTest
class HelloWorldServiceTest extends Specification {

    ConfigurationService configurationService = Mock()

    Configuration configuration = Mock()

    def 'test helloWorldService'() {

        when:
        def helloWorldService = new HelloWorldService()
        helloWorldService.configurationService = configurationService
        configurationService.getConfiguration() >> configuration
        configuration.getString('easy.<%= projectId %>.message') >> 'hello'
        def firstName = 'Yannick'
        def result = helloWorldService.sayHello(firstName)

        then:
        result == "hello ${firstName}"

    }

}
