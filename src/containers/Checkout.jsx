import React,{useContext} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Checkout.css";

const Checkout = () =>{
    const {state, removeFromCart, sumTotalItemsPrice} = useContext(AppContext);
    const {cart} = state;

    const handleRemove = product => ()=>{
        removeFromCart(product);
    }

    const handleSumTotal = () =>{
        return sumTotalItemsPrice();
    }

    return(
        <>
            <Helmet>
                <title>Platzi Conf Merch - Lista de Pedidos</title>
            </Helmet>        
            <div className="Checkout">
                <div className="Checkout-content">
                    {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
                    {cart.map((item)=>(
                        <div className="Checkout-item" key={item.title}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <button type="button" onClick={handleRemove(item)}>
                            <i className="fas fa-trash-alt" title="Eliminar" />
                        </button>
                        </div>
                    ))}

                </div>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                        <button type="button">
                            <Link to="/checkout/information">
                                Continuar Pedido
                            </Link>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Checkout;