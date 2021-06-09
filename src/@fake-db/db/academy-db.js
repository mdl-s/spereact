import _ from '@lodash';
import { amber, blue, blueGrey, green } from '@material-ui/core/colors';
import { Manager } from 'react-popper';
import mock from '../mock';

const apiSecure = [
	{
		id: '0',
		title: 'La sécurisation des API',
		content:
			'<h1>Introduction aux API</h1>' +
			'<br>' +
			'<img src="https://i.postimg.cc/0227MbB4/api.png" alt="api_logo"/>' +
			'Les APIs sont partout aujourd’hui et permettent aussi bien les échanges à l’intérieur du système d’information que les accès partenaires et clients. Quelles bonnes pratiques de sécurité adopter ?' +
			'<br><br>' +
			'Ce que l’on appelle aujourd’hui communément APIs ou Application Programming Interfaces regroupe un ensemble de méthodes de communications inter applicative allant des services web (REST ou SOAP) aux appels entre processus (RPC) locaux ou distants. Les services web de ce type, même s’ils ne sont pas les seuls à utiliser des API, se sont répandus comme une trainée de poudre ces dernières années et représentent un mécanisme de commu-nication prépondérant et incontournable pour toutes les entreprises lancées dans leur transformation numérique. Ils sont rencontrés maintenant dans un nombre toujours plus important de cas d’usages : données publiques, personnelles ou sensibles, applications mobiles, échanges entre partenaires, IoT, applications dites « client-side », etc.' +
			'<br><br>' +
			'<code>Le concept n\'est pas nouveau</code>' +
			'<br><br>' +
			'Dès l’introduction et la définition de la notion d’architecture REST, en 2000, les premières APIs voyaient le jour. Les pionniers ont été eBay notamment ou encore Flickr puis Facebook et Twitter en ont fait le cœur de leur produit sur lequel des développeurs tiers pouvaient venir bâtir leurs propres services. Et dès la naissance de ce concept s’est évidemment posée la question de sécuriser les accès à ce nouveau type de services web. L’expérience le montre, la sécurisation des APIs est une recette à base de 4 ingrédients qu’il faut savamment doser.' +
			'<br><br>'
	},
	{
		id: '1',
		title: 'Les fondamentaux',
		content:
			'<h1>Les fondamentaux de la sécurité des API</h1>' +
			'<br>' +
			'<code>Finalement, une API c\'est quoi ?</code>' +
			'<br><br>' +
			'Une API pourrait être vu comme le menu d\'un restaurant. Le restaurant est le service et il vous met à disposition différents repas. Vous n\êtes évidemment pas obligé d\'aller en cuisine tout manger, vous avez juste probablement envie d\'un plat et d\'un dessert. Votre API, ici votre menu va donc permettre au restaurant de ne vous donner que ce dont vous avez besoin : votre plat, votre dessert' +
			'<br><br>' +
			'Cela permet aux différentes entreprises de proposer des services à un tiers sans exposer tout ce qu\'il y a au sein de cette même entreprise' +
			'<br><br>' +
			'<code>Les 6 fondamentaux à prendre en compte</code>' +
			'<br><br>' +
			'Les API doivent respecter quelques fondamentaux que nous pourrions résumer ainsi :' +
			'<br><br>' +
			'<img src="https://i.postimg.cc/sxY00vrS/api-concept.png" alt="api_secure"/>' 
	},
	{
		id: '2',
		title: 'Gestion des sessions',
		content:
			'<h1>La gestion des sessions</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '3',
		title: 'Données sensibles',
		content:
			'<h1>La gestion des données et des API</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '4',
		title: 'Gestion des Exceptions',
		content:
			'<h1>Gérer les Exceptions</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '5',
		title: 'Gestion de la mémoire',
		content:
			'<h1>Gestion de la mémoire</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '6',
		title: 'Gestion des entrées/sorties',
		content:
			'<h1>Gestion des entrées/sorties' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '7',
		title: 'Le Contrôle d\accès',
		content:
			'<h1>Gérer les contrôle d\accès</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '8',
		title: 'La gestion des API dans le groupe',
		content:
			'<h1>Bien comprendre le fonctionnement des API chez Natixis</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '9',
		title: 'Les points à challenger en face d\'une documentation',
		content:
			'<h1>Les points à challenger en face d\'une documentation</h1>' +
			'<br>' +
			'Il est parfois difficile de challenger un document technique d\'une API' +
			'<br><br>' +
			'L\'idée dans cette section va être de voir ce qui est acceptable ou non au sein du groupe</b>.' +
			'Ce qui est interdit dans le groupe est de ne pas utiliser de client secret/client cred [...]' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '10',
		title: 'Résumé des exigences!',
		content:
			'<h1>Cette section va permettre de récapituler toutes les exigences autour des API</h1>' +
			'<br>' +
			"<dl><dt><code>Secret local</code></dt><dd>L’application cliente est munie d’identifiants lui permettant de s’authentifier auprès du serveur OAuth, il ne faut pas mettre ce secret (iden-tifiant du service) dans l’application mobile ou le considérer compromis<br><br></dd><dt><code>Redirect URI</code></dt><dd>Valider strictement les URLs de redirection vers l’application, sans caractère générique (type wildcard)</dd><br><br><dt><code>State and PKCE</code></dt><dd>utiliser ces options du protocole pour garantir l’intégrité d’une cinématique complète</dd></dl>"
	}
];

