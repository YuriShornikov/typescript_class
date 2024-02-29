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
    expect(avengers.title).toBe('The Avengers');
    expect(avengers.year).toBe(2012);
    expect(avengers.country).toBe('USA');
    expect(avengers.slogan).toBe('Avengers Assemble');
    expect(avengers.genres).toEqual(['фантастика', 'боевик', 'фэнтези', 'приключения']);
    expect(avengers.duration).toBe('137 мин. / 02:17');
  });
  test('adds a movie to the basket', () => {
    avengers.addToBasket(basket);
  
    // Проверяем, что фильм добавлен в корзину
    expect(basket).toContain(avengers);
  });
});