export class RepoModel {
    id: number;
    name: string;
    description: string;
    picture: string;
    html_url: string;
    created_at: Date;
    image: string;
    constructor(
        id: number,
        name: string,
        description: string,
        picture: string,
        html_url: string,
        created_at: Date,
        image: string,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.html_url = html_url;
        this.created_at = created_at;
        this.image = image;
    }
}
