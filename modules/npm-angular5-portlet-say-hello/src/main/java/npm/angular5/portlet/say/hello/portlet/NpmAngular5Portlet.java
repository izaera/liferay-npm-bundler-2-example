package npm.angular5.portlet.say.hello.portlet;

import npm.angular5.portlet.say.hello.constants.NpmAngular5PortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author ivan
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.header-portlet-css=/css/indigo-pink.css",
		"com.liferay.portlet.instanceable=true",
		"javax.portlet.display-name=npm-angular5-portlet-say-hello Portlet",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + NpmAngular5PortletKeys.NpmAngular5,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class NpmAngular5Portlet extends MVCPortlet {
}