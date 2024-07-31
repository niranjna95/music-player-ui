import { AxiosResponse } from "axios";
import Response from "@/dtos/Response";
import MusicLibraryDto from "@/dtos/MusicLibraryDto";
export default interface IMusicLibraryService {
   
    get():Promise<AxiosResponse<Response<MusicLibraryDto[]>>>;

}