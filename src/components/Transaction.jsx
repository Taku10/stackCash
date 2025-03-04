import '../styles/history.css';
import '../styles/overview.css';




const Transaction = ({transaction}) => {

    return (
       
           
                <div className="record">
                    <div className="record-left">
                        <img src={transaction.image} alt={transaction.name} />
                        <p>{transaction.name} </p>
                    </div>
                    <p className={`transaction-amount ${transaction.type === 'received' ? 'received' : 'spent'}`}>
                        {transaction.type === 'received' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </p>
                    <p className="record-date">{transaction.date}</p>
                </div>
           
     





    )
}

export default Transaction