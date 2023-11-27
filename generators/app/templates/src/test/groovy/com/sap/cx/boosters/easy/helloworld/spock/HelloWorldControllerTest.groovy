package <%= packageName %>.spock

import groovyx.net.http.HttpResponseDecorator
import groovyx.net.http.RESTClient
import spock.lang.Specification
import static org.apache.http.HttpStatus.SC_OK

class HelloWorldControllerTest extends Specification {

    def baseUrl = 'https://localhost:9002'
    def restClient = new RESTClient(baseUrl)

    def 'test helloWorldController'() {

        when:
        restClient.ignoreSSLIssues()
        HttpResponseDecorator response = restClient.get(path: '/easyrest/myextension/hello', query:[firstname:'Yannick'])

        then:
        with(response) {
            status == SC_OK
            data == [message:'hello Yannick']

        }

    }

}
