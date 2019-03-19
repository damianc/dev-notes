# AJAX Requests

## 1) Expose an URL:

```
wp_localize_script('jquery', 'prfx_ajax', [
	'url' => admin_url('admin-ajax.php')
]);
```

## 2) Perform a request on front-end:

```
$.ajax({
	url: prfx_ajax.url,
	data: {
		action: 'PRFX_ACTION_NAME',
		otherField1: 'otherValue1',
		otherFieldN: 'otherFieldN'
	},
	type: 'POST'
}).done(function (res) {
	if (res == 'OK') {
		// do stuff...
	} else {
		// show error
	}
});
```

## 3) Handle a request on back-end:

```
add_action('wp_ajax_nopriv_PRFX_ACTION_NAME', 'prfx_action_handler');
add_action('wp_ajax_PRFX_ACTION_NAME', 'prfx_action_handler');

function prfx_action_handler() {
	$value1 = $_POST['otherField1'];
	$valueN = $_POST['otherFieldN'];

	// do stuff...

	echo 'OK';
	die();
}
```
