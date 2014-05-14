'use strict';

// Livereload and connect variables
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

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
      dist   : 'dist',
      srcjs  : '<%= project.src %>/js/{,*/}*.js',
      srccss : '<%= project.src %>/scss/spe.scss',
      appjs  : '<%= project.app %>/js/spe.min.js',
      appcss : '<%= project.app %>/css/spe.min.css',
      vendor : '<%= project.app %>/js/vendor'
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

    // Connect port/livereload
    // Starts a local webserver and injects
    // livereload snippet
    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      options: {
        port: 9000,
        hostname: '*'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [lrSnippet, mountFolder(connect, 'app')];
          }
        }
      }
    },

    // Compile Sass/SCSS files
    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
      dev: {
        options: {
          cacheLocation : '_tmp',
          lineNumbers   : 'true',
          precision     : 10,
          sourcemap     : 'true',
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
          'last 2 Chrome version',
          'Android 4',
          'Firefox > 20',
          'ie 8',
          'ie 9',
          'iOS 5',
          'Opera 12.1',
          'Safari 6'
        ]
      },
      dist: {
        src : '<%= project.appcss %>'
      }
    },

    // Combine like media queries together
    // CMQ is commented out for now
    // Doesn't seem to reduce CSS at all
    // https://github.com/buildingblocks/grunt-combine-media-queries
    cmq: {
      options: {
        log: true
      },
      your_target: {
        files: {
          '<%= project.appcss %>' : '<%= project.appcss %>'
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
        files: {
          '<%= project.appjs %>' : '<%= project.srcjs %>'
        }
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
          '<%= project.vendor %>/jquery.min.js'    : '<%= project.vendor %>/jquery.js',
          '<%= project.vendor %>/modernizr.min.js' : '<%= project.vendor %>/modernizr.js'
        }
      },
      dist: {
        files: {
          '<%= project.appjs %>' : '<%= project.appjs %>'
        }
      }
    },

    // Build bower components
    // https://github.com/yatskevich/grunt-bower
    bower: {
      dev: {
        dest     : '<%= project.app %>/lib',
        js_dest  : '<%= project.app %>/js/vendor',
        css_dest : '<%= project.app %>/css/vendor'
      },
      dist: {
        dest     : '<%= project.app %>/lib',
        js_dest  : '<%= project.app %>/js/vendor',
        css_dest : '<%= project.app %>/css/vendor'
      }
    },

    // Opens the web server in the browser
    // https://github.com/jsoverson/grunt-open
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
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
          dest   : '<%= project.dist %>/img'
        }]
      }
    },

    // Clean directories of unneeded folders and files
    // https://github.com/gruntjs/grunt-contrib-clean
    clean: {
      dev: [
        '<%= project.vendor %>/jquery.js',
        '<%= project.vendor %>/modernizr.js'
      ],
      dist: [
        '_tmp',
        'node_modules'
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
          dest: '<%= project.app %>/img'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.app %>',
          src: '**',
          dest: '<%= project.dist %>'
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
          dest: '<%= project.dist %>'
        }]
      }
    },

    // Runs tasks against changed watched files
    // https://github.com/gruntjs/grunt-contrib-watch
    // Watching development files and run concat/compile tasks
    // Livereload the browser once complete
    watch: {
      concat: {
        files : '<%= project.srcjs %>',
        tasks : ['concat', 'jshint']
      },
      sass: {
        files : '<%= project.src %>/scss/{,*/}*.{scss,sass}',
        tasks : ['sass:dev', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= project.app %>/{,*/}*.html',
          '<%= project.appcss %>',
          '<%= project.appjs %>',
          '<%= project.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    }

  });

  // Default task for development
  // Run `grunt` on the command line
  grunt.registerTask('default', [
    'sass:dev',
    'autoprefixer',
    // 'cmq',
    'bower',
    'jshint',
    'concat',
    'uglify',
    'copy:dev',
    'clean:dev',
    'connect:livereload',
    'open',
    'watch'
  ]);

  // Build task for production
  // Run `grunt build` on the command line
  grunt.registerTask('deploy', [
    'sass:dist',
    'autoprefixer',
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