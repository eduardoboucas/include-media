module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
      },
    
      single_file: {
        options: {
        },
        src: 'css/main.css',
        dest: 'css/main.css'
      },
    },

    watch: {
      css: {
        files: 'sass/*.sass',
        tasks: ['default']
      },
    },            
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'autoprefixer']); 
};