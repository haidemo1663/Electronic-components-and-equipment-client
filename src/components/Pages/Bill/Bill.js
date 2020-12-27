import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';

import './Bill.css';

function Bill(props) {
    const state = useContext(GlobalState);
    const [history] = state.UserAPI.history;
    console.log(history);
    const [bill, setBill] = useState([]);

    const params = useParams()

    useEffect(() => {
        if (params.id) {
            history.forEach(item => {
                if (item._id === params.id) setBill(item)
            });
        }
    }, [params.id, params, history])
    // if (bill.length === 0) return null
    return (
        <div className="invoice-box">
            <div id="invoice-POS">
                <center id="top">
                    <div className="logo" />
                    <div className="info">
                        <h2>SBISTechs Inc</h2>
                    </div>{/*End Info*/}
                </center>{/*End InvoiceTop*/}
                <div id="mid">
                    <div className="info">
                        <h2>Contact Info</h2>
                        <p>
                            Address : street city, state 0000<br />
                            Email   : JohnDoe@gmail.com<br />
                            Phone   : 555-555-5555<br />
                        </p>
                    </div>
                </div>{/*End Invoice Mid*/}
                <div id="bot">
                    <div id="table">
                        <table>
                            <thead>
                                <tr className="tabletitle">
                                    <th className="item"><h2>Item</h2></th>
                                    <th className="Hours"><h2>Qty</h2></th>
                                    <th className="Rate"><h2>Sub Total</h2></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="service">
                                    <td className="tableitem"><p className="itemtext">Communication</p></td>
                                    <td className="tableitem"><p className="itemtext">5</p></td>
                                    <td className="tableitem"><p className="itemtext">$375.00</p></td>
                                </tr>
                                <tr className="service">
                                    <td className="tableitem"><p className="itemtext">Asset Gathering</p></td>
                                    <td className="tableitem"><p className="itemtext">3</p></td>
                                    <td className="tableitem"><p className="itemtext">$225.00</p></td>
                                </tr>
                                <tr className="service">
                                    <td className="tableitem"><p className="itemtext">Design Development</p></td>
                                    <td className="tableitem"><p className="itemtext">5</p></td>
                                    <td className="tableitem"><p className="itemtext">$375.00</p></td>
                                </tr>
                                <tr className="service">
                                    <td className="tableitem"><p className="itemtext">Animation</p></td>
                                    <td className="tableitem"><p className="itemtext">20</p></td>
                                    <td className="tableitem"><p className="itemtext">$1500.00</p></td>
                                </tr>
                                <tr className="service">
                                    <td className="tableitem"><p className="itemtext">Animation Revisions</p></td>
                                    <td className="tableitem"><p className="itemtext">10</p></td>
                                    <td className="tableitem"><p className="itemtext">$750.00</p></td>
                                </tr>
                                <tr className="tabletitle">
                                    <td />
                                    <td className="Rate"><h2>tax</h2></td>
                                    <td className="payment"><h2>$419.25</h2></td>
                                </tr>
                                <tr className="tabletitle">
                                    <td />
                                    <td className="Rate"><h2>Total</h2></td>
                                    <td className="payment"><h2>$3,644.25</h2></td>
                                </tr>
                            </tbody></table>
                    </div>{/*End Table*/}
                    <div id="legalcopy">
                        <p className="legal"><strong>Thank you for your business!</strong>&nbsp; Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.
            </p>
                    </div>
                </div>{/*End InvoiceBot*/}
            </div>
        </div>
    );
}

export default Bill;