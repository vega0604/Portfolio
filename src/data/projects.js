import { TOOLS, PROJECT_TYPE, STATUS } from "@data/enums";
import { COLLABORATORS } from "@data/collaborators";

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

export const PROJECTS = [
    {
        name: '404cast',
        description: 'GeoGuessr but for guessing kidnapping odds in Toronto',
        repo: 'https://github.com/vega0604/404cast',
        link: 'https://www.404cast.com/',
        start_date: new Date(2025, 6),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.JUPYTER, TOOLS.EXPRESS, TOOLS.NODE],
        collaborators: [COLLABORATORS['seyon'],COLLABORATORS['aleks'], COLLABORATORS['anya']]
    },
    {
        name: 'BearTracks',
        description: 'Interactive 3D map of the Sheridan campuses | Hackville 1st 🏆',
        repo: 'https://github.com/vega0604/BearTracks',
        link: 'https://www.beartracks.tech/',
        start_date: new Date(2025, 0),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.MAPBOX, TOOLS.EXPRESS, TOOLS.GEMINI, TOOLS.NODE],
        collaborators: [COLLABORATORS['brandyn'],COLLABORATORS['aleks'], COLLABORATORS['anya']]
    },
    {
        name: 'Next Level Lending',
        description: 'Website for a mortgage loan company in California',
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
        description: 'Website for a realtor agency in California',
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
        link: 'https://devpost.com/software/pulsepoint',
        start_date: new Date(2024, 1),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.REACT, TOOLS.EXPRESS, TOOLS.NODE, TOOLS.MONGODB, TOOLS.HEDERA],
        collaborators: [COLLABORATORS['aleks'], COLLABORATORS['shazeb']]
    },
    {
        name: 'UTMC',
        description: 'University of Toronto Minecraft\'s official website.',
        repo: null,
        link: 'https://uoftminecraft.ca/',
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
    // {
    //     name: 'Blitzgrade',
    //     description: 'AI-powered study platform',
    //     repo: null,
    //     link: 'https://blitzgrade.vercel.app/',
    //     start_date: new Date(2024, 3),
    //     end_date: null,
    //     status: STATUS.IN_PROGRESS,
    //     type: PROJECT_TYPE.PERSONAL,
    //     tech_stack: [TOOLS.REACT, TOOLS.EXPRESS, TOOLS.NODE, TOOLS.MONGODB, TOOLS.AUTH0],
    //     collaborators: [COLLABORATORS['aleks'], COLLABORATORS['anya']]
    // },
    {
        name: 'GitMania',
        description: 'Educational game for learning Git',
        repo: 'https://github.com/vega0604/GitMania',
        link: 'https://devpost.com/software/gitmania',
        start_date: new Date(2024, 0),
        end_date: null,
        status: STATUS.IN_PROGRESS,
        type: PROJECT_TYPE.PERSONAL,
        tech_stack: [TOOLS.HTML, TOOLS.CSS, TOOLS.JS, TOOLS.PIXI],
        collaborators: [COLLABORATORS['iman'], COLLABORATORS['emily'], COLLABORATORS['audrey']]
    }
];