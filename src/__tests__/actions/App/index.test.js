import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '~/actions/App';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App component async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should dispatch correct async action when it hydrateAppData', () => {
    fetchMock
      .getOnce(`${process.env.BACKEND_ENDPOINT}/charities`, { body: [{
        id: 1,
        name: 'Baan Kru Noi',
        image: 'baan-kru-noi.jpg',
        currency: 'THB',
      },
      {
        id: 2,
        name: 'Habitat for Humanity Thailand',
        image: 'habitat-for-humanity-thailand.jpg',
        currency: 'THB',
      },
      {
        id: 3,
        name: 'Paper Ranger',
        image: 'paper-ranger.jpg',
        currency: 'THB',
      }], headers: { 'content-type': 'application/json' } })
      .getOnce(`${process.env.BACKEND_ENDPOINT}/payments`, { body: [
        {
          charitiesId: 2,
          amount: 10,
          currency: 'THB',
          id: 1,
        },
        {
          charitiesId: 1,
          amount: 20,
          currency: 'THB',
          id: 2,
        },
        {
          charitiesId: 3,
          amount: 50,
          currency: 'THB',
          id: 3,
        }], headers: { 'content-type': 'application/json' } });

    const expectedActions = [
      { type: 'INITIALIZE_CHARITIES', charities: [{currency: 'THB', id: 1, image: 'baan-kru-noi.jpg', name: 'Baan Kru Noi'}, {currency: 'THB', id: 2, image: 'habitat-for-humanity-thailand.jpg', name: 'Habitat for Humanity Thailand'}, {currency: 'THB', id: 3, image: 'paper-ranger.jpg', name: 'Paper Ranger'}]}
      , {type: 'UPDATE_TOTAL_DONATE', amount: 80},
    ];

    const store = mockStore({ });

    return store.dispatch(actions.hydrateAppData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});