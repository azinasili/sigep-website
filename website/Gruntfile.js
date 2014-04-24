'use strict';

// Grunt module
module.exports = function (grunt) {

  // load all grunt tasks matching the `grunt-*` pattern
  // https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Set project variables
    // Make file name changes here
    project: {
      src    : 'src',
      app    : 'app',
      deploy : 'deploy',
      srcjs  : '<%= project.src %>/js/{,*/}*.js',
      srccss : '<%= project.src %>/scss/spe.scss',
      appjs  : '<%= project.app %>/js/spe.min.js',
      appcss : '<%= project.app %>/css/spe.min.css',
      vendor : '<%= project.app %>/js/vendor/'
    },

    // Project banner
    // Dynamically appended to CSS/JS files
    // Inherits text from package.json
    tag: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.description %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>.\n' +
              ' */\n'
    },

    // Compile Sass/SCSS files
    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
      dev: {
        options: {
          cacheLocation : '_tmp',
          lineNumbers   : 'true',
          precision     : 10,
          style         : 'expanded'
        },
        files: {
          '<%= project.appcss %>' : '<%= project.srccss %>'
        }
      },
      dist: {
        options: {
          banner        : '<%= tag.banner %>',
          cacheLocation : '_tmp',
          precision     : 10,
          style         : 'compressed'
        },
        files: {
          '<%= project.appcss %>' : '<%= project.srccss %>'
        }
      }
    },

    // Adds vendor prefixes automatically
    // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer: {
      options: {
        browsers: [
          'last 2 version',
          'safari 6',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ]
      },
      dist: {
        src : '<%= project.appcss %>'
      }
    },

    // Build bower components
    // https://github.com/yatskevich/grunt-bower-task
    bower: {
      install: {
        options: {
          targetDir : '<%= project.vendor %>',
          cleanup   : true,
          layout    : 'byType'
        }
      }
    },

    // JSHint
    // https://github.com/gruntjs/grunt-contrib-jshint
    // Manage the options inside .jshintrc file
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      files: '<%= project.srcjs %>/*.js'
    },

    // Concatenate JavaScript files
    // https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      options: {
        banner       : '<%= tag.banner %>',
        stripBanners : true,
        nonull       : true,
      },
      dev: {
        src  : '<%= project.srcjs %>',
        dest : '<%= project.appjs %>'
      }
    },

    // Minify and Uglifies JS
    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      options: {
        mangle           : true,
        compress         : true,
        report           : 'min',
        preserveComments : 'some'
      },
      dev: {
        files: {
          '<%= project.vendor %>/jquery.min.js'    : '<%= project.vendor %>/jquery/jquery.js',
          '<%= project.vendor %>/modernizr.min.js' : '<%= project.vendor %>/modernizr/modernizr.js'
        }
      },
      dist: {
        files: {
          '<%= project.appjs %>' : '<%= project.appjs %>'
        }
      }
    },

    // Compress images
    // https://github.com/gruntjs/grunt-contrib-imagemin
    imagemin: {
      dynamic: {
        files: [{
          expand : true,
          cwd    : '<%= project.app %>/img',
          src    : ['**/*.{png,jpg,gif}'],
          dest   : '<%= project.deploy %>/img'
        }]
      }
    },

    // Clean directories of unneeded folders and files
    // https://github.com/gruntjs/grunt-contrib-clean
    clean: {
      dev: [
        '<%= project.vendor %>/jquery',
        '<%= project.vendor %>/modernizr'
      ],
      dist: [
        '_tmp'
      ]
    },

    // Copy images into app folder
    // Copy app directory into a deploy directory
    // https://github.com/gruntjs/grunt-contrib-copy
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= project.src %>/img',
          src: '**',
          dest: '<%= project.app %>/img/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.app %>',
          src: '**',
          dest: '<%= project.deploy %>/'
        }]
      }
    },

    // Minify HTML
    // https://github.com/gruntjs/grunt-contrib-htmlmin
    htmlmin: {
      dist: {
        options: {
          removeComments            : true,
          collapseWhitespace        : true,
          removeRedundantAttributes : true,
          removeEmptyAttributes     : true
        },
        files: [{
          expand: true,
          cwd: '<%= project.app %>',
          src: '*.html',
          dest: '<%= project.deploy %>'
        }]
      }
    },

    // Runs tasks against changed watched files
    // https://github.com/gruntjs/grunt-contrib-watch
    // Watching development files and run concat/compile tasks
    watch: {
      concat: {
        files : '<%= project.srcjs %>',
        tasks : ['concat', 'jshint']
      },
      sass: {
        files : '<%= project.src %>/scss/{,*/}*.{scss,sass}',
        tasks : ['sass:dev', 'autoprefixer']
      },
      // livereload: {
      //   options: {
      //     livereload: '<%= connect.options.livereload %>'
      //   },
      //   files: [
      //     '<%= project.app %>/{,*/}*.html',
      //     '<%= project.appcss %>',
      //     '<%= project.appjs %>',
      //     '<%= project.app %>/img/{,*/}*'
      //   ]
      // }
    },

    // connect: {
    //   options: {
    //     port: 9000,
    //     open: true,
    //     livereload: 35729,
    //     // Change this to '0.0.0.0' to access the server from outside
    //     hostname: 'localhost'
    //   },
    //   livereload: {
    //     options: {
    //       middleware: function(connect) {
    //         return [
    //           connect.static('.tmp'),
    //           connect().use('/bower_components', connect.static('./bower_components')),
    //           connect.static(config.app)
    //         ];
    //       }
    //     }
    //   },
    //   dist: {
    //     options: {
    //       base: '<%= config.dist %>',
    //       livereload: false
    //     }
    //   }
    // },

  });

  // Default task for development
  // Run `grunt` on the command line
  grunt.registerTask('default', [
    'sass:dev',
    'autoprefixer',
    'bower',
    'jshint',
    'concat',
    'uglify:dev',
    'clean:dev',
    'copy:dev',
    // 'connect',
    'watch'
  ]);

  // Build task for production
  // Run `grunt build` on the command line
  grunt.registerTask('deploy', [
    'sass:dist',
    'bower',
    'jshint',
    'concat',
    'uglify',
    'clean',
    'copy:dist',
    'imagemin',
    'htmlmin'
  ]);

};