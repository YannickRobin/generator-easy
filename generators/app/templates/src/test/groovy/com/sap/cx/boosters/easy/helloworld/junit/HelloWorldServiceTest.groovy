package <%= packageName %>.junit

import <%= packageName %>.service.HelloWorldService
import de.hybris.bootstrap.annotations.UnitTest
import de.hybris.platform.servicelayer.config.ConfigurationService
import org.apache.commons.configuration.Configuration
import org.junit.Before
import org.junit.Test
import org.mockito.Mock

import static org.junit.Assert.assertEquals
import static org.mockito.Mockito.when
import static org.mockito.MockitoAnnotations.openMocks

@UnitTest
class HelloWorldServiceTest {

    @Mock
    ConfigurationService configurationService

    @Mock
    Configuration configuration

    @Before
    void setUp() throws Exception {
        openMocks(this).close()
        when(configurationService.getConfiguration()).thenReturn(configuration)
        when(configuration.getString('easy.<%= projectId %>.message')).thenReturn('hello')
    }

    @Test
    void test_hello_world_service() {

        def helloWorldService = new HelloWorldService()
        helloWorldService.configurationService = configurationService
        def firstName = 'Yannick'
        def result = helloWorldService.sayHello(firstName)

        assertEquals(result,"hello ${firstName}".toString())

    }

}
