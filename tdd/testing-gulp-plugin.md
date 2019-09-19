# Testing Gulp Plugin

## `main.spec.js` [e.g.]

```
var should = require('should');
var fs = require('fs');
var es = require('event-stream');
var myPlugin = require('../src/my-plugin');

var {spawn} = require('child_process');
var spawnCommonOpts = {
	stdio: 'inherit',
	shell: true,
	cwd: 'test/'
};

function fileTester(expectedFileName, producedFileName, done) {
	var filesContent = {};
	var expectedFile = fs.readFile(expectedFileName, 'utf8', compare.bind({which: 'expected'}));
	var producedFile = fs.readFile(producedFileName, 'utf8', compare.bind({which: 'produced'}));

	function compare(err, data) {
		if (err) throw err;
		filesContent[this.which] = data.trim();

		let expectedContent, producedContent;
		if ((expectedContent = filesContent.expected) && (producedContent = filesContent.produced)) {
			expectedContent.should.be.equal(producedContent);
			done();
		}
	}
}

describe('# My Gulp Plugin', function () {
	before(function (done) {
		var child = spawn('gulp', ['myplugin:build'], spawnCommonOpts);
		child.on('close', () => done());
	});

	after(function (done) {
		var child = spawn('gulp', ['clean'], spawnCommonOpts);
		child.on('close', () => done());
	});

	var externalFiles = fs.readdirSync('test/expected-output');
	externalFiles.forEach(function (externalFile) {
		(function (file) {
			var assertionDescription = `should process ${file} file`;
			it(assertionDescription, function (done) {
				fileTester(`test/expected-output/${file}`, `test/produced-output/${file}`, done);
			});
		})(externalFile);
	});
});
```

## `gulpfile.js`

```
var gulp = require('gulp');
var clean = require('gulp-clean');
var myPlugin = require('../src/my-plugin');

gulp.task('clean', function () {
	return gulp.src('produced-output', {read: false})
	    .pipe(clean({force: true}));
});

gulp.task('myplugin:build', function () {
	return gulp.src('given-input/*.js')
	    .pipe(myPlugin())
	    .pipe(gulp.dest('produced-output'));
});
```

## Assumed Directories

```
src/
  |-------- my-plugin.js
test/
  |-------- main.spec.js
  |-------- gulpfile.js
  |-------- given-input/          <- example input scripts
  |-------- produced-output/      <- the example scripts processed with the plugin
  |-------- expected-output/      <- output the plugin should produce
```
