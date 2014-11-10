module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        flatten: true,
        assets: './build/assets',
        plugins: ['permalinks'],
        partials: './src/partials/*.hbs',
        layoutdir: './src/layouts',
        layout: ['default.hbs'],
        data: ['./src/data/*.{json,yml}']
      },
      site: {
        src: ['./src/pages/*.{hbs,md}'],
        dest: './build/',
      }
    },
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: './src/assets/css/',
            src: ['*.scss'],
            dest: './build/assets/css/',
            ext: '.css'
          },
          {
            expand: true,
            cwd: './bower_components/font-awesome/scss/',
            src: ['font-awesome.scss'],
            dest: './build/assets/css/',
            ext: '.css'
          }
        ]
      }
    },
    copy: {
      images: {
        files: [
          {expand: true, cwd: './src/assets/', src: './img/**.*', dest: './build/assets/'}
        ]
      },
      'font-awesome': {
        files: [
          {expand: true,
            cwd: './bower_components/font-awesome/fonts/',
            src: '**.*', dest: './build/assets/fonts/'}
        ]
      }
    },
    watch: {
      assemble: {
        files: './src/{data,layouts,pages,partials}/**/*',
        tasks: ['assemble'],
        options: {
          reload: true,
          atBegin: true,
          interrupt: true
        }
      },
      assets: {
        files: './src/assets/img/*.*',
        tasks: ['copy'],
        options: {
          reload: true,
          atBegin: true,
          interrupt: true
        }
      },
      sass: {
        files: './src/assets/css/*.{scss,css}',
        tasks: ['sass'],
        options: {
          reload: true,
          atBegin: true,
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
};
