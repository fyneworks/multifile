module.exports = function(grunt) {
  
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options:{
          //outputStyle: 'compressed'
        },
        files: {
          'docs.css' : 'docs/docs.scss'
        }
      },
    },
    
    // ---------------------

    cssmin: {
      minify: {
        options: {
          expand: false,
          processImport: true,
          banner: '/* <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */',
        },
        files: {
          'docs.css': ["docs.css"]
        }
      }
    },
    
    // ---------------------

    jade: {
      release: {
        options: {
          data: {
            debug: false,
            timestamp: "<%= new Date().getTime() %>"
          }
        },
        files: {
          "docs.html": ["docs/docs.jade"]
        }
      }
    },
    
    // ---------------------

    uglify: {
      options: {
        banner: '/* <%= pkg.name %> v<%= pkg.version %> @ <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */',
        compress: true /*{drop_console: true}*/,
        mangle: true /*{except: ['jQuery','fwx']}*/
      },
      my_target: {
        options: {},
        files: {
          'jQuery.MultiFile.min.js': 'jQuery.MultiFile.js'
        }
      }
    },
    
    // ---------------------

    watch: {
      jade: { files: ['docs/*.jade','docs/*.html'], tasks: ['jade'], options: {} },
      scss: { files: ['docs/*.scss'], tasks: ['sass'], options: {} },
      css: { files: ['*.css'], tasks: ['cssmin'], options: {} },
      js: { files: ['jquery.MultiFile.js'], tasks: ['uglify'], options: {} }
    }
  });

  // ---------------------
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('min', ['uglify']);
  grunt.registerTask('css', ['sass','cssmin']);
  grunt.registerTask('doc', ['jade','sass','cssmin']);
  grunt.registerTask('all', ['uglify','jade','sass','cssmin']);

  // ---------------------
  
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // ---------------------
  
};