import { container } from "@/config/ioc";
import IHttpService from "./interfaces/IHttpService";
import IMusicLibraryService from "./interfaces/IMusicLibraryService";
import { TYPES } from "@/config/types";
import { AxiosResponse } from "axios";
import Response from "@/dtos/Response";
import MusicLibraryDto from "@/dtos/MusicLibraryDto";
import { injectable } from "inversify";

@injectable()
export default class MusicLibraryService implements IMusicLibraryService{
    private readonly httpService: IHttpService;

    constructor(httpService = container.get<IHttpService>(TYPES.IHttpService)){
        this.httpService = httpService
    }

    get():Promise<AxiosResponse<Response<MusicLibraryDto[]>>>{

        const result = this.httpService
        .callWithoutInterceptor()
        .get<MusicLibraryDto[],AxiosResponse<Response<MusicLibraryDto[]>>>(
            `/MusicLibrary`,{}
        );
        return result
    }
}