module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: '\n',
			},
			dist: {
	  			src: ['src/banner.scss', 'src/_config.scss', 'src/_media.scss', 'src/helpers/*.scss', 'src/vendor/*.scss'],
	  			dest: 'dist/_include-media.scss',
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);
};