import projectsData from "@/data/projects.json"
import techData from "@/data/tech.json"

export type ProjectsData = typeof projectsData
export type Slug = keyof typeof projectsData
export type Tech = keyof typeof techData

export type ProjectData = {
    title: string;
    tech: Tech[];
    implementations: string[];
    liveUrl: string | null;
    imgUrl: string;
    galleryImgUrls: string[];
}