/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51HhoFpG9bXNisbmcBvePy5Nj1JEZeB029g3LCmg4HNGTLol5QPWgOO0GKa08lmktzDTPHArHigZLpYOg8jWfTao8001wDLDLFX'
);

export const bookTour = async tourId => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
