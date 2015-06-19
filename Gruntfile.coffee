###
# @desc
# The Gruntfile responsible for running all the automation
#
# @author
# Navi
###

module.exports = ( grunt ) ->

	"use strict"

	# Load all grunt plugins:
	grunt.loadNpmTasks "grunt-contrib-coffee"
	grunt.loadNpmTasks "grunt-contrib-uglify"

	# Config storing path information:
	pathConfig =
		src:  "src"
		dist: "dist"

	# Customize tasks:
	grunt.initConfig

		# Store the `package.json` file in a nifty variable:
		pkg: grunt.file.readJSON "package.json"

		# Set the path config:
		path: pathConfig

		# Coffee @task
		coffee:
			options:
				bare: true
				sourceMap: false
			badger:
				files:
					"<%= path.dist %>/jquery-badger.js": [ "<%= path.src %>/jquery-badger.coffee" ]

		# Uglify @task
		uglify:
			options:
				beautify: false
				preserveComments: false
				report: "min"
				banner: """
					/*!
					 * Badger
					 * ------
					 * @ver <%= pkg.version %>
					 * @desc <%= pkg.description %>
					 * @dependencies jQuery
					 * @author <%= pkg.author %>
					 */
					"""
			dist:
				files:
					"<%= path.dist %>/jquery-badger.min.js": [ "<%= path.dist %>/jquery-badger.js" ]

	# Register custom tasks:
	grunt.registerTask "default", "Sets up the development environment", [
		"coffee"
	]

	grunt.registerTask "dist", "Cooks up the production assets", [
		"coffee"
		"uglify"
	]

	return