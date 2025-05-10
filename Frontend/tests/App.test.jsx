// frontend/tests/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import axios from 'axios';

vi.mock('axios');

test('renders title', async () => {
  axios.get.mockResolvedValue({ data: [] }); // simule une réponse vide

  render(<App />);
  const title = await screen.findByText(/Ajouter un nouveau produit/i);
  expect(title).toBeInTheDocument();
});
