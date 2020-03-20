module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			css: {
				src: './css/main.css',
				dest: './css/main.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['cssmin']);
}