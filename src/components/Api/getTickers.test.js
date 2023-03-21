import getTickers from './getTickers';

const tickers = [
  {
    symbol: "reninr",
    baseAsset: "ren",
    quoteAsset: "inr",
    openPrice: "8",
    lowPrice: "7.8",
    highPrice: "9.45",
    lastPrice: "8.6",
    volume: "216680.8",
    bidPrice: "8.65",
    askPrice: "8.99",
    at: 1678834982000
  },
  {
    symbol: "enjinr",
    baseAsset: "enj",
    quoteAsset: "inr",
    openPrice: "34.9001",
    lowPrice: "34.5",
    highPrice: "37.4587",
    lastPrice: "36.001",
    volume: "17120.4",
    bidPrice: "35.3001",
    askPrice: "36.8821",
    at: 1678834982000
  },
  {
    symbol: "manainr",
    baseAsset: "mana",
    quoteAsset: "inr",
    openPrice: "50.2",
    lowPrice: "50.2",
    highPrice: "54.5498",
    lastPrice: "51.0",
    volume: "24140.4",
    bidPrice: "51.0052",
    askPrice: "53.4998",
    at: 1678834982000
  },
];

describe('getTickers', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => tickers,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return tickers', async () => {
    const apiResp = await getTickers();

    const responseMock = {
      message: null,
      data: tickers,
    };

    expect(apiResp).toEqual(responseMock);
  });

  it('should return an error message if fetch fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'));

    const apiResp = await getTickers();

    const responseMock = {
      message: 'error loading fetching data',
      data: [],
    };

    expect(apiResp).toEqual(responseMock);
  });
});
