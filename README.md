#[jQuery Multiple File Upload](http://www.fyneworks.com/jquery/multifile/)

##Overview

This jQuery Multiple File Selection Plugin ($.MultiFile) is a non-obstrusive plugin for jQuery that helps users easily select multiple files for upload quickly and easily on your server whilst also providing some basic validation functionality to help developers idenfity simple errors, without having to submit the form (ie.: upload files).

---

##Installation

Add the required javascript files to your document, just before the `</html>` tag.

Add [jQuery](https://developers.google.com/speed/libraries/devguide#jquery) to your page. We strongly recommend you make use of Google's Hosted Libraries service.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
				type="text/javascript"></script>
```

Then add the plugin (after jQuery)

```html
<script src="/path/to/plugin/jquery.MultiFile.min.js"
				type="text/javascript"></script>
```

---

##Recommended Usage (HTML5)

Just add the `class="multi"` and `multiple="multiple"` attributes to your file input element, like this:

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

##Legacy Usage (pre HTML5)

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
