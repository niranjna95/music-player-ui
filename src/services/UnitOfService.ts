import { injectable } from "inversify";
import IHttpService from "./interfaces/IHttpService";
import { container } from "@/config/ioc";
import { TYPES } from "@/config/types";
import IUnitOfService from "./interfaces/IUnitOfService";
import IMusicLibraryService from "./interfaces/IMusicLibraryService";

@injectable()
export default class UnitOfService implements IUnitOfService {

    public HttpService: IHttpService;
    public MusicLibraryService: IMusicLibraryService;
    constructor(
        httpService = container.get<IHttpService>(TYPES.IHttpService),
        musicLibrary = container.get<IMusicLibraryService>(TYPES.IMusicLibrary)
      
    )
    {
    
        this.HttpService = httpService;   
        this.MusicLibraryService = musicLibrary
    }


    
}