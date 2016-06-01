require('../angular-component-tasks/')(require('gulp'), {
    // Config Object
    dest: 'dist',
    index: 'demo/index.html',
    scripts: {
        export: 'component.js',
        files: [
            'src/*.js',
            'src/**/*module.js',
            'src/**/*.service.js',
            'src/**/*.component.js',
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
    copy: {
        files: [
            'src/*.html',
            'src/**/*.html'
        ],
        dest: 'dist'
    }
});