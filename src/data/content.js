
const TOOLS = Object.freeze({
    REACT: 'React', 
    ASP_NET: 'ASP.NET',
    EXPRESS: 'ExpressJS',
    GEMINI: 'Gemini AI',
    NODE: 'NodeJS',
    SIGNALR: 'SignalR',
    MAPBOX: 'MapBox',
    AUTH0: 'Auth0',
    MONGODB: 'MongoDB'
});

const STATUS = Object.freeze({
    COMPLETE: 'Complete',
    IN_PROGRESS: 'In Progress'
})

const PROJECT_TYPE = Object.freeze({
    PERSONAL: 'Personal',
    ACADEMIC: 'Academic',
    PROFESSIONAL: 'Professional'
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

export const PROJECTS = [
    {
        name: 'BearTracks',
        description: 'BearTracks is an interactive 3D map of Sheridan College campuses built with student struggles in mind.',
        repo: 'https://github.com/vega0604/BearTracks',
        link: 'https://www.beartracks.tech/',
        start_date: Date.UTC(2025, 0, 17),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.MAPBOX, TOOLS.EXPRESS, TOOLS.GEMINI, TOOLS.NODE]
    }
];