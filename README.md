# Hugo Piercer Theme

Piercer is a very customizable, fast and simple Hugo theme designed under the mobile-first philosophy.

## Dracula

Piercer's default color palette is based on the Dracula theme. You can see more of it [here](https://draculatheme.com/).

## Features

Some of the basic features of Piercer are:

* Highly customizable (color palette, font size, font family and more).
* Hamburger menu without JavaScript.
* Great SEO by default.
* Mobile-first philosophy.
* Fast.

Some of the things that are not planned to add are:
* Dropdown menus.

## Installation
To install Piercer run the following commands inside your Hugo site:

```bash
cd themes
git clone https://github.com/danielkvist/hugo-piercer-theme.git piercer
```

Or if you prefer Git submodules:

```bash
cd themes
git submodule add https://github.com/danielkvist/hugo-piercer-theme.git piercer
```

Then, add on your ```config.toml``` file:

```toml
theme = "piercer"
```

## Configuration

> You can find an example of the final configuration [here](https://github.com/danielkvist/hugo-piercer-theme/blob/master/exampleSite/config.toml).

### Basic

```toml
baseurl = "/"                   # The base URL of your Hugo site
title = "titlehere"             # The title of your Hugo site
author = "authorhere"           # The author name
googleAnalytics = ""            # Your Google Analytics tracking ID
defaultContentLanguage = "en"   
language = "en-US"
paginate = 7                    # The numbers of posts per page
theme = "piercer"               # Your Hugo theme
```

There's a lot more information about the basic configuration of an Hugo site [here](https://gohugo.io/getting-started/configuration/).

### Privacy

```toml
[privacy]
    [privacy.googleAnalytics]
        anonymizeIP = true
        disable = false
        respectDoNotTrack = true
        useSessionStorage = false
    [privacy.instagram]
        disable = false
        simple = false
    [privacy.twitter]
        disable = false
        enableDNT = true
        simple = false
    [privacy.vimeo]
        disable = false
        simple = false
    [privacy.youtube]
        disable = false
        privacyEnhanced = true
```

To learn more about privacy configuration check the [official documentation](https://gohugo.io/about/hugo-and-gdpr/).

### Description, favicon and logo params

```toml
description = "" # Description for the meta description tag
favicon = ""     # Relative URL for your favicon
logo = ""        # Relative URL for your logo
```

### Color palette and font sizes

```toml
[params.palette]
    text = "#fdfdfd"
    background = "#282a36"
    accent = "#44475a"
    foreground = "#f8f8f2"
    separator = "#6272a4"
    cyan = "#8be9fd"
    green = "#50fa7b"
    orange = "#ffb86c"
    pink = "#ff79c6"
    purple = "#bd93f9"
    red = "#ff5555"
    yellow = "#f1fa8c"

[params.fontsizes]
    base = "1em"
    p = "1.25em"
    h4 = "1.563em"
    h3 = "1.953em"
    h2 = "2.441em"
    h1 = "3.052em"
```

> You can change any of the above values as you like.

### Google Fonts

```toml
[params.googlefonts]
    font = ""   # Name of the Google Font you want to use
```

### Header

```toml
[params.header]
    show = true # You can hide the header if you want
```

### CTA

```toml
[params.cta]
    show = true
    message = ""
    link = ""
```

### Font Awesome

```toml
[params.fa]
    version = ""    # Font Awesome version
    integrity = ""  # Font Awesome integrity for the Font Awesome script
```

### Contact form

```toml
[params.form]
    show = true
    netlify = false         # Only set to true if you are using Netlify to deploy your site
    action = ""
    method = "POST"
    section = "Contact me!" # Title of the section
    inputNameName = "Name"
    inputNameLabel = "Your Name"
    inputNamePlaceholder = "Your Name"
    inputEmailName = "Email"
    inputEmailLabel = "Your Email"
    inputEmailPlaceholder = "Your Email"
    SubmitValue = ""        # Let empty to default icon
```

### Contact info

```toml
[params.contact]
    show = true
    email = ""
    phone = ""
    skype = ""
    address = ""
```

### Date format on posts

```toml
[params.date]
    format = ""
```

### Social networks

```toml
[params.social]
    twitter = ""
    facebook = ""
    github = ""
    gitlab = ""
    codepen = ""
    instagram = ""
    pinterest = ""
    youtube = ""
    linkedin = ""
    weibo = ""
    mastodon = ""
    tumblr = ""
    flickr = ""
    "500px" = ""
```

> icons for social networks depend on Font Awesome.

### Copyright message

```toml
[params.copy]
    message = ""
```

### Agreements

```toml
[params.agreement]
    message = ""    # You can use HTML tags
```

## Archetypes

Piercer includes three archetypes:

* The ```default``` archetype for single pages which you can see [here](https://github.com/danielkvist/hugo-piercer-theme/blob/master/archetypes/default.md).
* The ```post``` archetype for posts which you can see [here](https://github.com/danielkvist/hugo-piercer-theme/blob/master/archetypes/post.md).
* The ```section``` archetype for the home page sections which you can see [here](https://github.com/danielkvist/hugo-piercer-theme/blob/master/archetypes/section.md).

## Home

The [Front Matter](https://gohugo.io/content-management/front-matter/) of you index page should look like this:

```markdown
---
title: "Home"
description: ""
images: []
draft: false
menu: main
weight: 1
---

# Your title
A simple description.
```

As you can see, you can add a background image with the ```images``` param to the hero of your Home page. Which will also display the content of your file. And the CTA if you have specified so. [Here is an example](https://github.com/danielkvist/hugo-piercer-theme/blob/master/exampleSite/content/_index.md).

## Home sections
To add sections to your Home page use the ```section``` archetype.

```md
---
title: "Dracula"
draft: false
weight: 1
images: []
borderColor: "yellow"
---

Content
```

You can specify the order of the sections as the color of the bottom border (the value needs to be one of the variables defined in the main configuration file, for example "yellow" or "green"). [Here is an example](https://github.com/danielkvist/hugo-piercer-theme/blob/master/exampleSite/content/sections/dracula.md).

## Single pages

The Front Matter of your single pages should look like this:

```markdown
---
title: "About"
description: ""
draft: false
images: []
menu: main
weight: 2
---

Content
```

If you specify a background image, the height of the header will increase. [Here is an example](https://github.com/danielkvist/hugo-piercer-theme/blob/master/exampleSite/content/about.md).

In the case of the Single pages the description is used as a subtitle.

## List pages

The Front Matter of your list pages should look like this:

```markdown
---
title: "Blog"
description: ""
draft: false
images: []
menu: main
weight: 3
---
```

[Here is an example](https://github.com/danielkvist/hugo-piercer-theme/blob/master/exampleSite/content/blog/_index.md).

In the case of list pages the entries will be displayed in cards with the title, the author (if any), the date of publication (also if any), a description (again if any) and a list of tags (if any).

## Posts

The Front Matter of your posts should look like this:

```markdown
---
title: ""
description: ""
date: date
publishDate: publishDate
author: ""
draft: true
images: []
tags: []
---
```

[Here is an example](https://github.com/danielkvist/hugo-piercer-theme/blob/master/exampleSite/content/blog/emojis.md).