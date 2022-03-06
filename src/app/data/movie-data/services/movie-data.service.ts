import { Injectable } from "@angular/core";
import {
  AdvancedMovieCardProps
} from "../../../presentation/components/advanced-movie-card.component";
import { BasicMovieCardProps } from "../../../presentation/components/basic-movie-card.component";

@Injectable()
export class MovieDataService {
  public readonly movieData:Array<AdvancedMovieCardProps> = [
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 5.6,
      title: 'I Dream in Another Language',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
      categories: ['Action', 'Thriller'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 8.0,
      title: 'Benched',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      categories: ['Comedy'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 4.6,
      title: 'Whitney',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      categories: ['Romance', 'Drama', 'Music'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 6.8,
      title: 'Blindspotting',
      description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years',
      categories: ['Comedy', 'Drama'],
    }
  ]
  public readonly suggestedMovieData:Array<BasicMovieCardProps> = [
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 5.6,
      title: 'I Dream in Another Language',
      categories: ['Action', 'Thriller'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 8.0,
      title: 'Benched',
      categories: ['Comedy'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 4.6,
      title: 'Whitney',
      categories: ['Romance', 'Drama', 'Music'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 6.8,
      title: 'Blindspotting',
      categories: ['Comedy', 'Drama'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 8.0,
      title: 'Benched',
      categories: ['Comedy'],
    },
    {
      imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      link: '#',
      rating: 5.6,
      title: 'I Dream in Another Language',
      categories: ['Action', 'Thriller'],
    },
  ]
}
