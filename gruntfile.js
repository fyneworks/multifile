module.exports = function(grunt) {
  
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options:{/*outputStyle: 'compressed'*/ /* cssmin will do this for us */},
        files: {'docs.css' : 'docs/docs.scss'}
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
        files: {'docs.css': ["docs.css"]}
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
        files: {"docs.html": ["docs/docs.jade"]}
      }
    },
    
    // ---------------------

    uglify: {
      options: {
        banner: '/* <%= pkg.name %> v<%= pkg.version %> @ <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */',
        compress: true /*{drop_console: true}*/,
        mangle: true /*{except: ['jQuery','fwx']}*/
      },
      production: {
        options: {},
        files: {'jQuery.MultiFile.min.js': 'jQuery.MultiFile.js'}
      }
    },
    
    // ---------------------
    
    shell: {
      beep_twice: {
        command: 'echo  echo ',
        options: {stdout: true}
      }
    },
    
    // ---------------------
    
    gitcommit: {
      task: {
        options: { message: 'Auto commit <%= pkg.name %> v<%= pkg.version %> @ <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %>' },
        files: { src: ['test.txt'] }
      }
    },

    // ---------------------

    watch: {
      options:{
        reload: true
      },
      jade: { files: ['docs/**/*.jade','docs/*.html'], tasks: ['jade','beep'], options: {} },
      scss: { files: ['docs/*.scss'], tasks: ['sass','beep'], options: {} },
      css: { files: ['*.css'], tasks: ['cssmin','beep'], options: {} },
      js: { files: ['jquery.MultiFile.js'], tasks: ['uglify','beep'], options: {} }
    }
  });

  // ---------------------
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('min', ['uglify']);
  grunt.registerTask('css', ['sass','cssmin']);
  grunt.registerTask('doc', ['jade','sass','cssmin']);
  grunt.registerTask('all', ['uglify','jade','sass','cssmin']);
  
  grunt.registerTask('beep', ['shell:beep_twice']);

  // ---------------------
  
  grunt.event.on('watch', function(action, filepath, target) {
    //grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // ---------------------
  
};