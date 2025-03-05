import '../styles/transfer.css';

const Transfer = () => {
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
                    <button>Send</button>
                </form>

            </div>
        </div>



    )
}








export default Transfer;