export default class Movie {
  public title: string;
  public year: number;
  public country: string;
  public slogan: string;
  public genres: string[];
  public duration: string;

  constructor(title: string, year: number, country: string, slogan: string, genres: string[], duration: string) {
    this.title = title;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genres = genres;
    this.duration = duration;
  }

  // Метод для добавления объекта в корзину
  addToBasket(basket: Movie[]): void {
    basket.push(this);
    console.log(`Фильм "${this.title}" добавлен в корзину.`);
  }
}

const basket: Movie[] = [];

const avengers: Movie = new Movie(
  'The Avengers',
  2012,
  'USA',
  'Avengers Assemble',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '137 мин. / 02:17'
);

avengers.addToBasket(basket);
console.log(basket);