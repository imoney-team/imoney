module.exports = function(grunt) {

    // ������������
    grunt.initConfig({
        //��ȡpackage.json�����ݣ��γɸ�json����
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'src',
            //dest: 'dist/<%= pkg.name %>/<%= pkg.version %>',
            dest: 'build',
        },
        //jsѹ��
        uglify: {
            //�ļ�ͷ�������Ϣ
            options: {
                banner: '/**\n * Name: <%= pkg.name %> <%= pkg.version %>\n * Author: <%= pkg.author %>\n * Url: <%= pkg.url%>\n * Time: <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> \n*/\n',
                beautify: {
                    //����ascii�����ǳ����ã���ֹ���������������
                    ascii_only: true
                }
            },

            //������������
            build: {
                files: {
                    '<%= dirs.dest %>/*.js': ['<%= dirs.src %>/imoney.js']
                },
                files: [{
                    expand: true,
                    //Ŀ¼
                    cwd: '<%= dirs.src %>',
                    src: ['*.js', '!*.min.js'],
                    //���Ŀ¼
                    dest: '<%= dirs.dest %>',
                    ext: '.min.js'
                }]
            }
        }

    });

    //������
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //ע������
    //ֻ����������������"grunt"���ͻ�ִ��default task
    grunt.registerTask('default', ['uglify']);
};