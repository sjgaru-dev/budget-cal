import React from 'react';
import './ExpenseForm.css';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ charge, edit, handleCharge, amount, handleAmount, handleSubmit}) => {
    return (
      <div>
        <h2>지출 입력</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-center">
            <div className="form-group">
              <label htmlFor="charge">지출 내역</label>
              <input
                type="text"
                className="form-control"
                id="charge"
                value={charge}
                name="charge"
                placeholder="예) 물건 구입"
                onChange={handleCharge}
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">금액</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                value={amount}
                name="amount"
                placeholder="예) 10000"
                onChange={handleAmount}
              />
            </div>
          </div>
          <button type="submit" className="btn">
            { edit ? '수정' : '제출'}
            
            <MdSend className="btn-icon" />
          </button>
        </form>
      </div>
    );
  }

export default ExpenseForm;
