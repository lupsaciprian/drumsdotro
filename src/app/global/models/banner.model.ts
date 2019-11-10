export interface BannerClasses {
  imageClasses?: string[];
  headingClasses?: string[];
}

export interface BannerInterface {
  heading: string;
  imageAdress: string;
  description?: string;
  classes?: BannerClasses;
  links?: object;
}
