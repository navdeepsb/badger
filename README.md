Badger
======

Badger ( or BadgerJS ) is a highly customizable notification library for webpages. It has a sole dependency on [jQuery](https://jquery.com/ "jQuery") at the present.

Badger is used to pop out a notification text in the form of a slick card on the top of the webpage to "badger" the user. This Badger stays for a while before dismissing itself ( [configurable](#configure-badger "Configuring Badger") behaviour ) or it can be forced to go away before the "stay" time by simply tapping on it.

Success Badger:

![Success Badger](demo/img/badger-success.png)

Error Badger:

![Error Badger](demo/img/badger-error.png)

Warn Badger:

![Warn Badger](demo/img/badger-warn.png)

Of course, you can [change the appearance](#custom-badger "Example of customized Badger") of all the types of Badgers.

## Usage ##
__Step 1.)__ Import `jQuery` and `Badger` in your webpage:
```js
<script src="path/to/jquery.min.js"></script>
<script src="path/to/badger.min.js"></script>
```

__Step 2.)__ Create a Badger instance:
```js
// Instanciate:
var badger = Badger();

// Config ( optional ):
var config = {...};

// Initialize current instance:
badger.init( config );
```

__Step 3.)__ Show the Badger in the way you want:
```js
// A success Badger:
badger.show( "Peekaboo!", "success" );

// An error Badger:
badger.show( "Wrong glass, sir!", "error" );

// An error Badger with a stay time of 10 seconds:
badger.show( "Take some time to read this!", "error", { stayTime : 10 } )

// and so on...
```


## APIs ##
Below are all the public APIs:

#### `init()` ####
This API is used to initialize the current instance of Badger

Arguments:

1. config - type `object` optional `yes`

Examples:
```js
// 1) With a configuration object as an argument:
badger.init( { width: 280, persist: true } );

// 2) Without any argument ( default behaviour ):
badger.init();
```

#### `show()` ####
This API is used to show the Badger

Arguments:

1. message - type `string` optional `no`
2. badgerType - type `string` optional `yes` values `"success" or "error" or "warn"`
3. runTimeConfig - type `object` optional `yes`

Examples:
```js
// A success Badger:
badger.show( "Payment successful!", "success" );
// or
badger.show( "Payment successful!" );

// Passing a run time config that is only applied to this Badger:
badger.show( "Payment successful!", { stayTime : 10 } );

// Showing a warning Badger:
badger.show( "Payment successful!", "warn", { stayTime : 10 } );
```


## <a name="configure-badger"></a> Configuring Badger ##
Below are all the options that can be passed in the configuration hash:

##### stayTime ####
Type: `number`
Default: `3`

The time taken ( in `seconds` ) for the Badger to stay before going away

##### width ####
Type: `number`
Default: `300`

The width of the Badger ( in `px` )

##### persist ####
Type: `boolean`
Default: `false`

Whether the Badger is required to stay infinitely or not. The value of `stayTime` doesn't take effect if this options is set to `true`.

##### showIcon ####
Type: `boolean`
Default: `true`

Whether to show an icon related to the Badger type or not

##### fontSize ####
Type: `string`
Default: `"1em"`

The font size for the text to be displayed in the Badger

##### borderRadius ####
Type: `string`
Default: `"0"`

The border radius of the Badger ( either in `px` or in `%` )

##### theme ####
Type: `object`
Default:
```json
{
	"success": {
		"color"       : "#ffffff",
		"background"  : "#60bf16",
		"borderColor" : "#55a813"
	},
	"warn": {
		"color"       : "#ffffff",
		"background"  : "#fe7d00",
		"borderColor" : "#e57000"
	},
	"error": {
		"color"       : "#ffffff",
		"background"  : "#e31b30",
		"borderColor" : "#cc182b"
	},
	"fallback": {
		"color"       : "#ffffff",
		"background"  : "#333333",
		"borderColor" : "#262626"
	}
}
```

The appearance of all types of Badgers. All or some properties can be modified by following the same nesting.


## <a name="custom-badger"></a> Example of customized Badger ##
Initialization:
```js
var customBadger = Badger();

customBadger.init({
	borderRadius: 40,
	theme: {
		success: {
			background  : '#aee239',
			borderColor : '#a9e02d'
		},
		warn: {
			background  : '#ff9c5b',
			borderColor : '#ff9651'
		},
		error: {
			background  : '#FF6B6B',
			borderColor : '#ff6060'
		}
	}
});
```

Usage and results:
```js
customBadger.show( "Login successful" );
```
![Custom success Badger](demo/img/badger-custom-success.png)

```js
customBadger.show( "Wrong credentials", "error" );
```
![Custom error Badger](demo/img/badger-custom-error.png)

```js
customBadger.show( "Invalid email address", "warn" );
```
![Custom warn Badger](demo/img/badger-custom-warn.png)


## Who's using Badger ##
- [merainstitute.com](http://www.merainstitute.com/login)

Are you using Badger too? Contact me and I'll list your website here.


## Release history ##
- `2015-Jun-19` __v1.0.0__ Initial release


## Author ##
[Navdeep Singh Bagga](mailto:navdeepb3191@gmail.com "Navi")