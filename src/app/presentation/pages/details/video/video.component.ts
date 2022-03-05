import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from "ngx-plyr";
import * as Plyr from "plyr";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @ViewChild(PlyrComponent) public plyr: PlyrComponent;
  public player: Plyr;
  public poster: string = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg';
  public videoSources: Plyr.Source[] = [
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      type: 'video/mp4',
      size: 576,
      provider: 'html5'
    },
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
      type: 'video/mp4',
      size: 720,
      provider: 'html5'
    },
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
      type: 'video/mp4',
      size: 1080,
      provider: 'html5'
    },
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4',
      type: 'video/mp4',
      size: 1440,
      provider: 'html5'
    },
  ];
  public tracks: Plyr.Track[] = [
    {
      kind: 'captions',
      label: 'English',
      srcLang: 'en',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
      default: true,
    },
    {
      kind: 'captions',
      label: 'French',
      srcLang: 'fr',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
    }
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
