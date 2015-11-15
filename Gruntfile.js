module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.initConfig({

        less : {
            default: {
                src: ['less/main.less'],
                dest: 'main.css'
            }
        }

    });


    grunt.task.registerTask('build',
        [
            'less'
        ]
    );
};