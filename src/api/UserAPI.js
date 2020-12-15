import React, { useState, useEffect } from 'react';
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([]);
    const [history, setHistory] = useState([]);
    const [callback, setCallback] = useState(false)

    useEffect(() => {
        // console.log(token, 'tk');
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: { Authorization: token }
                    });
                    //console.log(res);
                    //console.log(res.data.user.role);
                    setIsLogged(true);
                    res.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    setCart(res.data.user.cart);
                } catch (error) {
                    alert(error)
                }
            }
            getUser();
        }
    }, [token])
    const addCart = async (product) => {
        if (!isLogged) {
            window.location.href = '/login';
            return alert('please login to continue');
        };
        if (product.quantity === 0) {
            window.location.href = '/products';
            return alert('san pham da duoc ban het')
        }
        const check = cart.every(item => {
            return item._id !== product._id
        })
        if (check) {
            // console.log('test');
            setCart([...cart, {
                _id: product._id,
                title: product.title,
                count: 1,
                prices: product.prices,
                images: product.images.url
            }])
            await axios.post('/user/addcart', {
                cart: [...cart,
                {
                    _id: product._id,
                    title: product.title,
                    count: 1,
                    prices: product.prices,
                    images: product.images.url
                }]
            }, { headers: { Authorization: token } })
        }
        else {
            return alert('This product has been added to cart');
        }
    }
    // console.log(history, 'userAPI');
    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        //checkout: [checkout, setCheckout],
        addCart: addCart,
        history: [history, setHistory],
        callback: [callback, setCallback]
    }
}

export default UserAPI;