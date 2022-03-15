import { Injectable } from "@angular/core";
import { GenresSchema } from "../data/schemas/core/basics/genre.schema";
import { ExtendedDetails } from "../data/modules/detailed/detailed-movie.metadata";
import { MovieSchema } from "../data/schemas/core/movie.schema";
import { SearchResultsSchema } from "../data/schemas/core/search_results.schema";
import { PlotSchema } from "../data/schemas/core/basics/plot.schema";


type ImagesObjectSchemas = ExtendedDetails | SearchResultsSchema | MovieSchema;
type ImagesObjectPropTypes = 'ExtendedDetails' | 'SearchResultsSchema' | 'MovieSchema';

// must be replaced by some kind of api builder
@Injectable({providedIn: 'root'})
export class Helper {
  public getImage(data: ImagesObjectSchemas, type: ImagesObjectPropTypes): string {
    const bigImages = (): string | null => {
      if (data?.covers?.s1920 && data?.covers.s1920) return data.covers.s1920;
      if (data?.covers?.s1050 && data?.covers.s1050) return data.covers.s1050;
      if (data?.covers?.s510 && data?.covers.s510) return data.covers.s510;
      if (data?.covers?.s367 && data?.covers.s367) return data.covers.s367;

      return null
    }
    const smallImages = (): string | null => {
      if (data?.poster && data.poster) return data.poster;
      if (data?.posterS240 && data.posterS240) return data.posterS240;
      return null;
    }

    const smallOne = smallImages();
    const bigOne = bigImages();

    if (type === 'ExtendedDetails' || type === 'SearchResultsSchema') {
      return smallOne ?? bigOne ?? '';
    }
    else if (type === 'MovieSchema') {
      return bigOne ?? smallOne ?? '';
    }

    return ''
  }


  public getGenres(genresArr?: GenresSchema[]) {
    return genresArr?.map(genre => {
      if (genre?.engTitle && genre.engTitle) return genre.engTitle;
      if (genre?.geoTitle && genre.geoTitle) return genre.geoTitle;
      if (genre?.rusTitle && genre.rusTitle) return genre.rusTitle;

      return '';
    }) ?? [];
  }

  public getDescription(plotsArr?: PlotSchema[]) {
    return plotsArr?.find(el => {
      if (el?.language && el.language === 'ENG') return el;
      if (el?.language && el.language === 'GEO') return el;
      if (el?.language && el.language === 'RUS') return el;

      return el;
    })?.description ?? '';
  }
}
