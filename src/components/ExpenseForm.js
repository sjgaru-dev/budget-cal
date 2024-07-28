import React from 'react';
import './ExpenseForm.css';
import { MdSend } from 'react-icons/md';

const ExpenseForm = () => {
    return (
      <div>
        <h2>지출 입력</h2>
        <form>
          <div className="form-center">
            <div className="form-group">
              <label htmlFor="charge">지출 내역</label>
              <input
                type="text"
                className="form-control"
                id="charge"
                name="charge"
                placeholder="예) 물건 구입"
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">금액</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                name="amount"
                placeholder="예) 10000"
              />
            </div>
          </div>
          <button type="submit" className="btn">
            제출하기 <MdSend className="btn-icon" />
          </button>
        </form>
      </div>
    );
  }

export default ExpenseForm;
