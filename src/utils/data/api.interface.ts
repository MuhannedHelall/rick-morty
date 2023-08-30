import ICharacter from "./character.interface";

interface IApi {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: ICharacter[];
}

export default IApi;
