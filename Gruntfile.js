module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: '\n',
			},
			dist: {
	  			src: ['src/banner.md', 'src/_config.scss', 'src/_media.scss', 'src/helpers/*.scss', 'src/vendor/*.scss'],
	  			dest: 'dist/_import-media.scss',
			},
		},

		watch: {
			stylesheets: {
				files: ['src/**/*.css', 'src/**/*.less'],
				tasks: ['less', 'cssmin']
			},
			scripts: {
				files: 'src/**/*.js',
				tasks: ['jshint', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);
};