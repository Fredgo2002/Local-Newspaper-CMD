export interface Article {
    id: number;
    headline: string;
    body: string;
    author: string;
    publication_date: string;
    published: boolean;
}

export const ARTICLES_CATEGORIES = {
    published: 'Published',
    unpublished: 'Unpublished',
    all: 'All'
}

export const ARTICLES_MODES = {
    view: 'View',
    edit: 'Edit',
    add: 'Add'
}

export const ARTICLES_ACTIONS = {
    edit: 'edit',
    delete: 'delete',
    view: 'view'
}

export const ARTICLES: Article[] = [
    {
        id: 1,
        headline: "City Council Approves New Public Park Initiative",
        body: "The City Council has officially approved a new initiative to develop a public park in the downtown area. The project, aimed at increasing green space and promoting outdoor activities, was passed unanimously during Tuesday night's meeting.\n\nAccording to officials, the park will feature walking trails, a playground, picnic areas, and community gardens. Construction is expected to begin later this year, with a planned opening in late 2026.\n\nResidents expressed strong support for the project, calling it a much-needed addition to the neighborhood.",
        author: "Joe Doe",
        publication_date: "01/06/2025",
        published: true
    }
]