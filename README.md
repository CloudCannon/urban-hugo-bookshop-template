# Urban  [ LEGACY TEMPLATE NO LONGER MAINTAINED ]

Urban is a Web Agency themed business template for Hugo. Browse through a [live demo](https://gentle-candy.cloudvent.net/). Increase the web presence of your agency with this configurable theme.

![Urban template screenshot](static/images/_screenshot.png)

Urban was made by [CloudCannon](http://cloudcannon.com/), the Cloud CMS for Jekyll and Hugo.
The component library is built and maintained for use with [Bookshop](https://github.com/cloudcannon/bookshop/)

Find more templates, themes and step-by-step Hugo tutorials at [CloudCannon Resources](https://cloudcannon.com/tutorials/).

[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/urban-hugo-bookshop-template)

## Features

* Easy theme switching
* Customisable themes
* Live editing with [CloudCannon](http://cloudcannon.com/)
* Component library for website building
* Dark mode
* Fully configurable Website
* Pre-built pages
* Pre-styled components
* Client Portfolio
* Blog
* Post category pages
* Staff and author system
* Optimised for editing in [CloudCannon](http://cloudcannon.com/)
* RSS/Atom feed
* Search engine optimisation

## Setup

1. Open *Website Settings > General Settings*
2. Add your website name and live domain URL
3. Add an author to the Staff Members collection
4. Build and adjust your website locally, or with live visual editing on [CloudCannon](https://app.cloudcannon.com/)
5. Add any remaining options to *Website Settings > General Settings* if required

## Develop

Urban was built with [Hugo](http://gohugo.io) version 0.111.3, but should support newer versions as well.

Install the dependencies for Bookshop:

~~~bash
$ npm install
~~~

Run the website:

~~~bash
$ npm start
~~~

## Editing

Urban is already optimised for adding, updating and removing pages, and components in CloudCannon.

### Posts

* Add, update or remove a post in the *blog* collection.
* The **Staff Author** field links to members in the **Staff Members** collection.
* Change the defaults when new posts are created in `schemas/blogs/defaults.md`.

## Collections
* When adding or removing collections, update the Explore View options within the `config.yaml` file. For more information see CloudCannon's documentation on [Explore Groups](https://cloudcannon.com/documentation/edit/interfaces/explore/#keyword:_explore).

### Contact Forms

* Preconfigured to work with CloudCannon, but easily changed to another provider (e.g. [FormSpree](https://formspree.io/)).
* Sends email to the address defined within the component.

### Staff

* Reused around the site to save multiple editing locations.

### Navigation

* Managed as a data file to give clients better access.
* Set in the *Website Settings > Navigation* section.

### Footer

* Managed as a data file to give clients better access.
* Set in the *Website Settings > Footer* section.
