/* =========================
   ELEMENTOS GENERALES
========================= */

const menuIcon =
    document.querySelector('#menu-icon');

const navbar =
    document.querySelector('.navbar');

const sections =
    document.querySelectorAll('section');

const navLinks =
    document.querySelectorAll('.navbar a');

const header =
    document.querySelector('.header');



/* =========================
   MENÚ MÓVIL
========================= */

menuIcon?.addEventListener(
    'click',
    () => {

        menuIcon.classList.toggle(
            'bx-x'
        );

        navbar?.classList.toggle(
            'active'
        );

    }
);



/* =========================
   NAV ACTIVO + HEADER
========================= */

window.addEventListener(
    'scroll',
    () => {

        let currentSection = '';


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            'id'
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    'active'
                );


                if (
                    link.getAttribute(
                        'href'
                    ) ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        'active'
                    );

                }

            }
        );


        header?.classList.toggle(
            'sticky',
            window.scrollY > 30
        );


        menuIcon?.classList.remove(
            'bx-x'
        );


        navbar?.classList.remove(
            'active'
        );

    }
);



/* =========================
   AÑO FOOTER
========================= */

const year =
    document.querySelector(
        '#year'
    );


if (year) {

    year.textContent =
        new Date()
            .getFullYear();

}



/* =========================
   LIGHT / DARK MODE
========================= */

const themeToggle =
    document.querySelector(
        '#theme-toggle'
    );


const themeIcon =
    document.querySelector(
        '#theme-icon'
    );


const savedTheme =
    localStorage.getItem(
        'theme'
    );


if (
    savedTheme ===
    'light'
) {

    document.body
        .classList
        .add(
            'light-mode'
        );


    themeIcon
        ?.classList
        .remove(
            'fa-moon'
        );


    themeIcon
        ?.classList
        .add(
            'fa-sun'
        );

}



themeToggle
    ?.addEventListener(
        'click',
        () => {

            document.body
                .classList
                .toggle(
                    'light-mode'
                );


            const isLightMode =
                document.body
                    .classList
                    .contains(
                        'light-mode'
                    );


            if (
                isLightMode
            ) {

                themeIcon
                    ?.classList
                    .remove(
                        'fa-moon'
                    );


                themeIcon
                    ?.classList
                    .add(
                        'fa-sun'
                    );


                localStorage.setItem(
                    'theme',
                    'light'
                );

            } else {

                themeIcon
                    ?.classList
                    .remove(
                        'fa-sun'
                    );


                themeIcon
                    ?.classList
                    .add(
                        'fa-moon'
                    );


                localStorage.setItem(
                    'theme',
                    'dark'
                );

            }

        }
    );




const projects = [

    /* =========================
       SIMUVERSE LAB
    ========================== */

    {
        name:
            'SimuVerse LAB',

        type:
            'Plataforma Educativa',

        image:
            'images/projects/simuverse.png',

        alt:
            'Mockup de SimuVerse LAB',

        description:
            `Plataforma educativa de gestión web y simulación
            en realidad virtual orientada al aprendizaje práctico.
            Permite almacenar y gestionar información de forma
            eficiente para facilitar su consulta y seguimiento.`,

        technologies: [
            'ASP.NET Core API',
            'Angular',
            'Tailwind CSS',
            'SQL Server'
        ],

        github:
            'https://github.com/Adhoper/SimuVerseLab-FRONT'
    },


    /* =========================
       SCANLINE
    ========================== */

    {
        name:
            'ScanLine',

        type:
            'Aplicación Móvil',

        image:
            'images/projects/scanline.png',

        alt:
            'Mockup de ScanLine',

        description:
            `ScanLine es una aplicación móvil para digitalizar
            documentos de forma rápida y sencilla. Permite escanear
            con la cámara, recortar, aplicar filtros, reconocer texto
            y guardar los resultados como imagen o PDF. También incluye
            gestión local de documentos y una interfaz adaptable a
            distintos tamaños de pantalla.`,

        technologies: [
            'Flutter',
            'Dart'
        ],

        github:
            'https://github.com/Keithy-Vilorio-Paula/ScanLine'
    }

];



/* =========================
   ELEMENTOS DEL CARRUSEL
========================= */

const projectsCarousel =
    document.querySelector(
        '.projects-carousel'
    );


const projectsTrack =
    document.querySelector(
        '#projectsTrack'
    );


const prevProjectButton =
    document.querySelector(
        '.project-arrow-prev'
    );


const nextProjectButton =
    document.querySelector(
        '.project-arrow-next'
    );


const projectDotsContainer =
    document.querySelector(
        '.project-dots'
    );


let projectSlides = [];

let currentProject = 0;

let touchStartX = 0;

let touchEndX = 0;



/* =========================
   CREAR TECNOLOGÍAS
========================= */

function createTechnologies(
    technologies
) {

    return technologies
        .map(
            technology => {

                return `
                    <span>
                        ${technology}
                    </span>
                `;

            }
        )
        .join('');

}



/* =========================
   CREAR CARD DE PROYECTO
========================= */

