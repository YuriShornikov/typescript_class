import Movie from '../app';

describe('Movie', () => {

  // создаем класс
  const basket: Movie[] = []
  const avengers = new Movie(
    'The Avengers',
    2012,
    'USA',
    'Avengers Assemble',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17'
  );
  test('Creates a movie', () => {
    const correct = {
      title: 'The Avengers',
      year: 2012,
      country: 'USA',
      slogan: 'Avengers Assemble',
      genres: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      duration: '137 мин. / 02:17'
    }
    expect(avengers).toEqual(correct);
  });
  test('adds a movie to the basket', () => {
    avengers.addToBasket(basket);
  
    // Проверяем, что фильм добавлен в корзину
    expect(basket).toContain(avengers);
  });
});