import * as React from 'react'
import './about.scss'

const About = () => {
    return (
        <div className="about">
            <section>
                <h1>Pattison Ho</h1>
                <h3>
                    Front-end developer with deep design know-how and
                    visualization techniques.
                </h3>
            </section>

            <section>
                <h1 className="first-title" id="profile">
                    Profile
                </h1>
                <h3 className="subtitle">Language: </h3>
                <ul>
                    <li>Chinese: Native speaker</li>
                    <li>English: Communication level</li>
                </ul>

                <ul>
                    <li>
                        E-mail:
                        <a href="mailto:yapi.tw@gmail.com" target="_blank">
                            yapi.tw@gmail.com
                        </a>
                    </li>
                    <li>Mobile SG: +65-8249-1912</li>
                    <li>Mobile TW: +886-920-774-720</li>
                </ul>

                <h3 className="subtitle">Web accounts</h3>
                <ul>
                    <li>
                        GitHub:{' '}
                        <a href="https://github.com/yapitw/" target="_blank">
                            https://github.com/yapitw/
                        </a>
                    </li>
                    <li>
                        CodePen:{' '}
                        <a href="https://codepen.io/yapi/" target="_blank">
                            https://codepen.io/yapi/
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <div className="block">
                    <h1 className="first-title">Core skills</h1>
                    <h3 className="subtitle">Front-end Development</h3>
                    <ul>
                        <li>
                            Construct npm environment for frontend projects.
                        </li>
                        <li>
                            Usage of web APIs and services including AWS, FB SDK
                            and GCP ...etc.
                        </li>
                        <li>
                            Well and smooth communication with designer and
                            product manager.
                        </li>
                        <li>Back-end development (Node.js).</li>
                        <li>3D Computer graphics fundamental.</li>
                    </ul>
                    <h3 className="subtitle">Graphics</h3>
                    <ul>
                        <li>3D progressive modeling, 3D sculpting.</li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="block">
                    <h1 className="first-title">Tools I use</h1>
                    <div style={{ columnCount: 2, columnGap: '2rem' }}>
                        <section>
                            <h3 className="subtitle">Javascript:</h3>
                            <p>
                                Vanilla JS, ES6, TypeScript, node.js and npm,
                                HTML5 Canvas API
                            </p>
                        </section>
                        <section>
                            <h3 className="subtitle">
                                JS frameworks / libraries
                            </h3>
                            <p>
                                React, Vue, Webpack, Gulp, Three.js, P5.js,
                                D3.js, Express, Jest, React Testing Library,
                                emscripten
                            </p>
                        </section>
                        <section>
                            <h3 className="subtitle">HTML</h3>
                            <p>PUG template, SVG graphics</p>
                        </section>
                        <section>
                            <h3 className="subtitle">CSS</h3>
                            <p>
                                SCSS pre-processing, BEM naming style,
                                Functional CSS
                            </p>
                        </section>
                        <section>
                            <h3 className="subtitle">SCM</h3>
                            <p>Git</p>
                        </section>
                        <section>
                            <h3 className="subtitle">Other Languages</h3>
                            <p>In touch with python, C, C++, GLSL</p>
                        </section>
                        <section>
                            <h3 className="subtitle">3D Graphics</h3>
                            <p>
                                Blender, Rhinoceros with Grasshopper, ZBrush,
                                Houdini
                            </p>
                        </section>
                        <section>
                            <h3 className="subtitle">2D Graphics</h3>
                            <p>Photoshop, Illustrator</p>
                        </section>
                    </div>
                </div>
            </section>

            <section>
                <div className="block">
                    <h1>Career Summary</h1>
                    <h3 className="subtitle">
                        Orion Consultancy as Web Developer - since 2018 May - 1
                        year 4 months
                    </h3>
                    <ul>
                        <li>Responsibility:</li>
                        <li>
                            Develop frontend projects User Interface with React.
                        </li>
                        <li>
                            Fix and Maintain backend User Interface with React
                            TypeScript.
                        </li>
                        <li>
                            Migrate old projects into newer technology for
                            better maintenance.
                        </li>
                        <li>Apply requirements and slice web pages.</li>
                    </ul>
                    <h3 className="subtitle">
                        18Design Co., Ltd. as Web Front-end Developer - since
                        2017, 1 year
                    </h3>
                    <ul>
                        <li>Responsibility:</li>
                        <li>
                            Explore and discuss solution with multiple parties
                            (PM, designer, backend Dev.) for ensuring projects
                            executed well.
                        </li>
                        <li>
                            Explore social media APIs and use it in projects.
                        </li>
                        <li>
                            Make applications run well in pc and mobile
                            platforms.
                        </li>
                        <li>
                            Front-end development. Coding HTML CSS Javascript.
                        </li>
                        <li>PUG, SASS preprocessor coding.</li>
                        <li>Script CSS, SVG animation.</li>
                        <li>Version control by TortoiseHG.</li>
                    </ul>
                    <h3 className="subtitle">
                        trii collection SOHO studio as Founder - 2014~2016, 3
                        years
                    </h3>
                    <ul>
                        <li>Responsibility:</li>
                        <li>
                            One of founders. Designed road map with other
                            founders.
                        </li>
                        <li>Surveyed 3D printing techniques.</li>
                        <li>Designer - design accessories.</li>
                        <li>Modeler - Progressive 3D model design.</li>
                        <li>Manipulation of 3D printing process.</li>
                        <li>Contracted products development.</li>
                        <li>
                            Web page building - HTML, CSS, Javascript, JQuery
                        </li>
                    </ul>
                    <h3 className="subtitle">
                        Aye-star Co., Ltd. as Special Assistant - 2010~2015, 5
                        years
                    </h3>
                    <ul>
                        <li>Responsibility:</li>
                        <li>
                            Engaged in production development and solution
                            discussion.
                        </li>
                        <li>
                            End-to-end order management, from component to final
                            product.
                        </li>
                        <li>
                            Key officer translating customer in to feasible
                            production process.
                        </li>
                        <li>Quality control tour with customer.</li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="block">
                    <h1 className="first-title" id="education">
                        Education
                    </h1>
                    <h3 className="subtitle">
                        Industrial Design Bachelor degree
                    </h3>
                    <ul>
                        <li>National Taipei University of Technology.</li>
                    </ul>
                    <h3 className="subtitle">
                        Advanced Javascript front-end engineering course
                    </h3>
                    <ul>
                        <li>
                            Information System Training Program from National
                            Taiwan University.
                        </li>
                    </ul>
                    <h3 className="subtitle">Self learning</h3>
                    <ul>
                        <li>
                            Learning front-end programming skills and 3D
                            softwares from several online sources like Udemy,
                            Udacity, Codecademy, Hahow, Hiskio, Youtube ...ETC.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default About
