module.exports = function (grunt) {

    // Configuration goes here

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    //compass: true
                },
                files: {
                    'assets/css/main.css' : 'assets/scss/main.scss',
                    'assets/css/materialize.css' : 'assets/scss/materialize/materialize.scss'
                }
            }
        },

        watch: {

            css: {
                options: {
                    terminate: true
                },
                files: [
                    'assets/scss/**/*.scss',
                    'assets/scss/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            }
        }
    });


    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks("grunt-spritesmith");

    // Run default tasks
    grunt.registerTask('default', ['sass', 'watch']);
    grunt.registerTask('make', ['sass']);
};