function createProjectCard(
    project
) {

    return `

        <article
            class="project-card project-slide"
        >

            <!-- =========================
                 IMAGEN DEL PROYECTO
            ========================== -->

            <div class="project-visual">

                <div class="project-image-preview">

                    <img
                        src="${project.image}"
                        alt="${project.alt}"
                        loading="lazy"
                    >

                </div>

            </div>


            <!-- =========================
                 INFORMACIÓN
            ========================== -->

            <div class="project-content">

                <span class="project-label">

                    ${project.type}

                </span>


                <h3>

                    ${project.name}

                </h3>


                <p>

                    ${project.description}

                </p>


                <!-- =========================
                     TECNOLOGÍAS
                ========================== -->

                <div class="project-tech">

                    ${createTechnologies(
                        project.technologies
                    )}

                </div>


                <!-- =========================
                     LINKS
                ========================== -->

                <div class="project-links">

                    <a
                        class="btn btn-outline"
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver ${project.name} en GitHub"
                    >

                        <i
                            class="fa-brands fa-github"
                        ></i>

                        Ver en GitHub

                    </a>

                </div>

            </div>

        </article>

    `;

}



/* =========================
   RENDERIZAR PROYECTOS
========================= */

function renderProjects() {

    if (
        !projectsTrack
    ) {
        return;
    }


    projectsTrack.innerHTML =
        projects
            .map(
                project =>
                    createProjectCard(
                        project
                    )
            )
            .join('');


    /*
       Aqui obtenemos los slides
       después de que JavaScript
       los haya creado.
    */

    projectSlides =
        Array.from(
            document.querySelectorAll(
                '.project-slide'
            )
        );

}



/* =========================
   CREAR PUNTOS
========================= */

function createProjectDots() {

    if (
        !projectDotsContainer ||
        projectSlides.length === 0
    ) {
        return;
    }


    projectDotsContainer.innerHTML =
        '';


    projectSlides.forEach(
        (_, index) => {

            const dot =
                document.createElement(
                    'button'
                );


            dot.type =
                'button';


            dot.className =
                'project-dot';


            dot.setAttribute(
                'aria-label',
                `Ver proyecto ${index + 1}`
            );


            dot.addEventListener(
                'click',
                () => {

                    goToProject(
                        index
                    );

                }
            );


            projectDotsContainer
                .appendChild(
                    dot
                );

        }
    );

}



/* =========================
   ACTUALIZAR CARRUSEL
========================= */

function updateProjectCarousel() {

    if (
        !projectsTrack ||
        projectSlides.length === 0
    ) {
        return;
    }


    projectsTrack.style.transform =
        `translateX(-${
            currentProject * 100
        }%)`;


    const dots =
        projectDotsContainer
            ?.querySelectorAll(
                '.project-dot'
            ) || [];


    dots.forEach(
        (dot, index) => {

            const isActive =
                index ===
                currentProject;


            dot.classList.toggle(
                'active',
                isActive
            );


            dot.setAttribute(
                'aria-current',
                isActive
                    ? 'true'
                    : 'false'
            );

        }
    );

}



/* =========================
   IR A PROYECTO
========================= */

function goToProject(
    index
) {

    if (
        projectSlides.length === 0
    ) {
        return;
    }


    currentProject =
        (
            index +
            projectSlides.length
        ) %
        projectSlides.length;


    updateProjectCarousel();

}



/* =========================
   SIGUIENTE
========================= */

function nextProject() {

    goToProject(
        currentProject + 1
    );

}



/* =========================
   ANTERIOR
========================= */

function previousProject() {

    goToProject(
        currentProject - 1
    );

}



/* =========================
   BOTONES
========================= */

prevProjectButton
    ?.addEventListener(
        'click',
        previousProject
    );


nextProjectButton
    ?.addEventListener(
        'click',
        nextProject
    );



/* =========================
   SWIPE MÓVIL
========================= */

projectsTrack
    ?.addEventListener(
        'touchstart',
        event => {

            touchStartX =
                event
                    .changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


projectsTrack
    ?.addEventListener(
        'touchend',
        event => {

            touchEndX =
                event
                    .changedTouches[0]
                    .screenX;


            const distance =
                touchStartX -
                touchEndX;


            const minimumSwipeDistance =
                45;


            if (
                Math.abs(
                    distance
                ) <
                minimumSwipeDistance
            ) {

                return;

            }


            if (
                distance > 0
            ) {

                nextProject();

            } else {

                previousProject();

            }

        },
        {
            passive: true
        }
    );



/* =========================
   TECLADO
========================= */

projectsCarousel
    ?.addEventListener(
        'keydown',
        event => {

            if (
                event.key ===
                'ArrowLeft'
            ) {

                previousProject();

            }


            if (
                event.key ===
                'ArrowRight'
            ) {

                nextProject();

            }

        }
    );


if (
    projectsCarousel
) {

    projectsCarousel
        .setAttribute(
            'tabindex',
            '0'
        );

}



/* =========================
   INICIAR PROYECTOS
========================= */


renderProjects();

createProjectDots();

updateProjectCarousel();



/* =========================
   SCROLL REVEAL
========================= */

if (
    typeof ScrollReveal !==
    'undefined'
) {

    const sr =
        ScrollReveal({

            distance:
                '45px',

            duration:
                900,

            delay:
                80,

            reset:
                false

        });


    sr.reveal(
        `
        .home-content,
        .about-img,
        .timeline-column:first-child
        `,
        {
            origin:
                'left'
        }
    );


    sr.reveal(
        `
        .home-img,
        .about-content,
        .timeline-column:last-child
        `,
        {
            origin:
                'right'
        }
    );


    sr.reveal(
        `
        .heading,
        .skills .bar,
        .contact-card,
        .projects-carousel
        `,
        {
            origin:
                'bottom',

            interval:
                90
        }
    );

}