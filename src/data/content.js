
const TOOLS = Object.freeze({
    REACT: 'React', 
    ASP_NET: 'ASP.NET',
    EXPRESS: 'ExpressJS',
    GEMINI: 'Gemini AI',
    NODE: 'NodeJS',
    SIGNALR: 'SignalR',
    MAPBOX: 'MapBox',
    AUTH0: 'Auth0',
    MONGODB: 'MongoDB',
    JQUERY: 'JQuery',
    HEDERA: 'Hedera Hashgraph',
    R3FIBRE: 'React-Three-Fibre',
    DOTNET_MAUI: '.NET Maui',
    HTML: 'HTML',
    CSS: 'CSS',
    JS: 'Javascript',
    PIXI: 'PixiJS'
});

const STATUS = Object.freeze({
    COMPLETE: 'Complete',
    IN_PROGRESS: 'In Progress'
})

const PROJECT_TYPE = Object.freeze({
    PERSONAL: 'Personal',
    ACADEMIC: 'Academic',
    PROFESSIONAL: 'Professional',
    CONTRACT: 'Contract'
});

export const stringToHex = (str) => {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour
}

/*
typedef PROJECT = {
    name: str,
    description: str,
    repo: str | null,
    link: str | null,
    start_date: Date,
    end_date: Date | null,
    status: STATUS,
    type: PROJECT_TYPE,
    tech_stack: str[],
    collaborators: COLLABORATORS[]
}
*/

const COLLABORATORS = Object.freeze({
    'aleks': {
        name: 'Aleks Bursac',
        portfolio: 'https://www.aleksbrsc.com/',
        github: 'https://github.com/aleksbrsc'
    },
    'anya': {
        name: 'Anya Popova',
        portfolio: null,
        github: 'https://github.com/anya-pop'
    },
    'brandyn': {
        name: 'Brandyn Sudjito',
        portfolio: null,
        github: 'https://github.com/brandynsudjito'
    },
    'shazeb': {
        name: 'Shazeb',
        portfolio: 'https://shazeb.live/',
        github: 'https://github.com/ShazebA'
    },
    'ahmad': {
        name: 'Ahmad Ibrahim',
        portfolio: null,
        github: 'https://github.com/House-MD'
    },
    'nazik': {
        name: 'Nazik Hweija',
        portfolio: null,
        github: 'https://github.com/NazikHweija'
    }, 
    'iman': {
        name: 'Iman Kamran',
        portfolio: 'https://www.imank.us/',
        github: 'https://github.com/imankamrann'
    },
    'emily': {
        name: 'Emily Ibanez',
        portfolio: null,
        github: null
    },
    'audrey': {
        name: 'Audrey Man',
        portfolio: null,
        github: 'https://github.com/MornTHEMorning'
    }
});

export const PROJECTS = [
    {
        name: 'BearTracks',
        description: 'BearTracks is an interactive 3D map of Sheridan College campuses built with student struggles in mind. This project won first place at Hackville',
        repo: 'https://github.com/vega0604/BearTracks',
        link: 'https://www.beartracks.tech/',
        start_date: new Date(2025, 0),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.MAPBOX, TOOLS.EXPRESS, TOOLS.GEMINI, TOOLS.NODE],
        collaborators: [COLLABORATORS['aleks'], COLLABORATORS['anya'], COLLABORATORS['brandyn']]
    },
    {
        name: 'Next Level Lending',
        description: 'Informative site for mortgage loan company',
        repo: null,
        link: 'https://www.tthomeloans.com/',
        start_date: new Date(2024, 7),
        end_date: new Date(2025, 0),
        status: STATUS.COMPLETE,
        type: PROJECT_TYPE.CONTRACT,
        tech_stack: [TOOLS.REACT, TOOLS.EXPRESS, TOOLS.NODE],
        collaborators: [COLLABORATORS['aleks']]
    },
    {
        name: 'Ryan Levi Realty',
        description: 'Informative site for realtor agency',
        repo: null,
        link: 'https://www.ryanlevirealty.com/',
        start_date: new Date(2024, 6),
        end_date: new Date(2025, 0),
        status: STATUS.COMPLETE,
        type: PROJECT_TYPE.CONTRACT,
        tech_stack: [TOOLS.REACT, TOOLS.EXPRESS, TOOLS.NODE],
        collaborators: [COLLABORATORS['aleks']]
    },
    {
        name: 'Concord',
        description: 'Enterprise communications platform',
        repo: null,
        link: null,
        start_date: new Date(2024, 8),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.ACADEMIC,
        tech_stack: [TOOLS.ASP_NET, TOOLS.SIGNALR, TOOLS.JQUERY],
        collaborators: [COLLABORATORS['ahmad'], COLLABORATORS['brandyn']]
    },
    {
        name: 'PulsePoint',
        description: 'Blockchain EMR solution to emergency room off-loading',
        repo: 'https://github.com/ShazebA/PulsePoint',
        link: null,
        start_date: new Date(2024, 1),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.EXPRESS, TOOLS.NODE, TOOLS.MONGODB, TOOLS.HEDERA],
        collaborators: [COLLABORATORS['aleks'], COLLABORATORS['shazeb']]
    },
    {
        name: 'UTMC',
        description: 'University of Toronto Minecraft\'s website with 3d models using react-three-fiber.',
        repo: null,
        link: 'https://utmc.vercel.app/',
        start_date: new Date(2024, 1),
        end_date: new Date(2024, 8),
        status: STATUS.COMPLETE,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.R3FIBRE],
        collaborators: [COLLABORATORS['aleks']]
    },
    {
        name: 'Life',
        description: 'Conway\'s Game of Life simulator',
        repo: null,
        link: null,
        start_date: new Date(2023, 0),
        end_date: new Date(2023, 3),
        status: STATUS.COMPLETE,
        type: PROJECT_TYPE.ACADEMIC, 
        tech_stack: [TOOLS.DOTNET_MAUI],
        collaborators: [COLLABORATORS['ahmad'], COLLABORATORS['nazik']]
    },
    {
        name: 'Blitzgrade',
        description: 'AI powered study platform',
        repo: null,
        link: 'https://blitzgrade.vercel.app/',
        start_date: new Date(2024, 3),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.EXPRESS, TOOLS.NODE, TOOLS.MONGODB, TOOLS.AUTH0],
        collaborators: [COLLABORATORS['aleks'], COLLABORATORS['anya']]
    },
    {
        name: 'GitMania',
        description: 'platform to learn git through playing a game',
        repo: 'https://github.com/vega0604/GitMania',
        link: null,
        start_date: new Date(2024, 0),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.HTML, TOOLS.CSS, TOOLS.JS, TOOLS.PIXI],
        collaborators: [COLLABORATORS['iman'], COLLABORATORS['emily'], COLLABORATORS['audrey']]
    }
];