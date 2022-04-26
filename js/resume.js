const resume = {
    firstName: 'Juan Carlos',
    lastName: 'Alvarez L',
    jobTitle: 'Full Stack Developer',
    city: 'Cúcuta',
    postalCode: '500008',
    country: 'Colombia',
    phone: '+573168645825',
    email: 'jcalvarez31@misena.edu.co',
    education: [
        {
            school: 'SENA',
            degree: 'Análisis y desarrollo de sistemas informáticos',
            graduationDate: '2015',
            description: 'Software Engineering'
        },
        {
            school: 'SENA',
            degree: 'Especialización en desarrollo de aplicaciones móviles',
            graduationDate: '2017',
            description: 'Software Mobile'
        },
    ],
    links: [
        {
            label: 'GitHub',
            link: 'https://github.com/juanklagos'
        },
        {
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/juan-carlos-alvarez-lagos-672298103/'
        },
    ],
    skills: [
        'PHP',
        'Laravel',
        'Codeigniter',
        'JavaScript',
        'TypeScript',
        'CordovaJS',
        'NodeJS',
        'VueJS',
        'NuxtJS',
        'Docker',
        'Firebase',
        'NativeScript',
        'PostgreSQL',
        'MySQL',
        'GIT',
    ],
    languages: ['English (A2)', 'Spanish'],
    professionalSummary: `Developer specialized in creation of web and mobile apps hybrid, capable of
self-learning, management time and team leadership, focused on meeting goals, I like order, that's why I'm given to use of tools that we help to be up to date, both individually and as a team.`,
    employmentHistory: [
        {
            jobTitle: 'Team Lead',
            startDate: 'JUN 2020',
            endDate: 'PRESENT',
            employer: 'CUEMBY INC',
            city: 'Remote',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Node js, Kubernates, VUEJS,TYPESCRIPT, php,nutxjs\n.'
            ]
        },
        {
            jobTitle: 'FrontEnd Developer',
            startDate: 'MAY 2021',
            endDate: 'NOV 2021',
            employer: 'IPCOM AI',
            city: 'Remote',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa,\n' +
                'js, css, html, laravel, git, VUEJS, TYPESCRIPT\n.'
            ]
        },
        {
            jobTitle: 'Full-Stack Developer',
            startDate: 'Ene 2020',
            endDate: 'Nov 2020',
            employer: 'CELEUS GROUP SAS',
            city: 'Remote',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Kubernates, VUEJS, php,nutxjs, TYPESCRIPT\n.'
            ]
        },
        {
            jobTitle: 'Full-Stack Developer',
            startDate: 'Nov 2019',
            endDate: 'May 2020',
            employer: 'INTERFEL Madrid -España',
            city: 'Remote',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Kubernates, VUEJS, php,nutxjs\n.'
            ]
        },
        {
            jobTitle: 'Full-Stack Developer',
            startDate: 'Marc 2018',
            endDate: 'Oct 2019',
            employer: 'NRS-GROUP Madrid -España',
            city: 'Remote',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Kubernates, VUEJS, php,nutxjs\n.'
            ]
        }, {
            jobTitle: 'Full-Stack Developer',
            startDate: 'Marc 2018',
            endDate: 'May 2018',
            employer: 'BISA CORPORATION LTDA',
            city: 'Remote',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Kubernates, VUEJS, php,nutxjs\n.'
            ]
        },
        {
            jobTitle: 'Full-Stack Developer',
            startDate: 'Ene 2018',
            endDate: 'Jul 2018',
            employer: 'ISOFTLA S.A.S',
            city: 'Cúcuta',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Kubernates, VUEJS, php,nutxjs\n.'
            ]
        },
        {
            jobTitle: 'Full-Stack Developer',
            startDate: 'Ene 2016',
            endDate: 'Nov 2017',
            employer: 'Probolsas S.A.S',
            city: 'Cúcuta',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Kubernates, VUEJS, php,nutxjs\n.'
            ]
        },
        {
            jobTitle: 'Full-Stack Developer',
            startDate: 'Ene 2015',
            endDate: 'Nov 2016',
            employer: 'Serviya S.A.S',
            city: 'Cúcuta',
            achievements: [
                'Metodologías agilie scrum, Aplicaciones spa, pwa, cordava e hibrida,\n' +
                'jQuery, css, html, laravel, git, Docker, Kubernates, VUEJS, php,nutxjs\n.'
            ]
        },
    ],
    photo: 'https://www.facebook.com/photo/?fbid=3145432142447404&set=a.1442445886079380',
}

const formatResume = (r) => ({
    ...r,
    address: [
        r.country,
        r.city,
        r.postalCode
    ].filter(Boolean).join(', ')
})

 /* Vue.createApp({
    data() {
      return {
         formatResume(resume)
      }
    }
  }).mount('#app')
*/
new Vue({
    el: "#app",
    data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()