const driveMgmt = [
	{
		id: '0',
		title: 'Maîtriser les CPN2',
		content:
			'<h1>Step 1 - Introduction</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '1',
		title: 'Get the sample code',
		content:
			'<h1>Step 2 - Get the sample code</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '2',
		title: 'Create a Firebase project and Set up your app',
		content:
			'<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '3',
		title: 'Install the Firebase Command Line Interface',
		content:
			'<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '4',
		title: 'Deploy and run the web app',
		content:
			'<h1>Step 5 - Deploy and run the web app</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '5',
		title: 'The Functions Directory',
		content:
			'<h1>Step 6 - The Functions Directory</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '6',
		title: 'Import the Cloud Functions and Firebase Admin modules',
		content:
			'<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '7',
		title: 'Welcome New Users',
		content:
			'<h1>Step 8 - Welcome New Users</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '8',
		title: 'Images moderation',
		content:
			'<h1>Step 9 - Images moderation</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '9',
		title: 'New Message Notifications',
		content:
			'<h1>Step 10 - New Message Notifications</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '10',
		title: 'Congratulations!',
		content:
			'<h1>Step 11 - Congratulations!</h1>' +
			'<br>' +
			"You've built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!"
	}
];

const mobileSecure = [
	{
		id: '0',
		title: 'Maîtriser les CPN2',
		content:
			'<h1>Step 1 - Introduction</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '1',
		title: 'Get the sample code',
		content:
			'<h1>Step 2 - Get the sample code</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '2',
		title: 'Create a Firebase project and Set up your app',
		content:
			'<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '3',
		title: 'Install the Firebase Command Line Interface',
		content:
			'<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '4',
		title: 'Deploy and run the web app',
		content:
			'<h1>Step 5 - Deploy and run the web app</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '5',
		title: 'The Functions Directory',
		content:
			'<h1>Step 6 - The Functions Directory</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '6',
		title: 'Import the Cloud Functions and Firebase Admin modules',
		content:
			'<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '7',
		title: 'Welcome New Users',
		content:
			'<h1>Step 8 - Welcome New Users</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '8',
		title: 'Images moderation',
		content:
			'<h1>Step 9 - Images moderation</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '9',
		title: 'New Message Notifications',
		content:
			'<h1>Step 10 - New Message Notifications</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '10',
		title: 'Congratulations!',
		content:
			'<h1>Step 11 - Congratulations!</h1>' +
			'<br>' +
			"You've built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!"
	}
];

const academyDB = {
	categories: [
		{
			id: 0,
			value: 'api',
			label: 'API',
			color: blue[500]
		},
		{
			id: 1,
			value: 'drive',
			label: 'Drive',
			color: amber[500]
		},
		{
			id: 2,
			value: 'cloud',
			label: 'Cloud',
			color: blueGrey[500]
		},
		{
			id: 3,
			value: 'mobile',
			label: 'Mobile',
			color: green[500]
		},
		{
			id: 4,
			value: 'web',
			label: 'Web',
			color: blue[500]
		}
	],
	courses: [
		{
			id: '15459251a6d6b397565',
			title: 'La sécurisation des API',
			slug: 'securisation-api',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'api',
			length: 30,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: apiSecure
		},
		{
			id: '154588a0864d2881124',
			title: 'Gérer les CPN2',
			slug: 'cpn2-management',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'drive',
			length: 60,
			totalSteps: 11,
			activeStep: 3,
			updated: 'Nov 01, 2017',
			steps: driveMgmt
		},
		{
			id: '15453ba60d3baa5daaf',
			title: 'Sécuriser les applications mobile',
			slug: 'secure-mobile',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'mobile',
			length: 120,
			totalSteps: 11,
			activeStep: 11,
			updated: 'Jun 28, 2017',
			steps: mobileSecure
		},
	]
};

mock.onGet('/api/academy-app/categories').reply(() => {
	return [200, academyDB.categories];
});

mock.onGet('/api/academy-app/courses').reply(() => {
	return [200, academyDB.courses.map(_course => _.omit(_course, ['steps']))];
});

mock.onGet('/api/academy-app/course').reply(request => {
	const { courseId } = request.params;
	const response = _.find(academyDB.courses, { id: courseId });
	return [200, response];
});

mock.onPost('/api/academy-app/course/save').reply(request => {
	const data = JSON.parse(request.data);
	let course = null;

	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			course = data;
			return course;
		}
		return _course;
	});

	if (!course) {
		course = data;
		academyDB.courses = [...academyDB.courses, course];
	}

	return [200, course];
});

mock.onPost('/api/academy-app/course/update').reply(request => {
	const data = JSON.parse(request.data);
	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			return _.merge(_course, data);
		}
		return _course;
	});

	return [200, data];
});
