import React,{useContext} from "react";
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button";
import AppContext from "../context/AppContext";
import "../styles/components/Payment.css";

const Payment = () =>{
    const {state,sumTotalItemsPrice,addNewOrder} = useContext(AppContext);
    const {cart, buyer} = state;
    const history = useHistory();

    const paypalOptions = {
        clientId : 'sb-icxnb8414208@business.example.com',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }
    const handleSumTotal = () =>{
        return sumTotalItemsPrice();
    }
    const handlePaymentSuccess = (data) =>{
        if(data === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }
    return(
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item)=>{
                    <div className="Payment-item" key={item.title}>
                        <h4>{item.title}</h4>
                        <span>
                            $
                            {' '}
                            {item.price}
                        </span>
                    </div>
                })}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions = {paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={()=>console.log('Start payment')}
                        onPaymentSuccess = {data => handlePaymentSuccess(data)}
                        onPaymentError = {error => console.log(error)}
                        onPaymentCancel = {data => console.log(data)}
                    />
                    Boton de pago con Paypal
                </div>
            </div>
        </div>
    );
}

export default Payment;