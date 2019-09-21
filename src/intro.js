const intro = new Vue({
    el: '#intro',
    data: {
        someHello: () => {
            const hellos = ['Hello', 'Hi', 'Howdy', 'Hey', 'Hiya'];
            return hellos[Math.floor(Math.random() * (hellos.length))];
        },
    },
    template: 
        `<div class="intro-container">
            <div class="intro">
                <div class="title">
                    <h1 class="heading rB">{{ this.someHello() }}! I'm <strong>Calvin Cai</strong>.</h1>
                    <h2 class="subtext rB"> 
                        Third-year student studying computer science and mathematics at <a class="fancy-link" href="https://www.ccis.northeastern.edu/">Northeastern University</a>. 
                        Alto Saxophonist with the <a class="fancy-link" href="https://camd.northeastern.edu/music/making-music/ensembles/wind/">
                        NEU Wind Ensemble</a>. Rock climber, weightlifter.<br> 
                    </h2>
                    <h2 class="subtext cowboy rB"><a class="fancy-link cowboy">Bona-fide computer cowboy</a>.</h2>
                    <p class="emoji">🎷</p>
                    <p class="emoji">💻</p>
                    <p class="emoji">👨‍💻</p>
                    <p class="emoji">🏋️‍♂️</p>
                    <p class="emoji">☕</p>
                    <p class="emoji">👨‍🎓</p>
                    <p class="emoji">✍️</p>
                    <p class="emoji">🧗</p>
                </div>
                
                <ul class="icon-bar rR">
                    <li>
                        <a href="mailto:cai.ca@husky.neu.edu"><img class="icon" src="images/gmail.png"></a>
                        <h6 class="hiddenmsg">Shoot me an email</h6>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/calvin-cai-458a54155/"><img class="icon" src="images/linkedin.png"></a>
                        <h6 class="hiddenmsg">Visit my LinkedIn</h6></li>
                    <li>
                        <a href="https://github.com/Calvin445"><img class="icon" src="images/github.png"></a>
                        <h6 class="hiddenmsg">Check out my Github</h6>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/calvi4455/?hl=en"><img class="icon" src="images/instagram.png"></a>
                        <h6 class="hiddenmsg">Follow my Instagram</h6>
                    </li>
                </ul>
            </div>
        </div>`
})