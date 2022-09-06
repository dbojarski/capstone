import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from './PaymentForm.styles';
import { BUTTON_TYPE } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { startPayment } from '../../store/payment/payment.action';
import {
  selectPaymentIsLoading,
  selectPaymentSucceed,
} from '../../store/payment/payment.selector';
import { FormEventHandler, useEffect } from 'react';

export function PaymentForm() {
  const dispatch = useDispatch();
  const paymentLoading: boolean = useSelector(selectPaymentIsLoading);
  const paymentSucceed: boolean = useSelector(selectPaymentSucceed);
  const stripe = useStripe();
  const elements = useElements();
  const amount: number = useSelector(selectCartTotalPrice);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e: Event) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    dispatch(
      startPayment({
        amount,
        stripe,
        cardElement: elements.getElement(CardElement),
        name: currentUser ? currentUser.displayName : 'Guest',
      })
    );
  };

  useEffect(() => {
    if (paymentSucceed) {
      alert('payment successful');
    }
  }, [paymentSucceed]);

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={paymentLoading}
          buttonType={BUTTON_TYPE.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
}
