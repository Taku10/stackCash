import toast, { Toaster } from 'react-hot-toast';
import '../styles/transfer.css';

const Transfer = () => {

    const money_send = (event) => {
        event.preventDefault();
        
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Randomly resolve or reject the promise
                Math.random() < 0.5 ? resolve('Money Sent') : reject('Failed to send money');
            }, 3000);
        });

        toast.promise(myPromise, {
            loading: 'Sending money...',
            success: 'Money sent successfully!',
            error: 'Failed to send money.',
        });
    };
    return (
        <div className="transfer-container">
            <div className="transfer-wrapper">
                <div className="transfer-header">
                    <h1>Transfer Funds</h1>
                    <div className='transfer-select-account'>
                        <select name="transfer-accounts" id="transfer-accounts">
                            <option >Select Account</option>
                            <option value="transfer-chase">Chase</option>
                            <option value="transfer-wellsFargo">Wells Fargo</option>
                            <option value="transfer-usBank">Us Bank</option>
                        </select>
                    </div>

                </div>
                <div className="bank-details">
                    <div className="bank-details-subheader">
                        <h3>Bank Details</h3>
                        <p>Enter recipient's bank details</p>
                    </div>
                    
                    <hr className='line'/>
                </div>
                
                <form action="">
                    <div className="recipient-phone">
                        <label htmlFor="recipient-phone">Recipient's Phone Number</label>
                        <input type="text" id="recipient-phone" name="recipient-phone" />
                    </div>
                    <div className='recipient-account-number'>
                        <label htmlFor="recipient-account-number">Recipient's Account Number</label>
                        <input type="text" id="recipient-account-number" name="recipient-account-number" />
                    </div>
                    <div className='amount'>
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" name="amount" />
                    </div>
                    <div className='transfer-notes'>
                        <label htmlFor="transfer-notes">Description</label>
                        <textarea name="transfer-notes" id="transfer-notes" cols="30" rows="10"></textarea>

                    </div>
                    <Toaster />
                    <button onClick={money_send}>Send</button>
                </form>

            </div>
        </div>



    )
}








export default Transfer;