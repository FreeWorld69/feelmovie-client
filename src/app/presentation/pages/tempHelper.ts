import { Injectable } from "@angular/core";
import { GenresSchema } from "../../data/schemas/core/basics/genre.schema";
import { PlotSchema } from "../../data/schemas/core/basics/plot.schema";

// must be replaced by some kind of api builder
@Injectable({providedIn: 'root'})
export class TempHelper {
  public getGenres(genresArr?: GenresSchema[]) {
    return genresArr?.map(genre => genre?.engTitle ?? '') ?? [];
  }

  public getDescription(plotsArr?: PlotSchema[]) {
    const plotDescription = plotsArr?.find(el => el.language === 'ENG')?.description;

    if (!plotDescription) {
      return plotsArr?.find(el => el.language === 'GEO' || el.language === 'RUS')?.description ?? '';
    }

    return plotDescription
  }
}
