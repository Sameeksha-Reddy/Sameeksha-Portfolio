import Mba from "./ProjectsDisplay/assets/Mba.png"
import Hma from "./ProjectsDisplay/assets/Hma.png"
import ssdi from "./ProjectsDisplay/assets/ssdi.png"
import geu from "./ProjectsDisplay/assets/geu.png"
import st from "./ProjectsDisplay/assets/st.png"


const ProjectCardData = [
    {
        imgsrc: ssdi,
        title: "Photo Sharing Application",
        skills:"Skills: ReactJs, HTML, CSS, JS, Postman",
        text: 'Photo sharing application that allows users to easily upload, share, and discover images. It includes features for organizing photos, controlling privacy, and interacting through likes and comments.',
    },
    
    {
        imgsrc: Mba,
        title: "Budget Management System",
        skills:"Skills: Flutter, Dart, MySQL, Figma",
        text: 'To track expenditure and income in real time, dynamically. To visually analyze insights,key results,budget in the form of charts & statistics. To help users draw data oriented decisions faster.',
    },

    {
        imgsrc: Hma,
        title: "Hotel Management Application",
        skills:"Skills: Flutter, Dart, MySQL, Figma",
        text: 'User friendly interface. All the customers and office staff can access all the features with ease. Makes work more efficient. Comfortable to work with.',
    },

    {
        imgsrc: geu,
        title: "Global Usage of Energy",
        skills:"Skills: Tableau, Figma",
        text: 'Analyzing global energy usage trends. Visualized energy consumption by region, source, and year, providing actionable insights for sustainable energy planning and decision making.',
    },

    {
        imgsrc: st,
        title: "Sediment Traps",
        skills:"Skills: Tableau, Figma",
        text: 'Visualized sediment trap datasets, highlighting key patterns and trends. Improved data interpretation and decision-making with interactive charts and summaries.',
    }
]

export default ProjectCardData;