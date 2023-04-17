import { getByTestId, render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';
import Trails from './components/trails'
import TrailsListProvider from './context/TrailsList'
import Header from './components/header'

test('Modal deve iniciar fechada', () => {
  const {container, getByTestId}= render(
    <TrailsListProvider>
      <App />
    </TrailsListProvider>
  );

  expect(getByTestId('main')).not.toContainHTML('<div className="modal" data-testeid="modal"></div>');

});



test('Inscrições deveinciar zerada', () => {
  render(
    <TrailsListProvider>
      <Header />
    </TrailsListProvider>
  );

  expect(screen.getByText('0')).toBeInTheDocument();
});



global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    image: './images/img.png',
    name: 'Trilha AWS',
    description: 'Os serviços na nuvem estão crescendo e são cada vez mais importantes para a maioria dos sistemas e aplicações'
  })
}));

test('Deve carregar a lista de trilhas', async () => {
  
  act(() => render(
    <TrailsListProvider>
      <Trails />
    </TrailsListProvider>
  ));

  expect(screen.getByTestId('trails-list')).toBeInTheDocument();

})
