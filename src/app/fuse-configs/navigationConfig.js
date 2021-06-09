import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'Cyber',
		title: 'Cyber',
		translate: 'CYBER',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'ESP',
				title: 'ESP',
				translate: 'ESP',
				type: 'item',
				icon: 'today',
				url: '/apps/calendar'
			},
			{
				id: 'Catalogue',
				title: 'Catalogue',
				translate: 'Catalogue de solutions',
				type: 'item',
				icon: 'school',
				url: '/apps/academy'
			},
			{
				id: 'Guides',
				title: 'Guides',
				translate: 'Guides',
				type: 'item',
				icon: 'email',
				url: '/apps/mail',
				badge: {
					title: 25,
					bg: '#F44336',
					fg: '#FFFFFF'
				}
			},
			{
				id: 'Vulnerabilites',
				title: 'To-Vulnérabilités',
				translate: 'Vulnérabilités',
				type: 'item',
				icon: 'check_box',
				url: '/apps/todo',
				badge: {
					title: 3,
					bg: 'rgb(255, 111, 0)',
					fg: '#FFFFFF'
				}
			},
		]
	},
	{
		id: 'Resilience',
		title: 'Resilience',
		translate: 'Resilience',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'ESP',
				title: 'ESP',
				translate: 'ESP',
				type: 'item',
				icon: 'today',
				url: '/apps/calendar'
			},
			{
				id: 'Catalogue',
				title: 'Catalogue',
				translate: 'Catalogue de solutions',
				type: 'item',
				icon: 'school',
				url: '/apps/academy'
			},
			{
				id: 'Guides',
				title: 'Guides',
				translate: 'Guides',
				type: 'item',
				icon: 'email',
				url: '/apps/mail',
				badge: {
					title: 25,
					bg: '#F44336',
					fg: '#FFFFFF'
				}
			},
			{
				id: 'Vulnerabilites',
				title: 'To-Vulnérabilités',
				translate: 'Vulnérabilités',
				type: 'item',
				icon: 'check_box',
				url: '/apps/todo',
				badge: {
					title: 3,
					bg: 'rgb(255, 111, 0)',
					fg: '#FFFFFF'
				}
			},
		]
	},

];

export default navigationConfig;
