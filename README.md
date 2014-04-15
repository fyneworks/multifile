#[jQuery Multiple File Upload](http://www.fyneworks.com/jquery/multifile/)

##Overview
This jQuery Multiple File Selection Plugin ($.MultiFile) is a non-obstrusive plugin for jQuery that helps users easily select multiple files for upload quickly and easily on your server whilst also providing some basic validation functionality to help developers idenfity simple errors, without having to submit the form (ie.: upload files).

---

##Installation
Add the required javascript files to your document, just before the `</html>` tag.

First, add the latest version of [jQuery](https://developers.google.com/speed/libraries/devguide#jquery)

```html
<script src="http://code.jquery.com/jquery-latest.min.js"
				type="text/javascript"></script>
```

Then add the plugin (after jQuery)

```html
<script src="/path/to/plugin/jquery.MultiFile.min.js"
				type="text/javascript"></script>
```

---

##Basic Usage

Just add the `class="multi"` to your file input element:
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
