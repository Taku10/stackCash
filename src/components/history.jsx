import React, { useEffect, useState } from 'react';
import transactionData from '../data/transactions.json';
import '../styles/history.css';
import Transaction from './Transaction';

const History = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 10;
    // Calculate the indices for the current page
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactionData.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Calculate total pages
    const totalPages = Math.ceil(transactionData.length / transactionsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

     useEffect(() => {
            document.title = "Stack Cash | Transactions";
        }, []);
    return (

        <div className="history-container">
            <div className='history-header'>
                <h1>Transaction History</h1>
                <div className="select-account">
                    <select name="accounts" id="accounts">
                        <option >Select Account</option>
                        <option value="chase">Chase</option>
                        <option value="wellsFargo">Wells Fargo</option>
                        <option value="usBank">Us Bank</option>
                    </select>
                </div>
            </div>

            <div>
                
            </div>
            <div className='transaction-list'>
                {currentTransactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>


    );
};

export default History;