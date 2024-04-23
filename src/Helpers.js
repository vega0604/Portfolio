class Contributor{
    name;
    website;
    constructor(name, website){
      this.name = name;
      this.website = website;
    }
}
  
  
export const States = {
    Undefined: "Undefined",
    InProgress: "In Progress",
    Complete: "Complete",
    Incomplete: "Incomplete"
}

const Contributors = [
    new Contributor("Sebastian Vega", "https://vega0604.vercel.app/overview"),
    new Contributor("Aleks Bursac", "https://aleksbrsc.github.io/Portfolio/index.html"),
    new Contributor("Iman Kamran", "https://www.imank.us/"),
    new Contributor("Shazeb Ashique", "https://shazeb.live/")
]

const ProjectList = [
    {
        name: "Portfolio", 
        description: "Personal Portfolio site", 
        techStack: ["React", "JSX", "HTML", "CSS", "Vercel"], 
        status: States.InProgress, 
        contributors: [Contributors[0]]
    },
    {
        name: "UTMC Website", 
        description: "Website for the University of Toronto Minecraft Club", 
        techStack: ["React", "JSX", "HTML", "CSS", "Vercel"], 
        status: States.Complete, 
        contributors: [Contributors[0], Contributors[1]]
    },
    {
        name: "WFC-Grid", 
        description: "App simulating a wave function collapse algorithm used in randomly generated terrain methods", 
        techStack: ["Python", "PyGame"], 
        status: States.Complete,
        contributors: [Contributors[0]]
    },
    {
        name: "PulsePoint", 
        description: "A Blockchain EMR solution to emergency room off-loading", 
        techStack: ["React"], 
        status: States.InProgress,
        contributors: [Contributors[0], Contributors[1], Contributors[3]]
    },
    {
        name: "GitMania", 
        description: "Web App to help newcomers learn git basics in a fun and interactive way", 
        techStack: ["JS", "HTML", "CSS"], 
        status: States.Incomplete,
        contributors: [Contributors[0], Contributors[2]]
    },
];

export default ProjectList;
  