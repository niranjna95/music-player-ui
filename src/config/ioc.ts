import { Container } from "inversify";

import IHttpService from "@/services/interfaces/IHttpService";
import { TYPES } from "./types";
import HttpService from "@/services/HttpService";
import IUnitOfService from "@/services/interfaces/IUnitOfService";
import UnitOfService from "@/services/UnitOfService";
import IMusicLibraryService from "@/services/interfaces/IMusicLibraryService";
import MusicLibraryService from "@/services/MusicLibraryService";

const container = new Container();

container.bind<IHttpService>(TYPES.IHttpService).to(HttpService);
container.bind<IMusicLibraryService>(TYPES.IMusicLibraryService).to(MusicLibraryService);



container.bind<IUnitOfService>(TYPES.IUnitOfService).to(UnitOfService);


export { container };