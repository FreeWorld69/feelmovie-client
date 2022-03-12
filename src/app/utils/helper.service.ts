import { Injectable } from "@angular/core";
import { Configs } from "../shared/config";
import { LanguagesEnum } from "../shared/enums/languages.enum";
import { MovieFilesSchema } from "../data/schemas/core/basics/movie_files.schema";

@Injectable()
export class HelperService {
  public configs = Configs;

  public routeCheckFormat(route: string): string {
    return '/' + route;
  }

  public capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  public static isDev(): boolean {
    return Configs.constants.enviroment === 'development';
  }
}
