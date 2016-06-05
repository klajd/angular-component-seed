require('../angular-component-tasks/')(require('gulp'), {
    // Config Object
    dest: 'dist',
    copyright: "/*! */",
    index: 'demo/index.html',
    module: 'component.seed',
    scripts: {
        export: 'component.js',
        files: [
            'src/*[Mm]odule.js',
            'src/*[Cc]onfig.js',
            'src/*[Ss]ervice.js',
            'src/*[Ff]actory.js',
            'src/*[Dd]irectory.js',
            'src/*[Cc]omponent.js',
            'src/*.js',
            'src/**/*[Mm]odule.js',
            'src/**/*[Cc]onfig.js',
            'src/**/*[Ss]ervice.js',
            'src/**/*[Ff]actory.js',
            'src/**/*[Dd]irectory.js',
            'src/**/*[Cc]omponent.js',
            'src/**/*.js'
        ],
        dest: 'dist'
    },
    styles: {
        export: 'component.css',
        files: [
            'src/*.css',
            'src/**/*.css'
        ],
        dest: 'dist'
    },
    templates: {
        files: [
            'src/*.html',
            'src/**/*.html'
        ],
        dest: 'dist'
    },
    copy: {
        files: [
            'src/*.html',
            'src/**/*.html'
        ],
        dest: 'dist'
    }
});