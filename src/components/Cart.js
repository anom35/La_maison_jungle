function Cart() {
    const prix1 = 8;
    const prix2 = 10;
    const prix3 = 13
    return (
        <div className="lmj-cart">
            <h2>Panier :</h2>
            <ul>
                <li>Plante 1: {prix1}€</li>
                <li>Plante 2: {prix2}€</li>
                <li>Plante 3: {prix3}€</li>
            </ul>
            Total : {prix1 + prix2 + prix3}€
        </div>
    )
}

export default Cart;