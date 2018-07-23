import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import App from '~/App';
import SearchBox from '~/components/SearchBox';


describe('<App />', () => {
  test.only('when SearchKeywordChange, it dispatch the right action', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
      charities: [],
      donate: 0,
      message: '',
      notification: null,
    };
    const store = mockStore(initialState);

    fetchMock.get('*', {hello: 'world'});

    const wrapper = shallow(
      <App store={store} />
    );

    const component = wrapper.dive();

    component.find(SearchBox).dive().find('input').simulate('change', { target: { value: 'kru' }});

    expect(store.getActions()).toMatchSnapshot();
  });
});
