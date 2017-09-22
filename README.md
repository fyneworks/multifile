# [jQuery Multiple File Upload](http://www.fyneworks.com/jquery/multifile/)

## Overview

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=fyneworks&url=https://github.com/fyneworks/multifile&title=Multiple+File+Upload&language=&tags=github&category=software)

MultiFile ($.MultiFile) is a non-obtrusive and crucially **non-opinionated** plugin for jQuery that helps your users easily select multiple files for upload.

It helps you implement a basic interface to improve the file selection experience of your users whilst providing you, the developer, with 3 simple methods of validation: accepted extensions, maximum number of files and total size.

---

## Server-Side Implementation

This plugin will never deal with the server-side implementation of your upload solution. This plugin will not upload your files. If that's what you want, we recommend you check them out one of the
[many](http://www.uploadify.com/"),
[many](http://www.plupload.com/")
[many](http://blueimp.github.io/jQuery-File-Upload/") great tools out there which provide a full solution - with image previews, progress bars and extensive support for many environments (`.NET`, `PHP`, `Java`, etc...).

And remember..... **server-side validation is always required**.

---

## Installation

First, get the package

Install with bower: `bower install multifile` or download zip from GitHub <a href="https://github.com/fyneworks/multifile/archive/master.zip"><strong>multifile.zip</strong></a>

Then, invoke the required javascript files to your document, just before the `</html>` tag.

Add [jQuery](https://developers.google.com/speed/libraries/devguide#jquery) to your page. We strongly recommend you make use of Google's Hosted Libraries service.
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
```

Then add the plugin (after jQuery)
```html
<script src="/path/to/plugin/jquery.MultiFile.min.js"></script>
```

**Note** that, before v2.2.2, the file was called `jQuery.MultiFile.min.js` instead (jQuery recommended to use a lowercase ‘q’ in package names).

---

## Recommended Usage (HTML5)

Just add `multiple="multiple"` and `class="multi"` attributes to your `<input type="file"/>`, like this:

```html
<input type="file" multiple="multiple" class="multi"/>
```

Use the `maxlength` property if you want to limit the number of files selected.
<b style="color:red">Server-side validation is always required</b>
```html
<input type="file" multiple="multiple" class="multi" maxlength="2"/>
```

Use the `accept` if you only want files of a certain extension to be selected Separate valid extensions with a "|", like this: "jpg|gif|png".
<b style="color:red">Server-side validation is always required</b>.
```html
<input type="file" multiple="multiple" class="multi" accept="gif|jpg"/>
```

---

## Legacy Usage (pre HTML5)

Versions of HTML and xHTML prior to HTML 5 do not support the `multiple="multiple"` attribute. The plugin will still work in almost the same way, but your users will only be able to **one file at a time**.

```html
<input type="file" class="multi"/>
```

Use the `maxlength` property if you want to limit the number of files selected.
<b style="color:red">Server-side validation is always required</b>
```html
<input type="file" class="multi" maxlength="2"/>
```

Use the `accept` if you only want files of a certain extension to be selected Separate valid extensions with a "|", like this: "jpg|gif|png".
<b style="color:red">Server-side validation is always required</b>.
```html
<input type="file" class="multi" accept="gif|jpg"/>
```

---

## Full Documentation and Demos

For more examples, documentation and a full list of features available, please [visit the plugin's official website](http://www.fyneworks.com/jquery/multifile/).

---

## Continous Integration with Travis CI

[![Master Status](https://travis-ci.org/fyneworks/multifile.svg?branch=master)](https://travis-ci.org/fyneworks/multifile): full build history on [Travis CI]((https://travis-ci.org/fyneworks/multifile))
