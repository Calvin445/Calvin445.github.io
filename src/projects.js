const projects = new Vue({
    el: '#projects',
    data: {
        static: true,
        staticClass: 'project-image',
        animatedClass: 'project-image-animated',
        staticSrc: 'images/sudoku_static.png',
        animatedSrc: 'images/sudoku_test.gif',
    },
    methods: {
        animateImage: function () {
            this.static = false;

        },
        staticImage: function() {
            this.static = true;
        },
    },
    template: 
        `<div class="section" id="projects">
            <h3 class="rR">PROJECTS</h3>
            <div class="project rB">
                <img 
                    v-bind:class="static ? this.staticClass : this.animatedClass" 
                    v-bind:src="static ? this.staticSrc : this.animatedSrc"
                    v-on:mouseover="this.animateImage" v-on:mouseout="this.staticImage"
                >

                <p class="project-description"><strong>SudokuBot</strong> | Java</br></br>
                A robot arm that reads and writes
                solutions to sudoku puzzles using a simple character based OCR on 
                Raspberry Pi.</br></br>I'm currently writing a faster, more
                compact version on my <a class="fancy-link" 
                href="https://github.com/Calvin445/sudoku-bot-2.0">Github</a>.</p> 
            </div>
        </div>`,
})