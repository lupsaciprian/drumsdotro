export interface ShowRecurrence {
  day: string;
  week: number;
}

export interface ShowIsToday {
  isToday: boolean;
  isLive: boolean;
}

export interface Profiles {
  facebook?: string;
  mixcloud?: string;
  soundcloud?: string;
  facebookEvent?: string;
}

export class ShowModel {
  constructor(
    public showName: string,
    public artist: string,
    public airHour: string,
    public genre: string,
    public imageAdress: string,
    public once: boolean,
    public recurrence: ShowRecurrence[],
    public scheduled?: string,
    public dateDifference?: string,
    public showIsToday?: ShowIsToday,
    public artistRef?: string,
    public profiles?: Profiles
  ) {}
}
